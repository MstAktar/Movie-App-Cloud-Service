import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import MovieCard from './MovieCard';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

const Search = () => {

    const [searchedMovieList, setSearchedMovieList] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target[0].value;
        console.log(searchValue);
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=49807df&`)
            .then(res => {
                setSearchedMovieList(res.data.Search);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-white pt-2 pb-2">Search</h2>
                <Form className='d-flex' inline onSubmit={handleSearch}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light" type="submit" className="ml-2 mr-2 pl-2">
                        Search
                    </Button>
                </Form>
            </div>
            <div className="d-flex flex-wrap">
                {searchedMovieList.length > 0 ? searchedMovieList.map((movie, index) => {
                    return <Link to={`/${movie.imdbID}`}>
                        <MovieCard key={index} title={movie.Title} image={movie.Poster} year={movie.Year} type={movie.Type} />
                    </Link>
                }
                ) : null}
            </div>
        </div>
    )
}

export default Search