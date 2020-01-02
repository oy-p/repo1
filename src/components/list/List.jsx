import React, { Component } from 'react';
import './List.css'

class List extends Component {

    render() {
        console.log(this.props.list)
        return (
            <div>
               {this.props.list.map((item, i) => {
                   return (
                       <div className='bg' key={item.age}>
                        <div>名字----{item.name}</div>
                        <div>年龄----{item.age}</div>
                       </div>
                   )
               })}
            </div>
        );
    }
}

export default List;