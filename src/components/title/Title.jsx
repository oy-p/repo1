import React, { Component } from 'react';
import {getUserInfo} from '../../api/login/login.js'

class Title extends Component {
    constructor () {
        super()
        this.state = {
            add: [],
            value:''
        }
    }
    render() {
        return (
            <div>
                <h1>ToDoList</h1>
                <div>
                    <input type="text" value={this.state.calue} />
                    <button onClick={this.get}>添加</button>
                </div>
            </div>
        );
    }
    get () {

        getUserInfo('admin', 1).then(res => {
            console.log(res)
            if (res.data.error_code == 501) {
                console.log("ok")
            }
        })
    }
}

export default Title;