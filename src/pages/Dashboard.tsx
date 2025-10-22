import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-8">
        {/* Welcome Card */}
        <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-200 dark:border-indigo-500/50 rounded-full text-indigo-500 dark:text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">Hoş Geldiniz!</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-1">{user?.email}</p>
          {user?.user_metadata?.full_name && (
            <p className="text-xl font-semibold text-slate-600 dark:text-slate-300">{user.user_metadata.full_name}</p>
          )}

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`${import.meta.env.BASE_URL}chat.html`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-transform transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Gideon AI Chat'e Git
            </a>
            <button
              onClick={() => navigate('/prices')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-transform transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/50"
            >
              Gideon+
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-md rounded-xl p-6 flex flex-col items-start gap-4 transition-transform transform hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/50 text-green-500 dark:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Kimlik Doğrulandı</h3>
            <p className="text-slate-500 dark:text-slate-400">Hesabınız başarıyla doğrulandı ve aktif.</p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-md rounded-xl p-6 flex flex-col items-start gap-4 transition-transform transform hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Güvenli Oturum</h3>
            <p className="text-slate-500 dark:text-slate-400">Bağlantınız şifrelenmiş ve güvenli.</p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-md rounded-xl p-6 flex flex-col items-start gap-4 transition-transform transform hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-500 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Supabase Auth</h3>
            <p className="text-slate-500 dark:text-slate-400">Enterprise düzey kimlik doğrulama sistemi.</p>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Hesap Bilgileri</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">User ID:</span>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-mono break-all">{user?.id}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">E-posta:</span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{user?.email}</span>
            </div>
            {user?.created_at && (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Kayıt Tarihi:</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {new Date(user.created_at).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
