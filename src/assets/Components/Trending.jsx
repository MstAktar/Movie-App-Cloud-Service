import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function Trending() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?s=batman&apikey=49807df&')
            .then(res => {
                setMovieList(res.data.Search);
            })
            .catch(err => console.log(err))
    }, []
    )
    
    return (
        <>
            <h2 className='text-white pt-2 pb-2'>Trending</h2>
            <div className="d-flex flex-wrap">
                {movieList.map((movie, index) => {
                    return <Link to={`/${movie.imdbID}`}>
                        <MovieCard key={index} title={movie.Title} image={movie.Poster} year={movie.Year} type={movie.Type} />
                    </Link>
                }
                )}
            </div>
        </>
    );
}

export default Trending;