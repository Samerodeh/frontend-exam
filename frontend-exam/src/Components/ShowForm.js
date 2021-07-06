import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class ShowForm extends Component {
    render() {
        return (
            <Form onSubmit={(event) => this.props.updateProduct(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Update Product</Form.Label>
                    <Form.Control defaultValue={this.props.defaultName} onChange={(event) => this.props.updateName(event.target.value)} type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default ShowForm
