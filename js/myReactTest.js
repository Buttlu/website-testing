import React from 'react';
import ReactDOM from 'react-dom';

export class testClass extends React.Component(){
    render() {
        return (
            test
        );
    }
}

ReactDOM.render(<testClass/>, document.getElementById('myReactTest'));