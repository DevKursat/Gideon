import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pricing/pricing.css';
import UpgradeModal from '../../components/UpgradeModal'; // Modal'ı import et

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [modalFeature, setModalFeature] = useState('');

  const handleToggle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  // Örnek kullanım: Bir özelliğin limitini aştığında bu fonksiyonu çağır
  const triggerUpgradeModal = (featureName: string) => {
    setModalFeature(featureName);
    setShowUpgradeModal(true);
  };

  return (
    <>
      {showUpgradeModal && (
        <UpgradeModal 
          featureName={modalFeature} 
          onClose={() => setShowUpgradeModal(false)} 
        />
      )}
      <div className="pricing-container">
        <header className="pricing-header">
          <h1>Size Uygun Planı Seçin</h1>
          <p>Premium planımızla Gideon'un tüm potansiyelini ortaya çıkarın.</p>
          <div className="toggle-container">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Aylık</span>
            <label className="switch" htmlFor="billing-toggle">
              <input 
                type="checkbox" 
                id="billing-toggle"
                checked={billingCycle === 'yearly'}
                onChange={handleToggle}
              />
              <span className="slider round"></span>
            </label>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>
              Yıllık <span className="discount">(%17 Tasarruf Edin)</span>
            </span>
          </div>
        </header>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h2>Ücretsiz</h2>
            <p className="price">
              ₺0<span>/ay</span>
            </p>
            <p className="description">Temel sohbet ve keşif için.</p>
            <ul className="features">
              <li>✓ Sınırsız temel sohbet</li>
              <li>✓ Son 10 sohbeti saklama</li>
              <li>✓ Standart model erişimi</li>
              <li>✓ Mesaj başına 1 fotoğraf</li>
              <li onClick={() => triggerUpgradeModal('Derin Araştırma')} className="feature-limit-trigger">
                ✓ 15 Derin Araştırma/ay
              </li>
              <li onClick={() => triggerUpgradeModal('Sohbet Sabitleme')} className="feature-limit-trigger">
                ✓ 1 sohbeti sabitleme
              </li>
            </ul>
            <button className="btn-secondary" disabled>Mevcut Planınız</button>
          </div>
          <div className="pricing-card premium">
            <h2>Premium</h2>
            <p className="price">
              {billingCycle === 'monthly' ? '$9.99' : '$99'}
              <span>{billingCycle === 'monthly' ? '/month' : '/year'}</span>
            </p>
            <p className="description">Profesyoneller, öğrenciler ve yoğun kullanıcılar için.</p>
            <ul className="features">
              <li>✓ Her şey sınırsız</li>
              <li>✓ Access to <strong className="gideon-plus">Gideon+</strong> model</li>
              <li>✓ Çoklu dosya yükleme (PDF, DOCX, vb.)</li>
              <li>✓ Sohbetleri klasörlere ayırma</li>
              <li>✓ Öncelikli 7/24 destek</li>
              <li>✓ Reklamsız deneyim</li>
            </ul>
            <button className="btn-primary">Premium'a Yükselt</button>
          </div>
        </div>
        <div className="policy-link">
          Satın alarak <Link to="/pricing-policy">Fiyatlandırma Politikamızı</Link> kabul etmiş olursunuz.
        </div>
        <div className="back-to-dashboard">
          <Link to="/dashboard">Kontrol Paneline Geri Dön</Link>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
