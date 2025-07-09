interface MovieFilterProps {
  onAddClick?: () => void;
  onRemoveClick?: () => void;
}

export function MovieFilter({ onAddClick, onRemoveClick }: MovieFilterProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 w-full">
      <div className="relative w-72 flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Buscar filme..."
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md"
        />
      </div>
      {/* Botões de adicionar e remover ao lado do input */}
      <div className="flex gap-2">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-md shadow transition-colors"
          title="Adicionar filme"
          onClick={onAddClick}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-md shadow transition-colors"
          title="Remover filme"
          onClick={onRemoveClick}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
