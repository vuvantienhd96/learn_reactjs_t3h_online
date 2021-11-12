import React, { Component } from "react";

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
                //contacts: state.contacts.push
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: '1',
                name: 'TicTock',
                email: 'Joe@mail.com',
                phone: '09785173562'
            },
            {
                id: '2',
                name: 'Emilly',
                email: 'emilly@mail.com',
                phone: '+849278373'
            },
            {
                id: '3',
                name: 'adidas',
                email: 'adidas@mail.com',
                phone: '+841238373'
            }

        ],
        isloading: false,

        dispatch: (action) => {
            this.setState(state => reducer(state, action))
        }
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;