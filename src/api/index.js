import request from '@/utils/request'

const httpRequest = {
    register: function(data) {

        return request({
            url: '/vue-element-admin/user/login',
            method: 'post',
            data
        })
    },
    login: function(data) {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    },
    getUsers: function(data) {
        return request({
            url: '/users',
            method: 'get',
            data
        })
    }
}
export default httpRequest