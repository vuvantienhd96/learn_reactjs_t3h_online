import React, { Component, useEffect, useState } from 'react'

export default class Test extends Component {

    constructor(props){
        super(props);
        this.state = {
            test: 'notthing'
        }
    }


    componentDidMount(){
        // là nơi để call api hay fetch api về
        // api: https://jsonplaceholder.typicode.com/posts/1
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
        .then(data => this.setState({test: data }));
    }

    render() {
        console.log('data,',this.state.test);
        
        return (
            <div>
                xin chao 1
            </div>
        )
    }
}

export const HookTest = () => {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        function a(){
            console.log('1234');
            
        }
       
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => setData(data));
    }, [])
    console.log(data);
    
    return <React.Fragment>
        <h2>xin chao </h2>
    </React.Fragment>
}

export const XinChao = class Hello extends Component {
    render(){
        return  <h2> xin chao 2</h2>
      
    }
}

export const XinChao3 = class Hello extends Component {
    render(){
        return  <h2> xin chao 3</h2>
      
    }
}


