import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'
Mock.mock('/home/getData',homeApi.getStaticalData)

// 请求拦截
Mock.mock(/api\/user\/edit/,'post', userApi.updateUser)
Mock.mock(/api\/user\/add/,'post' , userApi.createUser)


Mock.mock(/api\/user\/getUser/,'get' , userApi.getUserList)
Mock.mock(/api\/user\/del/,'get' , userApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post', permissionApi.getMenu)


