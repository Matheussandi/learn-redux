export interface MovieProps {
  id: number;
  title: string;
  description: string;
  image: string;
  star: number;
}

export interface MovieState {
  movies: MovieProps[];
}