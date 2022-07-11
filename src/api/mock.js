import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import {updateUser, createUser} from './mockServeData/user'
//
Mock.mock('/home/getData',homeApi.getStaticalData)
Mock.mock(/api\/user\/edit,'post', updateUser)
Mock.mock(/api\/user\/update,'post' , createUser)
