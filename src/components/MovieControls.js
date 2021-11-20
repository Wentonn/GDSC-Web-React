import React, {useContext} from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

export const MovieControls = ({movie,type}) => {
    const {removeMovieFromWatchlist} = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            <div>
                <button 
                    className="ctrl-btn" 
                    onClick={()=> removeMovieFromWatchlist(movie.id)}
                >REMOVE
                </button>
            </div>
        </div>
    );
};

