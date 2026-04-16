import { useEffect, useState } from 'react';
import { getMovies, deleteMovie, Movie } from '../services/movieService';

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await getMovies();
      setMovies(data);
    } catch (err) {
      setError('Не вдалося завантажити фільми. Перевірте бекенд!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadMovies(); }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Видалити цей фільм?')) {
      await deleteMovie(id);
      loadMovies(); // Оновлюємо список
    }
  };

  if (loading) return <div className="loader">Завантаження...</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="container">
      <h1>Мій Каталог Фільмів</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>Жанр: {movie.genre}</p>
            <div className="rating">⭐ {movie.rating}</div>
            <button onClick={() => handleDelete(movie.id!)} className="btn-delete">Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;