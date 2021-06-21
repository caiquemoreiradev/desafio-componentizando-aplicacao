import { ButtonHTMLAttributes } from 'react';
import { Star, Clock } from 'react-feather';
import { UseMovies } from '../contexts/MovieContext';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  id: string;
}

export function MovieCard(props: MovieCardProps) {

  const { handleSelectedMovie } = UseMovies();

  return (
    <div className="movie-card" onClick={() => handleSelectedMovie(props.id)} >
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}