/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class ShowFavorite extends Component {
    render() {
        return (
            this.props.dataCreateProduct.map(value => {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.url} alt={value.name} />
                    <Card.Body>
                        <Card.Title>{value.name}</Card.Title>

                        <Button onClick={() => this.props.deleteProduct(value.name)} variant="primary">Delete</Button>
                        <Button onClick={() => this.props.showForm(value.name)} variant="primary">Update</Button>
                    </Card.Body>
                </Card>
            })

        )
    }
}

export default ShowFavorite