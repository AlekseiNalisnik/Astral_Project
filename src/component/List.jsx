import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counterList: props.counterList,
            arr: props.arr
        };

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    add() {
        if(this.state.counterList >= this.state.arr.length) return;
        this.setState({ counterList: this.state.counterList + 1 })
    }

    remove() {
        if(this.state.counterList <= 0) return;
        this.setState({ counterList: this.state.counterList - 1 })
    }

    removeAll() {
        this.setState({ counterList: 0 })
    }

    render() {

        return (
            <div>    
                <h2>{this.state.counterList}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button>
                <button onClick={this.removeAll}>Remove All</button>
                <ul>
                    {   this.state.arr.map((item, index) => {
                            if(index < this.state.counterList) {
                                return <li key={index}>{item.todo}</li>;
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
    
}

export default List;