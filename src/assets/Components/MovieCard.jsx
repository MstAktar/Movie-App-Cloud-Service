import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MovieCard = ({ title, image, year, type }) => {
    return (
        <Card className='m-2 flex' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {year}
                </Card.Text>
                <Button disabled variant={type === "movie" ? "warning" : "danger"}>{type}</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard