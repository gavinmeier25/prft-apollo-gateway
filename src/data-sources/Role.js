import { RESTDataSource } from 'apollo-datasource-rest'

class Role extends RESTDataSource {
    constructor () {
        super()
        this.baseURL = `http://localhost:8084/api/v1`
    }

    async getRoles () {
        const res = await this.get('/roles')
        return res
    }

    async getRoleById (id) {
        const res = await this.get(`/roles/${id}`)
        return res
    }

    async getRoleStatuses () {
        const res = await this.get('/role-status')
        return res
    }

    async getRoleStatusById (id) {
        const res = await this.get(`/roles-status/${id}`)
        return res
    }
}

export default Role;