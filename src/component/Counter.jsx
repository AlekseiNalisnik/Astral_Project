import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.counter
        };
    
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onIncrease() {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrease() {
        this.setState({ counter: this.state.counter - 1 })
    }

    onReset() {
        this.setState({ counter: 0})
    }

    render() {

        return (
            <div className="center">
                <h2>{this.state.counter}</h2>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}

export default Counter;