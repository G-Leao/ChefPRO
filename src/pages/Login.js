import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, role: 'admin' });
    navigate('/admin/lista');
  };

  return (
    <div style={{ 
      height: '100vh', display: 'flex', 
      background: `linear-gradient(rgba(0, 86, 179, 0.8), rgba(0, 86, 179, 0.8)), url('https://images.unsplash.com/photo-1556910110-ad5284725c16?auto=format&fit=crop&w=1200&q=80')`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      alignItems: 'center', justifyContent: 'center' 
    }}>
      <form onSubmit={handleSubmit} className="card" style={{ width: '400px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ background: 'var(--accent)', width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👨‍🍳</div>
          <h2 style={{ color: 'var(--primary)' }}>ChefPro Admin</h2>
          <p style={{ color: 'var(--text-light)' }}>Controle sua cozinha digital</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            value={email}
            style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', borderRadius: '8px', outline: 'none' }}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" style={{ width: '100%', padding: '14px' }}>Entrar Agora</button>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to="/" style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Sair e voltar ao site</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;