import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/prices.css'; // Yeni CSS dosyasını içe aktar

// Özellikler için SVG ikonları
const CheckIcon = () => (
  <svg className="icon check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const Prices: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const navigate = useNavigate();

  return (
    <div className="prices-container">
      <button
        onClick={() => window.location.href = `${import.meta.env.BASE_URL}chat.html`}
        className="chat-redirect-btn"
      >
        Gideon AI Chat'e Git
      </button>

      <div className="prices-header">
        <h1>Abonelik Planları</h1>
        <p>Gideon'un tüm potansiyelini ortaya çıkarın. Size en uygun planı seçin.</p>
      </div>

      <div className="billing-cycle-switch">
        <button
          className={billingCycle === 'monthly' ? 'active' : ''}
          onClick={() => setBillingCycle('monthly')}
        >
          Aylık
        </button>
        <button
          className={billingCycle === 'yearly' ? 'active' : ''}
          onClick={() => setBillingCycle('yearly')}
        >
          Yıllık
        </button>
      </div>

      <div className="plans-grid">
        {/* Free Plan */}
        <div className="plan-card">
          <div className="plan-header">
            <h2>Free</h2>
            <p className="plan-price">
              $0
              <span>/ay</span>
            </p>
          </div>
          <ul className="features-list">
            <li className="feature-item"><CheckIcon /> Sınırsız temel sohbet</li>
            <li className="feature-item"><CheckIcon /> Son 10 sohbeti saklama</li>
            <li className="feature-item"><CheckIcon /> Standart model erişimi</li>
            <li className="feature-item"><CheckIcon /> Mesaj başına 1 fotoğraf</li>
            <li className="feature-item"><CheckIcon /> Derin Araştırma (15 sorgu/ay)</li>
            <li className="feature-item"><CheckIcon /> 1 sohbet sabitleme</li>
          </ul>
          <button className="btn-secondary" disabled>Mevcut Planınız</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-card premium">
          <div className="plan-badge">Gideon+</div>
          <div className="plan-header">
            <h2>Premium</h2>
            {billingCycle === 'monthly' ? (
              <p className="plan-price">
                $9.99
                <span>/ay</span>
              </p>
            ) : (
              <p className="plan-price">
                $99.99
                <span>/yıl</span>
              </p>
            )}
          </div>
          <ul className="features-list">
            <li className="feature-item"><CheckIcon /> Sınırsız sohbet geçmişi</li>
            <li className="feature-item"><CheckIcon /> Gelişmiş model erişimi</li>
            <li className="feature-item"><CheckIcon /> Çoklu dosya yükleme (PDF, DOCX)</li>
            <li className="feature-item"><CheckIcon /> Sınırsız Derin Araştırma</li>
            <li className="feature-item"><CheckIcon /> Sohbetleri klasörleme</li>
            <li className="feature-item"><CheckIcon /> Öncelikli destek</li>
            <li className="feature-item"><CheckIcon /> Reklamsız deneyim</li>
          </ul>
          <button className="btn-primary">Abone Ol</button>
          {billingCycle === 'monthly' && (
            <p className="plan-footnote">Yıllık abone ol, %17 tasarruf et!</p>
          )}
        </div>
      </div>

      <div className="prices-footer">
        <p>
          Abonelikler otomatik olarak yenilenir. Hizmetimizi kullanarak{' '}
          <Link to="/terms-of-service" className="auth-link">Kullanım Koşulları</Link>
          'nı kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  );
};

export default Prices;
