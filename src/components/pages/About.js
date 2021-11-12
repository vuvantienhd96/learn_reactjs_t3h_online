import { switchCase } from '@babel/types';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

export default function About() {
    let params = useParams();
  
    const [errors, setErrors] = useState({});
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    // default page load
    const [dataDefault, setDataDefault] = useState({});

    // componetDidMount
    // componentDidUpate(preProps, preState)
    useEffect(() => {
        if(dataDefault){
            setName(dataDefault.name);
            setEmail(dataDefault.email)
            setPhone(dataDefault.phone)
        }
    }, [dataDefault])
    // onchange
    const onChange = (key, e) => {
        switch (key) {
            case 'name':
                setName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'phone':
                setPhone(e.target.value)
                break;
        }
    }
    return (
        <Consumer>
            {value => {
                const itemSelect = value.contacts.filter(el => el.id === params.id)[0];
                setDataDefault(itemSelect)
                return (
                    <React.Fragment>
                        <h2 className="display-4">About Contact {params.id}</h2>
                         table
                        <p className="text-secondary">Version 1.0</p>
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form 
                                    //</div>onSubmit={this.handlePushData.bind(this, dispatch)
                                >
                                    <TextInputGroup 
                                        label="Name" 
                                        name="name"
                                        value={name  }
                                        placeholder="name..."
                                        onChange={(e) => onChange('name', e)}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        label="Email" 
                                        name="email"
                                        value={email  }
                                        placeholder="email..."
                                        onChange={(e) => onChange('email', e)}
                                        type="email"
                                        error={errors.email}
                                    /> 
                                    <TextInputGroup 
                                        label="Phone" 
                                        name="phone"
                                        value={phone }
                                        placeholder="phone..."
                                        onChange={(e) => onChange('phone', e)}
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
                        
                    </React.Fragment>
                )
            }}
        </Consumer>

    )
}
