import React, {Component} from 'react';
import Counter from './Counter.jsx';
import List from './List.jsx';
import './app.component.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        count: 0,
        countList: 0,
        arr: [{todo: 'first'}, {todo: 'secont'}, {todo: 'third'}, {todo: 'fourth'}, {todo: 'fifth'}],
        msg: 'hello world',
        msg1: 'hello world functional',
      }
  }

  render() {

    let { count, countList, arr } = this.state;

      return (
          <div>
              <Counter counter={count}/>
              <List counterList={countList} arr={arr} />
          </div>
      );
  }
}

export default App;