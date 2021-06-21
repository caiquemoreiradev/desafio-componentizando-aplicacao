import { FaArrowLeft } from 'react-icons/fa';
import { UseMovies } from '../contexts/MovieContext';
import '../styles/modal.scss';

export function TrailerModal() {

    const { selectedMovie, handleToogleModal } = UseMovies();

    return (
        <section className="trailer__container">

            <header>
                <FaArrowLeft onClick={handleToogleModal} />

                <h1>{selectedMovie[0]?.Title}</h1>
            </header>
            <section className="modal__container">
                <iframe width="700" height="400" allowFullScreen={true} src={selectedMovie[0]?.Iframe} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </section>
        </section>
    )
}