import { RESTDataSource } from 'apollo-datasource-rest'

class Role extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `http://localhost:8084/api/v1`
      }
}