/* eslint-disable no-undef */
import React, { Component } from 'react'
import axios from 'axios';
import ShowForm from './ShowForm';
import ShowFavorite from './ShowFavorite';


export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCreateProduct: [],
            showCreateData: false,
            showForm: false,
            nameId: '',
            name: '',
            updateName: '',
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5050/products').then(informations => {
            this.setState({
                dataCreateProduct: informations.data,
                showCreateData: true,
            })
        })
    }

    deleteProduct = (nameId) => {
        axios.delete(`http://localhost:5050/product/${nameId}`).then(informations => {
            this.setState({
                dataCreateProduct: informations.data,
                showCreateData: true,
            })
        })
    }

    showForm = (value) => {
        this.setState({
            showForm: true,
            nameId: value.name,
            name: value.name,
        })
    }

    updateName = (updateName) => {
        this.setState({
            updateName: updateName,
        })
    }

    updateProduct = (event) => {
        event.preventDefault();
        const data = {
            name: req.params.nameId
        }
        axios.put(`http://localhost:5050/product/${this.state.nameId}`, data).then(informations => {
            this.setState({
                dataCreateProduct: informations.data,
                showCreateData: true,
                showForm: false,
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.showCreateData &&
                    <ShowForm

                        dataCreateProduct={this.state.dataCreateProduct}
                        deleteProduct={this.deleteProduct}
                        showForm={this.showForm}

                    />}

                {this.state.showForm &&
                    <ShowFavorite

                        updateName={this.updateName}
                        defaultName={this.state.updateName}
                        updateProduct={this.updateProduct}

                    />}
            </div>
        )
    }
}

export default Favorite
