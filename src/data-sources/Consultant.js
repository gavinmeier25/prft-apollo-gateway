import { RESTDataSource } from 'apollo-datasource-rest'

class Consultant extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `http://localhost:8085/api/v1`
      }
    
    consultantReducer(data) {
      return {

      }
    }

    async getBusinessUnits() {
      const response = await this.get('/business-units')
      console.log(response)
    }
}

export default Consultant