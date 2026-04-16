import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';

// Додано export, щоб MoviesPage.tsx міг бачити цей тип
export interface Movie {
  id?: number;
  title: string;
  genre: string;
  rating: number;
}

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMovie = async (movie: Movie): Promise<Movie> => {
  const response = await axios.post(API_URL, movie);
  return response.data;
};

export const deleteMovie = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};