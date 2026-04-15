import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { createMovie } from '../services/movieService';
import { useNavigate } from 'react-router-dom';

// Схема валідації
const movieSchema = z.object({
  title: z.string().min(2, 'Назва має бути не менше 2 символів'),
  genre: z.string().min(3, 'Вкажіть жанр'),
  rating: z.coerce.number().min(1, 'Мінімум 1').max(10, 'Максимум 10'),
});

type MovieFormData = z.infer<typeof movieSchema>;

const AddMoviePage = () => { // Назва всередині файлу
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<MovieFormData>({
    resolver: zodResolver(movieSchema),
    defaultValues: { title: '', genre: '', rating: 0 }
  });

  const onSubmit = async (data: MovieFormData) => {
    try {
      await createMovie(data);
      alert('Фільм успішно додано!');
      navigate('/movies'); 
    } catch (error) {
      console.error('Помилка:', error);
      alert('Помилка! Перевір чи запущено backend');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ lineHeight: '1.4', marginBottom: '30px', textAlign: 'center', paddingTop: '20px' }}>
        Додати новий фільм
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input {...register('title')} placeholder="Назва фільму" style={{ padding: '8px' }} />
        {errors.title && <p style={{ color: 'red', fontSize: '12px' }}>{errors.title.message}</p>}

        <input {...register('genre')} placeholder="Жанр" style={{ padding: '8px' }} />
        {errors.genre && <p style={{ color: 'red', fontSize: '12px' }}>{errors.genre.message}</p>}

        <input type="number" step="0.1" {...register('rating')} placeholder="Рейтинг" style={{ padding: '8px' }} />
        {errors.rating && <p style={{ color: 'red', fontSize: '12px' }}>{errors.rating.message}</p>}

        <button type="submit" style={{ padding: '10px', backgroundColor: '#646cff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Зберегти
        </button>
      </form>
    </div>
  );
};

export default AddMoviePage;