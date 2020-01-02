import Mock from 'mockjs'

Mock.mock('http://bit.ly/2mTM3nY', 'post', function (config) {
    console.log(config);
    
    const data = JSON.parse(config.body)
    if (data.userName !== 'admin') {
        return {
            error_code: 500,
            msg: '用户名不合法'
        }
    }else if (data.pwd !== 1) {
        return {
            error_code: 501,
            msg: '用户名或者密码错误'
        }
    } else {
        return {
            error_code: 200,
            msg: '登陆成功'
        }
    }
})