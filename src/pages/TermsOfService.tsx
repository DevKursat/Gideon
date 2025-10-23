import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8 sm:p-12">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-8 sm:p-10 border border-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-center">Kullanım Koşulları</h1>

        <p className="text-gray-400 mb-6">Son Güncelleme: 21 Ekim 2025</p>

        <div className="space-y-6 text-gray-300">
          <p>
            Lütfen hizmetlerimizi kullanmadan önce bu Kullanım Koşullarını (&quot;Koşullar&quot;) dikkatlice okuyun. Hizmetlerimize erişerek veya kullanarak, bu Koşullara bağlı kalmayı kabul etmiş olursunuz.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4">1. Hesaplar</h2>
          <p>
            Bizimle bir hesap oluşturduğunuzda, bize her zaman doğru, eksiksiz ve güncel bilgiler sağlamalısınız. Bunu yapmamanız, Koşulların ihlali anlamına gelir ve hizmetimizdeki hesabınızın derhal feshedilmesine neden olabilir.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4">2. Abonelikler</h2>
          <p>
            Bazı hizmetlerimiz abonelik bazında faturalandırılır. Aboneliğinizi iptal etmediğiniz sürece, yinelenen ve periyodik olarak (aylık veya yıllık gibi) faturalandırılırsınız.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4">3. Fikri Mülkiyet</h2>
          <p>
            Hizmet ve orijinal içeriği, özellikleri ve işlevselliği, Gideon ve lisans verenlerinin münhasır mülkiyetindedir ve öyle kalacaktır.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4">4. Sorumluluğun Sınırlandırılması</h2>
          <p>
            Yasaların izin verdiği azami ölçüde, Gideon veya yöneticileri, çalışanları, ortakları, acenteleri, tedarikçileri veya bağlı kuruluşları, herhangi bir dolaylı, arızi, özel, sonuç olarak ortaya çıkan veya cezai zarardan sorumlu olmayacaktır.
          </p>

          <h2 className="text-2xl font-semibold text-white pt-4">5. Değişiklikler</h2>
          <p>
            Tamamen kendi takdirimize bağlı olarak, bu Koşulları herhangi bir zamanda değiştirme veya güncelleme hakkını saklı tutarız. Bir revizyonun önemli olması durumunda, yeni koşulların yürürlüğe girmesinden en az 30 gün önce bildirimde bulunmaya çalışacağız.
          </p>

          <p className="pt-6 border-t border-gray-700">
            Bu Koşullar hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin.
          </p>
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="mt-8 text-purple-400 hover:text-purple-300 underline">
        Geri Dön
      </button>
    </div>
  );
};

export default TermsOfService;
