import axios from "./axios"

// 接口调用
export const getMenu = (param)=>{
    return axios.request({
        url: '/permission/getMenu',
        method: 'post',
        data: param ,
    })
}

export const getData = ()=>{
    console.log('拦截')
    return axios.request({
        url: '/home/getData',
        // 默认get请求
    })
}