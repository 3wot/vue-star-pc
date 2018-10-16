import Router from 'vue-router'
import router from './index'
import URLS from '@/router/link'
// 引入axios
import axios from 'axios'
// 数据服务
const GETJSON = (urlKey, data, cb) => {
    // 地址
    const url = URLS(urlKey)
    // 参数
    let param
    if (urlKey == 'Login') { // 登录接口不添加uid和token
        param = data
    } else { // 其他接口添加uid和token
        if (USER_INFO.uid && USER_INFO.token) {
            const json = {
                uid: USER_INFO.uid,
                token: USER_INFO.token
            }
            param = Object.assign(data,json)    
        } else {
            const data = {
                ret: false,
                mes: "您还没有登陆！"
            }
            cb(data)
            setTimeout(() => {
                router.push({ name : 'login' })    
            },2000)
            return
        }
        
    }
    // 发请求
    let config = {
        headers : {
            'Content-Type':'application/json;charset=UTF-8'
        },
    };
    const postData = JSON.stringify(param)
    console.log("url:",url)
    axios.post(url, postData)
    .then(res => {
        // 返回格式
        // {
        //     "d": {
        //         "__type": "OutputNewOrder:#GMOA",
        //         "msg": "token验证失败",
        //         "ret": "fail",
        //         "data": {
        //             "__type": "OutputNewOrderData:#GMOA",
        //             "HouseId": "",
        //             "OrderId": ""
        //         }
        //     }
        // }
        const resData = {
            ret : res.d.ret == 'ok',
            msg : res.d.msg,
            data : res.d.data,
        }
        if(cb && typeof cb == 'function') {
            cb(resData)
        }

    })
    .catch(error => {
        if(cb && typeof cb == 'function') {
            const data = {
                ret: false,
                msg: "请求失败"
            }
            cb(data)
        }
    })
}
export default GETJSON