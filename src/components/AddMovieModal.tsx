

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlide";
import { useState } from "react";

type FormData = {
    title: string;
    description: string;
    image: string;
    star: number;
};

interface AddMovieModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export function AddMovieModal({ isOpen, onClose }: AddMovieModalProps) {
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);
    
    const { register, handleSubmit, reset } = useForm<FormData>();
    
    const dispatch = useDispatch();

    if (!isOpen) return null;

    const onSubmit: SubmitHandler<FormData> = (data) => {
        data.star = selectedRating;
        dispatch(addMovie(data));
        reset();
        setSelectedRating(0);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
            <div className="bg-[#18181b] rounded-lg shadow-lg p-8 w-full max-w-md relative border border-gray-700">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Adicionar Filme</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-gray-300">Título:</label>
                    <input
                        type="text"
                        placeholder="Título"
                        className="px-4 py-2 border border-gray-700 rounded-md bg-[#232326] text-white focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                        {...register("title", { required: true })}
                    />
                    <label className="text-gray-300">Descrição:</label>
                    <textarea
                        placeholder="Descrição"
                        className="px-4 py-2 border border-gray-700 rounded-md bg-[#232326] text-white focus:outline-none focus:ring-2 focus:ring-[#e50914] resize-none"
                        rows={3}
                        {...register("description", { required: true })}
                    />
                    <label className="text-gray-300">URL da Imagem:</label>
                    <input
                        type="text"
                        placeholder="URL da Imagem"
                        className="px-4 py-2 border border-gray-700 rounded-md bg-[#232326] text-white focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                        {...register("image")}
                    />
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300">Avaliação:</label>
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className="text-3xl focus:outline-none"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setSelectedRating(star)}
                                >
                                    <span className={`${(hoverRating || selectedRating) >= star ? 'text-yellow-400' : 'text-gray-400'}`}>
                                        &#9733;
                                    </span>
                                </button>
                            ))}
                            <span className="ml-2 text-gray-300">
                                {selectedRating > 0 ? `${selectedRating} estrela${selectedRating !== 1 ? 's' : ''}` : 'Sem avaliação'}
                            </span>
                        </div>
                    </div>
                    <input type="hidden" {...register("star")} value={selectedRating} />
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-[#e50914] text-white rounded-md hover:bg-[#b0060f] transition-colors font-semibold"
                    >
                        Adicionar
                    </button>
                </form>
            </div>
        </div>
    );
}

