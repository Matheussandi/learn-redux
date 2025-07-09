# Redux Toolkit - Gerenciador de Filmes

Este projeto é uma aplicação React que utiliza Redux Toolkit para gerenciar o estado global de uma lista de filmes. A aplicação permite visualizar, adicionar e remover filmes, demonstrando conceitos fundamentais de gerenciamento de estado com Redux Toolkit.

[preview.webm](https://github.com/user-attachments/assets/483ca437-8aa7-4f62-8036-764e60fb88d9)

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces
- **TypeScript**: Superset JavaScript com tipagem estática
- **Redux Toolkit**: Biblioteca oficial para gerenciamento de estado eficiente com Redux
- **React Redux**: Integração oficial do Redux com React
- **React Hook Form**: Biblioteca para gerenciamento de formulários
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Vite**: Build tool e servidor de desenvolvimento

## 📋 Funcionalidades

- **Visualização de filmes**: Cards interativos com imagens, títulos, descrições e avaliações
- **Adição de filmes**: Modal interativo para cadastro de novos filmes
- **Remoção de filmes**: Interface para exclusão de filmes com confirmação
- **Avaliação por estrelas**: Componente interativo para avaliação dos filmes
- **Listagem responsiva**: Layout adaptável a diferentes tamanhos de tela

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Matheussandi/learn-redux.git
cd learn-redux
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:5173
```

## 🧠 Conceitos de Redux Toolkit Implementados

### Store

O arquivo `store.ts` configura a store global do Redux utilizando `configureStore` do Redux Toolkit:

```typescript
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlide";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
```

### Slice

O arquivo `movieSlide.ts` implementa um slice utilizando `createSlice` do Redux Toolkit:

```typescript
import { createSlice } from "@reduxjs/toolkit";
import type { MovieState } from "./types/movieType";
import { moviesMock } from "./mock/movies";

const initialState: MovieState = {
  movies: moviesMock,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.movies[state.movies.length - 1].id + 1,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image,
        star: action.payload.star,
      }
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
  },
});
```

### Hooks do Redux

Nos componentes, são utilizados os hooks do React Redux:

- `useSelector`: Para acessar o estado da store
- `useDispatch`: Para despachar ações

## 📝 Estrutura do Projeto

```
├── public/
│   └── redux.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddMovieModal.tsx
│   │   ├── CardMovie.tsx
│   │   ├── DeleteConfirmModal.tsx
│   │   └── MovieFilter.tsx
│   ├── mock/
│   │   └── movies.ts
│   ├── types/
│   │   └── movieType.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── movieSlide.ts
│   └── store.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🧪 Aprendizados sobre Redux Toolkit

O Redux Toolkit simplifica o uso do Redux através de:

1. **Configuração simplificada**: `configureStore` configura automaticamente o Redux DevTools e middleware padrão
2. **Reducers imutáveis**: `createSlice` permite escrever lógica de reducer "mutável" que é convertida em atualizações imutáveis
3. **Menos boilerplate**: Não é necessário escrever types, action creators ou constantes manualmente
4. **Tipagem forte**: Integração natural com TypeScript para melhor experiência de desenvolvimento