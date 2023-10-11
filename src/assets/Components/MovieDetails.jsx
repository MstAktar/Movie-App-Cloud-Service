
import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = React.useState({});

    React.useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=49807df&`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card className="mx-auto" style={{ width: '50rem' }}>

                <Row>
                    <Col>
                        <Card.Img variant="top" src={movie.Poster} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>{movie.Plot}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Director: {movie.Director}</ListGroupItem>
                            <ListGroupItem>Writer: {movie.Writer}</ListGroupItem>
                            <ListGroupItem>Actors: {movie.Actors}</ListGroupItem>
                            <ListGroupItem>Genre: {movie.Genre}</ListGroupItem>
                            <ListGroupItem>Language: {movie.Language}</ListGroupItem>
                            <ListGroupItem>Country: {movie.Country}</ListGroupItem>
                            <ListGroupItem>Runtime: {movie.Runtime}</ListGroupItem>
                            <ListGroupItem>Awards: {movie.Awards}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">IMDb Rating: {movie.imdbRating}</Card.Link>
                            <Card.Link href="#">Metascore: {movie.Metascore}</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>
                <div className='text-center pt-4 pb-2'>
                    <Link to="/">
                        <Button variant="secondary">Back to homepage</Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default MovieDetails;
