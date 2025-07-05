import './App.css'
import { CardMovie } from './components/CardMovie'
import type { MovieProps } from './types/movieType';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

function App() {
  const movies = useSelector((state: RootState) => state.movies.movies);

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto" style={{ maxWidth: '1200px' }}>
      {movies.map((movie: MovieProps) => (
        <CardMovie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          image={movie.image}
          star={movie.star}
        />
      ))}
    </div>
  );
}

export default App
