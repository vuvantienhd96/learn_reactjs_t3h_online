import React, { Component } from 'react'




class AddContact2 extends Component {
    // unControlled Component 
    // ref 
    constructor(props){
        super(props);


        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    

    // push data
    handlePushData = (e) => {
        e.preventDefault();
        const contacs = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        // goi dispath here 

        // set defaultProps ve ''
        console.log('contacs', contacs);
    }
    
    static defaultProps = {
            name: 'tienvv',
            email: 'tienvv@gmail.com.vn',
            phone: '+098765'
        }

    render() {
        const { name, email, phone } = this.props;
        console.log('this.props', this.props);
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact uncontroled component</div>
                <div className="card-body">
                    <form onSubmit={this.handlePushData}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="name..."
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="email..."
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="phone..."
                                defaultValue={phone}
                                ref={this.phoneInput}
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

// AddContact2.defaultProps = {
//     name: 'tienvv',
//     email: 'tienvv@gmail.com.vn',
//     phone: '+098765'
// }

export default AddContact2
