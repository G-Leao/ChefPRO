import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importação do Contexto
import { AuthProvider } from './context/AuthContext';

// Importação das Páginas Públicas
import { Home, ListaReceitas, DetalheReceita } from './pages/PublicPages';
import Login from './pages/Login';

// Importação do Layout Admin e suas Subpáginas
import AdminLayout from './layouts/AdminLayout';
import { AdminLista, AdminNova } from './pages/AdminPages';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* --- ROTAS PÚBLICAS --- */}
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<ListaReceitas />} />
          <Route path="/receita/:id" element={<DetalheReceita />} />
          <Route path="/login" element={<Login />} />

          {/* --- ROTA PROTEGIDA (ADMIN) --- */}
          {/* O AdminLayout funciona como um "casca" que contém o Header e Sidebar */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* Redireciona /admin direto para /admin/lista */}
            <Route index element={<Navigate to="/admin/lista" replace />} />
            
            <Route path="lista" element={<AdminLista />} />
            <Route path="nova" element={<AdminNova />} />
          </Route>

          {/* --- ROTA DE ERRO 404 --- */}
          <Route path="*" element={<div style={{ padding: '20px' }}><h1>404 - Página não encontrada</h1></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;