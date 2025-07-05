import { useState } from 'react';
import './App.css'

import { useSelector } from 'react-redux';

import { CardMovie } from './components/CardMovie'
import { MovieFilter } from './components/MovieFilter'
import { AddMovieModal } from './components/AddMovieModal'

import type { RootState } from './store';
import type { MovieProps } from './types/movieType';

function App() {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-4" style={{ maxWidth: '1200px' }}>
      <div className="flex flex-col items-center mb-6 gap-4">
        <MovieFilter />
        <div className='flex gap-2'>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            + Adicionar
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-colors"
            onClick={() => { }}
          >
            - Remover
          </button>
        </div>

      </div>
      <div className="flex flex-wrap justify-center gap-4">
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
      <AddMovieModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App
