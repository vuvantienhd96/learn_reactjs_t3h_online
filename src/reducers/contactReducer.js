import { GET_CONTACTS } from './../actions/type';

const initialState = { 
    contacts: [
        {
            id: 1,
            name: 'abc',
            email: 'abc@gmail.com.vn',
            phone: '555-333-555-333'
        },
        {
            id: 2,
            name: 'xyz',
            email: 'xyz@gmail.com.vn',
            phone: '333-555-333'
        },
        {
            id: 3,
            name: 'dfg',
            email: 'dfg@gmail.com.vn',
            phone: '555-333-333'
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS: 
        return {
            ...state
        }
        default:
            return state;
    }
}