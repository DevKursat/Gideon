-- 1. supabase_auth_admin rolüne public şemasında ve user_plans tablosunda yetki ver
GRANT USAGE ON SCHEMA public TO supabase_auth_admin;
GRANT ALL ON TABLE public.user_plans TO supabase_auth_admin;
GRANT ALL ON FUNCTION public.handle_new_user() TO supabase_auth_admin;


-- 2. Mevcut trigger'ı ve fonksiyonu güvenli bir şekilde kaldır
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 3. Tabloyu oluştur (eğer yoksa)
CREATE TABLE IF NOT EXISTS public.user_plans (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL DEFAULT 'free',
  subscription_status TEXT,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Yeni kullanıcı için plan oluşturan fonksiyonu YETKİLİ (SECURITY DEFINER) olarak oluştur
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.user_plans (user_id, plan_name)
  VALUES (new.id, 'free');
  RETURN new;
END;
$$;

-- 5. Fonksiyonun sahibini supabase_admin olarak ayarla (güvenlik için)
ALTER FUNCTION public.handle_new_user() OWNER TO supabase_admin;

-- 6. Trigger'ı yeniden oluştur
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 7. Diğer trigger ve RLS politikalarını yeniden düzenle (temizlik için)
DROP TRIGGER IF EXISTS on_user_plan_update ON public.user_plans;
CREATE OR REPLACE FUNCTION handle_user_plan_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_user_plan_update
BEFORE UPDATE ON user_plans
FOR EACH ROW
EXECUTE PROCEDURE handle_user_plan_update();

-- RLS Politikaları
ALTER TABLE user_plans ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON public.user_plans;
DROP POLICY IF EXISTS "Users can view their own plan." ON public.user_plans;
DROP POLICY IF EXISTS "Users can update their own plan." ON public.user_plans;

CREATE POLICY "Allow insert for authenticated users"
  ON public.user_plans FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own plan."
  ON user_plans FOR SELECT
  USING ( auth.uid() = user_id );

CREATE POLICY "Users can update their own plan."
  ON user_plans FOR UPDATE
  USING ( auth.uid() = user_id );

