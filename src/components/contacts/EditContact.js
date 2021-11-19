import { switchCase } from '@babel/types';

import React, { Component } from 'react'
// import { useParams } from "react-router-dom";
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

export default class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {},
            dataDefault: {}
        }
    }

    componentDidUpdate(revProps, prevState) {
        if (prevState.dataDefault !== this.state.dataDefault) {
            this.setState({
                ...this.state,
                name: this.state.dataDefault.name,
                email: this.state.dataDefault.email,
                phone: this.state.dataDefault.phone
            })
        }
    }
    async componentDidMount(){
        const { id } = this.props.match.params;
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            const contact = res.data;
            this.setState({
                name: contact.name,
                email: contact.email,
                phone: contact.phone
            })
           
        } catch (error) {
            console.log('error', error);
        }
        
    }


    onChange = (key, e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handlePushData = async (dispatch, e) => {
        e.preventDefault();
        let updateNewItem = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone
        }

        try {
            const { id } = this.props.match.params;
       
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateNewItem)
            dispatch({type: 'UPDATE_CONTACT', payload: res.data})
            this.setState = {
                    name: '',
                    email: '',
                    phone: '',
                    errors: {},
                }
            }

            
        catch (error) {
           console.log('errr', error);
        }
        //
        this.props.history.push('/');
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const itemSelect = value.contacts.filter(el => el.id === this.props.match.params.id)[0];
                    // breake rule reactjs
                    // this.setState({dataDefault: itemSelect})
                    const { dispatch } = value;
                    const { name, phone, email, errors } = this.state

                    return (
                        <React.Fragment>
                            <h2 className="display-4">About Contact {this.params}</h2>
                            table
                            <p className="text-secondary">Version 1.0</p>
                            <div className="card mb-3">
                                <div className="card-header">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={(e) => this.handlePushData(dispatch, e)}
                                    >
                                        <TextInputGroup
                                            label="Name"
                                            name="name"
                                            value={name}
                                            placeholder="name..."
                                            onChange={(e) => this.onChange('name', e)}
                                            error={errors.name}
                                        />
                                        <TextInputGroup
                                            label="Email"
                                            name="email"
                                            value={email}
                                            placeholder="email..."
                                            onChange={(e) => this.onChange('email', e)}
                                            type="email"
                                            error={errors.email}
                                        />
                                        <TextInputGroup
                                            label="Phone"
                                            name="phone"
                                            value={phone}
                                            placeholder="phone..."
                                            onChange={(e) => this.onChange('phone', e)}
                                            error={errors.phone}
                                        />
                                        <input
                                            type="submit"
                                            value="Add Contact"
                                            className="btn btn-light btn-block"
                                        />
                                    </form>
                                </div>
                            </div>

                        </React.Fragment>
                    )
                }}
            </Consumer>

        )
    }
}
