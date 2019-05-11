import { RESTDataSource } from 'apollo-datasource-rest'

class Consultant extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `http://localhost:8085/api/v1`
      }
}