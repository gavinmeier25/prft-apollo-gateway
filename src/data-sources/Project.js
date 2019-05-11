import { RESTDataSource } from 'apollo-datasource-rest'

class Project extends RESTDataSource {
    constructor () {
        super()
        this.baseURL = `http://localhost:8089/api/v1`
    }

    async getProjects () {
        const res = await this.get('/projects')
        console.log(res)
        return res
    }

    async getProjectById (id) {
        const res = await this.get(`/projects/${id}`)
        return res
    }

    async getBusinessUnits () {
        const res = await this.get('/business-units')
        return res
    }

    async getBusinessUnitById (id) {
        const res = await this.get(`/business-units/${id}`)
        return res
    }

    async getProjectStatuses () {
        const res = await this.get('/project-status')
        return res
    }

    async getProjectStatusById (id) {
        const res = await this.get(`/project-status/${id}`)
        return res
    }

    async getProjectTypes () {
        const res = await this.get('/project-type')
        return res
    }

    async getProjectTypeById (id) {
        const res = await this.get(`/project-type/${id}`)
        return res
    }

    async getClients () {
        const res = await this.get('/clients')
        return res
    }

    async getClientById (id) {
        const res = await this.get(`/clients/${id}`)
        return res
    }
}

export default Project