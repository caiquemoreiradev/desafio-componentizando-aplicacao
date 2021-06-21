import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UseMovies } from '../contexts/MovieContext';

import '../styles/header-details.scss';

export function HeaderDetails() {

    const { selectedMovie } = UseMovies();
    return (
        <header>
            <Link to='/'>
                <FaArrowLeft />
            </Link>

            <h2>{selectedMovie[0]?.Title}</h2>
        </header>
    )
}