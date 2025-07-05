

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlide";

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
    const { register, handleSubmit, reset } = useForm<FormData>();

    const dispatch = useDispatch();

    if (!isOpen) return null;

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(addMovie(data));

        console.table(data); // Log the new movie data to the console

        reset();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80">
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
                    <div className="flex items-center gap-2">
                        <label className="text-gray-300">Estrela:</label>
                        <input
                            type="number"
                            min={0}
                            max={5}
                            className="w-20 px-2 py-1 border border-gray-700 rounded-md bg-[#232326] text-white focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                            {...register("star", { required: true, min: 0, max: 5 })}
                        />
                    </div>
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

