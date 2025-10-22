import React from 'react';
import './UpgradeModal.css';

interface UpgradeModalProps {
  featureName: string;
  onClose: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ featureName, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">&times;</button>
        <h2>Limitlerinizi Aştınız</h2>
        <p>
          <strong>{featureName}</strong> özelliğini daha fazla kullanmak için ücretsiz plan limitlerinizi doldurdunuz.
        </p>
        <p>
          Sınırsız erişim ve daha birçok premium özellik için hesabınızı şimdi yükseltin.
        </p>
        <div className="modal-actions">
          <button onClick={onClose} className="btn-secondary">
            Daha Sonra
          </button>
          <a href="/pricing" className="btn-primary">
            Plana Göz At
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
