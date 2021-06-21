import { HeaderDetails } from "./HeaderDetails";

import '../styles/details.scss';
import { UseMovies } from "../contexts/MovieContext";
import { TrailerModal } from "./TrailerModal";

export function DetailsMovie() {

    const { selectedMovie, hasModal, handleToogleModal } = UseMovies();

    return (
        <div className="details__container">
            {!hasModal ? (
                <>
                    <HeaderDetails />

                    <section className="main__details">
                        <img onClick={handleToogleModal} src={selectedMovie[0]?.Poster} alt="Movie" />

                        <section className="movie__infos">
                            <h2>{selectedMovie[0]?.Title} {`(${selectedMovie[0]?.Year})`}</h2>
                            <span>{selectedMovie[0]?.Genre}</span>

                            <div className="actions">
                                <div className="public__aprovation">
                                    <strong>{selectedMovie[0]?.Ratings[0].Value}</strong>
                                    <span>{selectedMovie[0]?.Ratings[0].Source}</span>

                                    <strong>{selectedMovie[0]?.Ratings[1].Value}</strong>
                                    <span>{selectedMovie[0]?.Ratings[1].Source}</span>

                                    <strong>{selectedMovie[0]?.Ratings[2].Value}</strong>
                                    <span>{selectedMovie[0]?.Ratings[2].Source}</span>
                                </div>
                            </div>

                            <p>{selectedMovie[0]?.Plot}</p>
                        </section>
                    </section>
                </>
            )
                :

                <TrailerModal />}

        </div>
    )
}