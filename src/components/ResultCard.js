import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'

export const ResultCard = ({movie}) => {
    const { addMovieToWatchlist, watchlist} =  useContext(GlobalContext)

    let storedMovie = watchlist.find(o => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : false;

    

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                 <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                 alt ={`${movie.title} Poster`}
                 />    
                ): (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring( 0, 4) : "-"}
                    </h4>
                </div>
                <div className="controls">
                    <button 
                        className="btn"
                        disabled = {watchlistDisabled}
                        onClick = {() => addMovieToWatchlist(movie)}
                        >
                    Add to wishlist
                    </button>
                    <button className="btn2">{movie.overview}
                    </button>
                </div>
            </div>
        </div>
    )
}
