import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    // state
    constructor() {
        super();
        this.state = {
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
            isloading: false
        }
    }

    deleteContact = (id) => {
        console.log("this is deleteContact Father !" + id);
        const { contacts } = this.state;
        const newResult = contacts.filter(el => el.id !== id);
        
        this.setState({
            contacts: newResult
        })
    }

    render() {
        const { contacts } = this.state;
        console.log('contacts', contacts)
        return (
            <React.Fragment>
                {contacts.map((contact, index) =>
                    <Contact
                        key={contact.id}
                        contact={contact}
                        deleteClickHandle={this.deleteContact}
                    />
                )}
            </React.Fragment>
        )
    }
}

export default Contacts;
