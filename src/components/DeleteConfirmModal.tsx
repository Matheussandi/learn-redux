import { useDispatch } from 'react-redux';
import { removeMovie } from '../movieSlide';

interface DeleteConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    movieId: number | null;
}

export function DeleteConfirmModal({ isOpen, onClose, movieId }: DeleteConfirmModalProps) {
    const dispatch = useDispatch();

    async function handleDeleMovie() {
        if (movieId !== null) {
            dispatch(removeMovie(movieId));
        }
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
            <div className="bg-[#18181b] rounded-lg shadow-lg p-8 w-full max-w-xs relative border border-gray-700 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4 text-center text-white">Confirmar exclusão</h2>
                <p className="text-gray-300 mb-6 text-center">Tem certeza que deseja excluir este filme?</p>
                <div className="flex gap-4">
                    <button
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors font-semibold"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-semibold"
                        onClick={handleDeleMovie}
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}
