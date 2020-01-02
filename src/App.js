import React from 'react';
import './App.css';
import List from './components/list/List'
import Title from './components/title/Title'

class App extends React.Component {
  constructor () {
    super();
    this.state={
        arr:[
            {name:'tom1',age:12},
            {name:'tom2',age:123},
            {name:'tom3',age:124},
            {name:'tom4',age:125},
        ]
    }
}
  render () {
    return (
      <div className="App">
        <Title></Title>
        <List list={this.state.arr}></List>
      </div>
    );
  }
}

export default App;
