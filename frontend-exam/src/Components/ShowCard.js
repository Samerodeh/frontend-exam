/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class ShowCard extends Component {
    render() {
        return (
            this.props.productData.map(value => {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.url} alt={value.name} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>

                        <Button onClick={() => this.props.createProduct(value.name)} variant="primary">Add To Favorite</Button>
                    </Card.Body>
                </Card>
            })

        )
    }
}

export default ShowCard
