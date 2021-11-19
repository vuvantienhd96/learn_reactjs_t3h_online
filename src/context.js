import React, { Component } from "react";
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_NEW_MEMBER':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
               
            }
        case 'UPDATE_CONTACT':

            return {
                // todo
                ...state,
                contacts: state.contacts.map(
                    contact => 
                    contact.id === action.payload.id ? (contact = action.payload) : contact
                )
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [],
        isloading: false,

        dispatch: (action) => {
            this.setState(state => reducer(state, action))
        }
    }

    async componentDidMount(){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users') // 
            this.setState({ contacts: res.data})
        } catch (error) {
            // alert ???
            console.log('error!!!');
        }
        
    }
    

    render(){
        console.log(this.state.contacts);
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;