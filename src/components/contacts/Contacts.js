import React, { Component } from 'react'
import Contact from './Contact';

import { Consumer } from '../../context';

class Contacts extends Component {
   
    render() {

        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h2 className="text-secondary">List Contacts</h2>
                            {contacts.map((contact, index) =>
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                />
                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;
