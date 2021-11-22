import React, { Component } from 'react'
import Contact from './Contact';

// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/type';

class Contacts extends Component {

    componentDidMount(){
        this.props.getContacts();
    }

    render() {
        const { contacts } = this.props;
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
    }
}



const mapStateToProps = (state) => ({
    contacts: state.contact.contacts 
});

const mapDispathToProps = (dispath) => ({
    getContacts:  () => dispath({type: GET_CONTACTS})
})

export default connect(mapStateToProps, mapDispathToProps)( Contacts ) ;
