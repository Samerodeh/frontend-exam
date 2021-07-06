import React, { Component } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productData: [],
            showData: false
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5050/products').then(informations => {
            this.setState({
                productData: informations.data,
                showData: true
            })
        })
    }

    createProduct = (value) => {
        axios.post('http://localhost:5050/product', value);
    }




    render() {
        return (
            <div>
                {this.state.showData &&
                    <ShowCard
                        productData={this.state.productData}
                        createProduct={this.createProduct}

                    />}
            </div>
        )
    }
}

export default Main
