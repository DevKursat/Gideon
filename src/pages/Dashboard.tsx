import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/dashboard.css';

export default function Dashboard() {
  const { user, signOut, updateUser } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(user?.user_metadata?.full_name || '');
  const email = user?.email || '';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const updates: { email?: string; data?: { full_name: string } } = {};
    if (email !== user?.email) {
      updates.email = email;
      setSuccess('E-posta adresinizi güncellemek için bir onay e-postası gönderildi. Lütfen e-postanızı kontrol edin.');
    }
    if (fullName !== user?.user_metadata?.full_name) {
      updates.data = { full_name: fullName };
      setSuccess('Adınız başarıyla güncellendi.');
    }

    if (Object.keys(updates).length === 0) {
      setIsEditing(false);
      setLoading(false);
      return;
    }

    try {
      const { error: updateError } = await updateUser(updates);
      if (updateError) {
        throw new Error(updateError);
      }
      // Başarı mesajı zaten yukarıda ayarlandı.
      setIsEditing(false);
    } catch (err: any) {
      setError(err.message || 'Güncelleme sırasında bir hata oluştu.');
      setSuccess(''); // Hata durumunda başarı mesajını temizle
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h2 className="nav-logo">Gideon</h2>
            <button
              onClick={() => navigate('/prices')}
              style={{
                background: 'none',
                border: 'none',
                color: '#a5b4fc',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}
            >
              Fiyatlandırma
            </button>
          </div>
          <button
            onClick={handleSignOut}
            className="btn-signout"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '10px',
                color: '#fca5a5',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Çıkış Yap
          </button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-card">
            <div className="welcome-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h1>Hoş Geldiniz!</h1>
            <p className="user-email">{user?.email}</p>
            {user?.user_metadata?.full_name && (
              <p className="user-name">{user.user_metadata.full_name}</p>
            )}
            
                          <a 
              href={(import.meta as any).env?.BASE_URL + 'chat.html'} 
              className="btn-chat-redirect"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Gideon AI Chat&apos;e Git
            </a>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Kimlik Doğrulandı</h3>
              <p>Hesabınız başarıyla doğrulandı ve aktif</p>
            </div>

            <div className="info-card">
              <div className="info-icon info">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3>Güvenli Oturum</h3>
              <p>Bağlantınız şifrelenmiş ve güvenli</p>
            </div>

            <div className="info-card">
              <div className="info-icon primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Supabase Auth</h3>
              <p>Enterprise düzey kimlik doğrulama sistemi</p>
            </div>
          </div>

          <div className="user-info-card">
            <div className="user-info-header">
              <h2>Hesap Bilgileri</h2>
              {!isEditing && (
                <button onClick={() => setIsEditing(true)} className="btn-edit">Düzenle</button>
              )}
            </div>

            {error && <div className="error-message" style={{marginBottom: '1rem'}}>{error}</div>}
            {success && <div className="success-message" style={{marginBottom: '1rem'}}>{success}</div>}

            {isEditing ? (
              <form onSubmit={handleUpdate}>
                <div className="user-info-grid">
                  <div className="user-info-item">
                    <label htmlFor="fullName">Ad Soyad</label>
                    <input id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} disabled={loading} />
                  </div>
                  <div className="user-info-item">
                    <label htmlFor="email">E-posta</label>
                    <input id="email" type="email" value={email} readOnly disabled />
                    <small style={{ color: '#9ca3af', marginTop: '5px', display: 'block' }}>E-posta adresi güvenlik nedeniyle değiştirilemez.</small>
                  </div>
                </div>
                <div className="edit-actions">
                  <button type="button" onClick={() => setIsEditing(false)} className="btn-cancel" disabled={loading}>İptal</button>
                  <button type="submit" className="btn-save" disabled={loading}>
                    {loading ? 'Kaydediliyor...' : 'Kaydet'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="user-info-grid">
                <div className="user-info-item">
                  <span className="info-label">Ad Soyad:</span>
                  <span className="info-value">{user?.user_metadata?.full_name || 'Belirtilmemiş'}</span>
                </div>
                <div className="user-info-item">
                  <span className="info-label">E-posta:</span>
                  <span className="info-value">{user?.email}</span>
                </div>
                <div className="user-info-item">
                  <span className="info-label">User ID:</span>
                  <span className="info-value">{user?.id}</span>
                </div>
                {user?.created_at && (
                  <div className="user-info-item">
                    <span className="info-label">Kayıt Tarihi:</span>
                    <span className="info-value">
                      {new Date(user.created_at).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}