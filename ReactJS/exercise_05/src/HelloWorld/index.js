import React, {Component} from 'react';

class HelloWorld extends Component {

    constructor(props) {
        super(props)

        console.log('in CONSTRUCTOR')
    }

    componentDidMount(){
        console.log('in COMPONENT DID MOUNT')
    }

    componentDidUpdate(){
        console.log('in COMPONENT DID UPDATE')
    }

    componentWillUnmount(){
        console.log('in COMPONENT WILL UNMOUNT')
    }

    render() {
        console.log('in RENDER')
        return <div>Hello World</div>
    }
}

export default HelloWorld;
