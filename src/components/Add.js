import React, {useState} from 'react'
import { ResultCard } from './ResultCard';

const REACT_APP_TMDB_KEY = "e428899c19eac19649418fc94ff29897";

export const Add = () => {
    const [query,setQuery] = useState("");
    const [results, setResults] = useState([]);



    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page1=&include_adult=false&query=${e.target.value}`
        )
        .then(res => res.json())
        .then((data) => {
            if(!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className ="input-wrapper">
                        <input type="text" 
                        placeholder="Search for movies..."
                        value={query}
                        onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>    
        </div>
    );
};
