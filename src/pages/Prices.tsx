import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSubscription } from '../contexts/SubscriptionContext';

const CheckIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={`w-5 h-5 text-green-500 dark:text-green-400 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const Prices: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const { plan } = useSubscription();
  const isPremium = plan === 'premium';

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">
          Abonelik Planları
        </h1>
        <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Gideon'un tüm potansiyelini ortaya çıkarın. Size en uygun planı seçin.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
        <div className="p-1 flex bg-slate-200 dark:bg-slate-700 rounded-full">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Aylık
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              billingCycle === 'yearly'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Yıllık
          </button>
        </div>
        <button
          onClick={() => (window.location.href = `${import.meta.env.BASE_URL}chat.html`)}
          className="px-4 py-2 text-sm font-semibold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          Gideon AI Chat'e Git
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col transition hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Free</h2>
          <p className="mt-4 text-4xl font-extrabold text-slate-900 dark:text-white">
            $0<span className="text-lg font-medium text-slate-500 dark:text-slate-400">/ay</span>
          </p>
          <ul className="mt-8 space-y-4 flex-grow">
            <li className="flex items-center gap-3"><CheckIcon /> Sınırsız temel sohbet</li>
            <li className="flex items-center gap-3"><CheckIcon /> Son 10 sohbeti saklama</li>
            <li className="flex items-center gap-3"><CheckIcon /> Standart model erişimi</li>
            <li className="flex items-center gap-3"><CheckIcon /> Mesaj başına 1 fotoğraf</li>
            <li className="flex items-center gap-3"><CheckIcon /> Derin Araştırma (15 sorgu/ay)</li>
            <li className="flex items-center gap-3"><CheckIcon /> 1 sohbet sabitleme</li>
          </ul>
          <button
            className="mt-8 w-full py-3 px-6 rounded-lg text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 font-semibold cursor-not-allowed"
            disabled
          >
            Mevcut Planınız
          </button>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-white dark:bg-slate-800/50 border border-purple-400 dark:border-purple-600 rounded-2xl p-8 flex flex-col shadow-2xl shadow-purple-500/10 hover:-translate-y-1 transition">
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full">
            Gideon+
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Premium</h2>
          <p className="mt-4 text-4xl font-extrabold text-slate-900 dark:text-white">
            {billingCycle === 'monthly' ? '$9.99' : '$99.99'}
            <span className="text-lg font-medium text-slate-500 dark:text-slate-400">
              {billingCycle === 'monthly' ? '/ay' : '/yıl'}
            </span>
          </p>
          <ul className="mt-8 space-y-4 flex-grow">
            <li className="flex items-center gap-3"><CheckIcon /> Sınırsız sohbet geçmişi</li>
            <li className="flex items-center gap-3"><CheckIcon /> Gelişmiş model erişimi</li>
            <li className="flex items-center gap-3"><CheckIcon /> Çoklu dosya yükleme (PDF, DOCX)</li>
            <li className="flex items-center gap-3"><CheckIcon /> Sınırsız Derin Araştırma</li>
            <li className="flex items-center gap-3"><CheckIcon /> Sohbetleri klasörleme</li>
            <li className="flex items-center gap-3"><CheckIcon /> Öncelikli destek</li>
            <li className="flex items-center gap-3"><CheckIcon /> Reklamsız deneyim</li>
          </ul>
          {isPremium ? (
            <div className="mt-8 w-full py-3 px-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-center">
              Gideon+ kullanıyorsunuz
            </div>
          ) : (
            <button className="mt-8 w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity">
              Abone Ol
            </button>
          )}
          {billingCycle === 'yearly' && !isPremium && (
            <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
              Aylık plana göre %17 tasarruf edin!
            </p>
          )}
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
        <p>
          Abonelikler otomatik olarak yenilenir. Hizmetimizi kullanarak{' '}
          <Link to="/terms-of-service" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Kullanım Koşulları
          </Link>
          'nı kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  );
};

export default Prices;
