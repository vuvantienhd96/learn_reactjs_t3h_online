import React, { Component } from 'react'
import Contact from './Contact';

import { Consumer } from './../context';

class Contacts extends Component {
    // state
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
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
