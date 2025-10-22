import React from 'react';
import { Link } from 'react-router-dom';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, featureName }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(5px)' }}
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl w-full max-w-md text-center transform transition-all"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-6">
          <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Premium Özellik</h2>
        <p className="text-gray-400 mb-8">
          <strong>&apos;{featureName}&apos;</strong> özelliğini kullanabilmek için Gideon+ abonesi olmanız gerekmektedir.
        </p>
        <Link
          to="/prices"
          className="w-full inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          onClick={onClose}
        >
          Gideon+ Planlarını İncele
        </Link>
        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-400 hover:text-white transition"
        >
          Belki Sonra
        </button>
      </div>
    </div>
  );
};

export default UpgradeModal;
