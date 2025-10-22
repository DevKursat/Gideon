import React from 'react';
import '../../styles/legal/legal.css';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1>Kullanım Koşulları</h1>
        <p>Son Güncelleme: 22 Ekim 2025</p>

        <h2>1. Giriş</h2>
        <p>Gideon ("Uygulama") hizmetine hoş geldiniz. Bu Kullanım Koşulları ("Koşullar"), Uygulamamızı kullanımınızı yönetir. Hizmetlerimizi kullanarak bu Koşulları kabul etmiş olursunuz.</p>

        <h2>2. Hizmetlerin Kullanımı</h2>
        <p>Hizmetlerimizi yalnızca yasal amaçlarla ve bu Koşullara uygun olarak kullanmayı kabul edersiniz. Sağladığımız arayüz dışında herhangi bir yöntemle hizmetlerimize erişmeye çalışmamalısınız.</p>

        <h2>3. Hesaplar</h2>
        <p>Bir hesap oluşturduğunuzda, bize her zaman doğru, eksiksiz ve güncel bilgiler vermelisiniz. Bunu yapmamanız, Koşulların ihlali anlamına gelir ve hizmetimizdeki hesabınızın derhal feshedilmesine neden olabilir.</p>

        <h2>4. Fikri Mülkiyet</h2>
        <p>Hizmet ve orijinal içeriği, özellikleri ve işlevselliği Gideon ve lisans verenlerinin münhasır mülkiyetindedir ve öyle kalacaktır.</p>

        <h2>5. Abonelikler ve Ödemeler</h2>
        <p>Bazı hizmetlerimiz abonelik bazında ücretlendirilir. Abonelikler hakkında daha fazla bilgi için lütfen <Link to="/pricing-policy">Fiyatlandırma Politikamıza</Link> bakın.</p>

        <h2>6. Sorumluluğun Sınırlandırılması</h2>
        <p>Gideon, hizmetin kullanımından kaynaklanan dolaylı, arızi, özel, sonuç olarak ortaya çıkan veya cezai zararlardan sorumlu olmayacaktır.</p>

        <h2>7. Değişiklikler</h2>
        <p>Bu Koşulları herhangi bir zamanda değiştirme veya değiştirme hakkımızı saklı tutarız. Değişiklikler yürürlüğe girdikten sonra hizmetimize erişmeye veya hizmetimizi kullanmaya devam ederek, revize edilmiş şartlara bağlı kalmayı kabul edersiniz.</p>
        
        <Link to="/register" className="btn-back">Geri Dön</Link>
      </div>
    </div>
  );
};

export default TermsOfService;
