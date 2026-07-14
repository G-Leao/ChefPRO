import { Link, useParams } from 'react-router-dom';

export const Home = () => (
  <div className="container" style={{ textAlign: 'center', minHeight: '80vh' }}>
    {/* Imagem de Destaque (Hero) */}
    <img 
      src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
      alt="Cozinha Profissional" 
      style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    />
    
    <h1 style={{ fontSize: '3.5rem', color: 'var(--primary)', fontWeight: '800' }}>ChefPro</h1>
    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 32px' }}>
      Gerencie suas receitas com o sistema utilizado pelos maiores chefs.
    </p>
    <div>
      <Link to="/receitas" style={{ marginRight: '16px' }}><button>Explorar Receitas</button></Link>
      <Link to="/login"><button style={{ background: 'white', color: 'var(--primary)', border: '1px solid var(--primary)' }}>Admin</button></Link>
    </div>
  </div>
);

export const ListaReceitas = () => {
  const receitasExemplo = [
    { id: 1, nome: "Risoto de Cogumelos", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=400&q=80" },
    { id: 2, nome: "Salmão Grelhado", img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=400&q=80" },
    { id: 3, nome: "Pasta Italiana", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=400&q=80" },
    { id: 4, nome: "Torta de Frutas", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="container">
      <h2 style={{ marginBottom: '32px', color: 'var(--text-dark)' }}>Receitas Disponíveis</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {receitasExemplo.map(item => (
          <div key={item.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={item.img} alt={item.nome} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--primary)' }}>{item.nome}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: '10px 0' }}>
                Uma combinação perfeita de sabores selecionados.
              </p>
              <Link to={`/receita/${item.id}`} style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Ver Detalhes →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DetalheReceita = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="card" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <img 
          src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=500&q=80" 
          alt="Detalhe" 
          style={{ width: '400px', borderRadius: '10px' }} 
        />
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{ color: 'var(--primary)' }}>Receita do Chef #{id}</h2>
          <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid var(--border)' }} />
          <h4>Ingredientes:</h4>
          <ul style={{ margin: '15px 0 30px 20px', color: 'var(--text-light)' }}>
            <li>Ingrediente Premium 1</li>
            <li>Ingrediente Especial 2</li>
            <li>Tempero do Chef</li>
          </ul>
          <Link to="/receitas"><button>Voltar</button></Link>
        </div>
      </div>
    </div>
  );
};