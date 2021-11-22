import React, { Component } from 'react'

import TextInputGroup from '../layout/TextInputGroup'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'


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
    handlePushData = async (dispatch, e) => {
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
            name,
            email,
            phone,
        }

       try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
       } catch (error) {
           console.log('error', error);
       }
            

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
          
                
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.handlePushData.bind(this)}>
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
        
    }
}

export default AddContact
