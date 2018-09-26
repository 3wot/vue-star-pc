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
    axios.post(url, param)
    .then(res => {
        if(cb && typeof cb == 'function') {
            res.ret = res.ret == 'ok'
            cb(res)
        }

    })
    .catch(error => {
        if(cb && typeof cb == 'function') {
            const data = {
                ret: false,
                mes: "请求失败"
            }
            cb(data)
        }
    })
}
export default GETJSON