import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';


export const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext)
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">My Wishlist</h1>
                </div>

                {watchlist.length > 0 ? (
                    
                    <div className="movie-grid">
                        {watchlist.map((movie) => (
                            <MovieCard movie = {movie} type ="watch-list"/>
                            ))}
                    </div>
                ) : (
                    <h2 className="no-movies">
                        There are no movies in your wishlist!
                    </h2>
                )}
            </div>
        </div>
    );
};
