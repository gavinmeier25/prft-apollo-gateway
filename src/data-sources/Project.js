import { RESTDataSource } from 'apollo-datasource-rest'

class Project extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `http://localhost:8089/api/v1`
      }
}