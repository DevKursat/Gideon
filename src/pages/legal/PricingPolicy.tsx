import React from 'react';
import '../../styles/legal/legal.css';
import { Link } from 'react-router-dom';

const PricingPolicy: React.FC = () => {
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1>Fiyatlandırma Politikası</h1>
        <p>Son Güncelleme: 22 Ekim 2025</p>

        <h2>1. Planlar ve Fiyatlandırma</h2>
        <p>Gideon, bir 'Free' (Ücretsiz) ve bir 'Premium' (Ücretli) plan sunmaktadır. Güncel özellikler ve fiyatlar <Link to="/pricing">Fiyatlandırma Sayfamızda</Link> detaylandırılmıştır.</p>
        <ul>
          <li><strong>Aylık Premium:</strong> $9.99 USD / ay</li>
          <li><strong>Yıllık Premium:</strong> $99 USD / yıl (İndirimli)</li>
        </ul>
        <p>Fiyatlar gelecekte değişebilir. Herhangi bir fiyat değişikliği, mevcut abonelik döneminizin sonunda yürürlüğe girecektir.</p>

        <h2>2. Ödemeler</h2>
        <p>Abonelik ücretleri, seçtiğiniz plana göre aylık veya yıllık olarak faturalandırılacaktır. Ödemeler şu anda aktif değildir ve bu bölüm yalnızca bilgilendirme amaçlıdır.</p>

        <h2>3. İptal ve Geri Ödeme</h2>
        <p>Aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal işlemi, mevcut fatura döneminizin sonunda geçerli olur ve o tarihe kadar Premium özelliklere erişiminiz devam eder. Yürürlükteki yasalar gerektirmediği sürece geri ödeme yapılmamaktadır.</p>

        <h2>4. Ücretsiz Deneme</h2>
        <p>Zaman zaman ücretsiz deneme süreleri sunabiliriz. Deneme süresinin sonunda, aboneliğinizi iptal etmediğiniz sürece sizden otomatik olarak ücret alınacaktır.</p>

        <Link to="/pricing" className="btn-back">Fiyatlandırma Sayfasına Geri Dön</Link>
      </div>
    </div>
  );
};

export default PricingPolicy;
