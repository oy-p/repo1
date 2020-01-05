import { createStore} from 'redux'

function reducres (state = '默认值', action) {
    switch (action.type) {
        case 'add':
            return state = action.msg;
        default:
            return state
    }
}

const store = createStore(reducres)

export default store