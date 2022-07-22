import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import {updateUser, createUser} from './mockServeData/user'
//
Mock.mock('/home/getData',homeApi.getStaticalData)

// 请求拦截
Mock.mock(/api\/user\/edit/,'post', updateUser)
Mock.mock(/api\/user\/add/,'post' , createUser)
