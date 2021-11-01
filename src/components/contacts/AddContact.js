import React, { Component } from 'react'

class AddContact extends Component {
    // controlled Component 
    state = {
        name: '',
        email: '',
        phone: ''
    }
    // onchange
    onChange = (e) =>  this.setState({ [e.target.name] : e.target.value })

    // push data
    handlePushData = (e) => {
        e.preventDefault();
        console.log('$state', this.state);
    }
    
    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.handlePushData}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="name..."
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="email..."
                                value={email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="phone..."
                                value={phone}
                                onChange={this.onChange}
                            />
                        </div>
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
