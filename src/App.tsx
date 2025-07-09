import { useState } from 'react';

import { useSelector } from 'react-redux';

import { CardMovie } from './components/CardMovie'
import { MovieFilter } from './components/MovieFilter'
import { AddMovieModal } from './components/AddMovieModal'
import { DeleteConfirmModal } from './components/DeleteConfirmModal'

import type { RootState } from './store';
import type { MovieProps } from './types/movieType';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const movies = useSelector((state: RootState) => state.movies.movies);

  const handleRemoveClick = () => {
    setShowDelete(prev => !prev);
  };

  const handleDeleteClick = (movieId: number) => {
    setSelectedMovieId(movieId);
    setDeleteModalOpen(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4" style={{ maxWidth: '1200px' }}>
      <div className="flex flex-col items-center mb-6 gap-4">
        <MovieFilter
          onAddClick={() => setIsModalOpen(true)}
          onRemoveClick={handleRemoveClick}
        />
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
            onDeleteClick={() => handleDeleteClick(movie.id)}
            showDelete={showDelete}
          />
        ))}
      </div>

      <AddMovieModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        movieId={selectedMovieId}
        onClose={() => setDeleteModalOpen(false)}
      />
    </div>
  );
}

export default App
