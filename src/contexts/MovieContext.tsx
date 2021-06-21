import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
    Genre: string;
    Plot: string;
    Year: string;
    Iframe: string;
}

interface MoviesProviderProps {
    children: ReactNode
}

interface MoviesContextData {
    genres: GenreResponseProps[];
    selectedGenre: GenreResponseProps;
    selectedGenreId: number;
    movies: MovieProps[];
    selectedMovie: MovieProps[];
    hasModal: boolean;
    handleClickButton: (id: number) => void;
    handleSelectedMovie: (id: string) => void;
    handleToogleModal: () => void;
}


const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {

    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    const [selectedMovie, setSelectedMovie] = useState<MovieProps[]>([]);

    const [ hasModal, setHasModal ] = useState(false);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
            setGenres(response.data);
        });
    }, []);

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
            setMovies(response.data);
        });

        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    function handleSelectedMovie(id: string) {

        const movieSelected  = movies.filter(movie => movie.imdbID === id);

        console.log(movieSelected)

        setSelectedMovie(movieSelected);
    }

    function handleToogleModal() {
        setHasModal(!hasModal);
    }

    return (
        <MoviesContext.Provider value={{ 
            genres, 
            selectedGenre, 
            selectedGenreId, 
            movies, 
            selectedMovie,
            hasModal,
            handleClickButton, 
            handleSelectedMovie,
            handleToogleModal
            }}>
            {children}
        </MoviesContext.Provider>
    )
}

export function UseMovies() {

    const context = useContext(MoviesContext);

    return context;
}