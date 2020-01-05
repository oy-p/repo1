import React, { Component } from 'react';
import {getUserInfo} from '../../api/login/login.js'
import { connect } from 'react-redux'

function mapStateToProps (state) {
    return {
        msg: state
    }
}

class Title extends Component {
    constructor () {
        super()
        this.state = {
            add: [],
            value:'1',
            msg: 'react-redux'
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>ToDoList{this.props.msg}</h1>
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
            if (res.data.error_code === 501) {
                console.log("ok")
            }
        })
    }
}

export default connect(mapStateToProps)(Title);

