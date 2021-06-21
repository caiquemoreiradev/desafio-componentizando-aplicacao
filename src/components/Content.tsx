import { UseMovies } from "../contexts/MovieContext";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';
import { Link } from "react-router-dom";

export function Content() {

  const { selectedGenre, movies } = UseMovies();

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <Link to='/details'>
              <MovieCard
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}