import React from 'react'
import { useParams } from "react-router-dom";
import { Consumer } from '../../context';

export default function About() {
    let params = useParams();
    console.log('params', params.id);
    return (
        <Consumer>
            {value => {
                const itemSelect = value.contacts.filter(el => el.id === params.id);
                console.log('itemSelect', itemSelect);
                return (
                    <div>
                        <h2 className="display-4">About Contact {params.id}</h2>
                         table
                        <p className="text-secondary">Version 1.0</p>
                    </div>
                )
            }}
        </Consumer>

    )
}
