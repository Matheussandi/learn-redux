import type { MovieProps } from "../types/movieType";

interface CardMovieProps extends MovieProps {
  onDeleteClick?: () => void;
  showDelete?: boolean;
}

export function CardMovie({ title, description, image, star, onDeleteClick, showDelete }: CardMovieProps) {
  return (
    <div className="relative group w-64 h-80 m-4 cursor-pointer rounded-lg overflow-hidden shadow-lg bg-zinc-900 border-2 border-zinc-800 hover:z-10 transition-all duration-300">
      {/* Botão de excluir no canto superior direito, visível quando modo de exclusão está ativo */}
      {showDelete && (
        <button
          className="absolute top-2 right-2 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 shadow-lg transition-opacity duration-200"
          style={{ pointerEvents: 'auto' }}
          title="Excluir filme"
          onClick={(e) => {
            e.stopPropagation();
            if (onDeleteClick) onDeleteClick();
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="text-lg font-bold text-white mb-1 truncate" title={title}>{title}</h2>
        <p className="text-gray-200 text-xs line-clamp-3 mb-2">{description}</p>
        <div className="flex items-center">
          <span className="bg-yellow-400 text-zinc-900 text-xs font-bold px-2 py-0.5 rounded-full flex items-center mr-2">
            <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
            {star}
          </span>
        </div>
      </div>
    </div>
  );
};