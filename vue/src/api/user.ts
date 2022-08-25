// 导入axios实例
import httpRequest from '@/request/index.ts'
const host = (window.location.host.indexOf("5173") > -1) ? "http://127.0.0.1:3000" : "";

// 定义接口的传参
interface UserInfoParam {
	name: string,
	password: string,
    sex: number
}

// 注册用户信息
export function apiGetUserInfo(param: UserInfoParam) {
    return httpRequest({
		url: host + '/user/add',
		method: 'post',
		data: param,
	})
}