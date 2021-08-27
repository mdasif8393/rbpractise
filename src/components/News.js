import React from 'react';
import { Card } from 'react-bootstrap';
import './News.css'

const News = (props) => {
    console.log(props.news)
    const {author, content, urlToImage} = props.news;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Text>
                {content}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default News;