import { useForm } from 'react-hook-form';
import { createMovie } from '../services/movieService';
import { useNavigate } from 'react-router-dom';

const AddMoviePage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await createMovie(data);
    navigate('/movies'); // Після додавання перекидає на список
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h1>Додати фільм</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input {...register('title')} placeholder="Назва" />
        <input {...register('genre')} placeholder="Жанр" />
        <input type="number" step="0.1" {...register('rating')} placeholder="Рейтинг" />
        <button type="submit">Зберегти</button>
      </form>
    </div>
  );
};

export default AddMoviePage;