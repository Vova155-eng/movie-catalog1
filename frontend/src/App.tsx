import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import AddMoviePage from './pages/AddMoviePage';

function App() {
  return (
    <Router>
      <nav style={{ 
        padding: '15px 60px', 
        background: '#1a2634', // Темно-синій колір панелі
        display: 'flex', 
        gap: '30px',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <Link to="/movies" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>Список фільмів</Link>
        <Link to="/add" style={{ color: '#bdc3c7', textDecoration: 'none', fontSize: '18px' }}>+ Додати новий</Link>
      </nav>

      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/add" element={<AddMoviePage />} />
        <Route path="/" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;