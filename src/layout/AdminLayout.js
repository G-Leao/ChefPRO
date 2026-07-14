import { Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminLayout.css'; 

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Verifica se o usuário está logado
  if (!user) return <Navigate to="/login" replace />;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <div className="logo">ChefPro <span>Admin</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.9rem' }}>{user.email}</span>
          <button onClick={handleLogout} className="btn-logout">Sair</button>
        </div>
      </header>
      
      <div className="admin-body">
        <aside className="admin-sidebar">
          <nav>
            <ul>
              <li><Link to="/admin/lista">📋 Lista de Receitas</Link></li>
              <li><Link to="/admin/nova">➕ Nova Receita</Link></li>
              <hr style={{ margin: '15px 0', border: '0', borderTop: '1px solid var(--border)' }} />
              <li><Link to="/">🏠 Ir para o Site</Link></li>
            </ul>
          </nav>
        </aside>
        
        <main className="admin-content">
          {/* O Outlet é onde o AdminLista ou AdminNova vão aparecer! */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;