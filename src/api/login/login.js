import request from '../../axios/index.jsx'

export function getUserInfo (userName, paw) {
    const data = {
        userName,
        paw
    };
    return request({
        url: 'http://bit.ly/2mTM3nY',
        method: 'post',
        //get请求参数写在params，post写在data中
        data
    })
}