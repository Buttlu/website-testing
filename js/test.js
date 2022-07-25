import React from 'React';
import ReactDOM from 'react-dom';

class TestClass extends React.Component() {
    render () {
        return <h1>Hello There</h1>;
    }
}

ReactDOM.render(<TestClass/>, document.getElementById('test.js'));