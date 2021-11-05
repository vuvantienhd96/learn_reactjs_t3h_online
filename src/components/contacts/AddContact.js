import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import { v4 as uuidv4 } from 'uuid'


class AddContact extends Component {
    // controlled Component 
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    // onchange
    onChange = (e) => this.setState({ [e.target.name] : e.target.value })


    // push data
    handlePushData = (dispatch, e) => {
        e.preventDefault();
        
        const { 
            name, 
            email, 
            phone, 
        } = this.state;

        if( name === ''){
            this.setState({ errors: { name: 'Name is required' }})
            return;
        }
        if( email === ''){
            this.setState({ errors: { email: 'Email is required' }})
            return;
        }
        if( phone === ''){
            this.setState({ errors: { phone: 'Phone is required' }})
            return;
        }
        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone,
        }
        dispatch({ type: 'ADD_NEW_MEMBER', payload: newContact })
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
        
    }
    
    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.handlePushData.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label="Name" 
                                        name="name"
                                        value={name}
                                        placeholder="name..."
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        label="Email" 
                                        name="email"
                                        value={email}
                                        placeholder="email..."
                                        onChange={this.onChange}
                                        type="email"
                                        error={errors.email}
                                    /> 
                                    <TextInputGroup 
                                        label="Phone" 
                                        name="phone"
                                        value={phone}
                                        placeholder="phone..."
                                        onChange={this.onChange}
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
                    ) 
                }}
            </Consumer>
        )

        
    }
}

export default AddContact
