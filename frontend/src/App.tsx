import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AddMoviePage from './pages/MoviesPage'; 

function App() {
  return (
    <Router>
      <header style={{ background: '#1a1a1a', padding: '1rem', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#646cff' }}>Головна</Link>
        <Link to="/movies" style={{ color: '#646cff' }}>Список фільмів</Link>
        <Link to="/add" style={{ color: '#646cff' }}>+ Додати новий</Link>
      </header>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h2>Головна сторінка</h2>} />
          <Route path="/movies" element={<h2>Тут буде список фільмів</h2>} />
          <Route path="/add" element={<AddMoviePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;