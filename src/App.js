import React from 'react';
import './App.css';
import List from './components/list/List'
import Title from './components/title/Title'
import store from './store'
import {Provider} from 'react-redux'

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
        <Provider store={store}> 
        <Title></Title>
        <List list={this.state.arr}></List>
        </Provider>  
      </div>
    );
  }
}

export default App;
