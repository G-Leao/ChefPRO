import React from 'react';

export const AdminLista = () => {
  // Simulação de dados que estariam em um banco
  const receitas = [
    { id: 1, nome: "Risoto de Cogumelos", data: "10/05/2026" },
    { id: 2, nome: "Salmão Grelhado", data: "12/05/2026" },
    { id: 3, nome: "Pasta Italiana", data: "15/05/2026" },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--primary)' }}>Gerenciar Receitas</h2>
        <span style={{ color: 'var(--text-light)' }}>{receitas.length} receitas cadastradas</span>
      </div>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--secondary)', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}>ID</th>
            <th style={{ padding: '12px' }}>Nome</th>
            <th style={{ padding: '12px' }}>Data</th>
            <th style={{ padding: '12px' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {receitas.map(r => (
            <tr key={r.id} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '12px' }}>#{r.id}</td>
              <td style={{ padding: '12px', fontWeight: '500' }}>{r.nome}</td>
              <td style={{ padding: '12px', color: 'var(--text-light)' }}>{r.data}</td>
              <td style={{ padding: '12px' }}>
                <button style={{ padding: '5px 10px', fontSize: '0.8rem', marginRight: '5px', background: '#e1effe', color: 'var(--primary)' }}>Editar</button>
                <button style={{ padding: '5px 10px', fontSize: '0.8rem', background: '#fee2e2', color: '#dc2626' }}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const AdminNova = () => (
  <div style={{ maxWidth: '600px' }}>
    <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Cadastrar Nova Receita</h2>
    <div className="card">
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Nome da Receita</label>
        <input type="text" placeholder="Ex: Bolo de Chocolate" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Ingredientes</label>
        <textarea rows="4" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border)' }}></textarea>
      </div>
      <button style={{ width: '100%' }}>Salvar Receita</button>
    </div>
  </div>
);