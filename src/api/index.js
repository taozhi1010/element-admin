import request from '@/utils/request'

export function register(data) {
    return request({
        url: '/vue-element-admin/user/login',
        method: 'post',
        data
    })
}

export function login(data) {
    return request({
        url: '/vue-element-admin/user/login',
        method: 'post',
        data
    })
}