import { RESTDataSource } from 'apollo-datasource-rest'

class Consultant extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = `http://localhost:8085/api/v1`
      }
    
    consultantReducer({
      id, name, email, hourlyRate, manager, relocate,
      dob, ssn, businessUnit, title
    }) {
      return {
        id,
        name,
        email,
        hourlyRate,
        manager,
        relocate,
        dob,
        ssn,
        businessUnit: this.businessUnitReducer(businessUnit),
        title: this.titleReducer(title)
      }
    }

    pageReducer({totalPages, last, totalElements, size}) {
      return {
        totalPages,
        last,
        totalElements,
        size
      }
    }

    async getConsultants(page, size) {
      if(!page || !size) {
        const res = await this.get('/consultants')
        return res.content.map(consultant => {return this.consultantReducer(consultant)})
      } else {
        const res = await this.get(`/consultants?page=${page}&size=${size}`)
        console.log(res)
        return res.content.map(consultant => {return this.consultantReducer(consultant)})
      }
    }
    
    async getConsultantById(id) {
      const res = await this.get(`/consultants/${id}`)
      return this.consultantReducer(res)
    }

    businessUnitReducer({id, name}) {
      return {
        id,
        name
      }
    }

    async getBusinessUnits() {
      const res = await this.get('/business-units')
    }

    async getBusinessUnitById(id) {
      const res = await this.get(`/business-units/${id}`)
    }

    titleReducer({id, name}) {
      return {
        id,
        name
      }
    }

    async getTitles() {
      const res = await this.get('/titles')

      return res.map(title => {
          return this.titleReducer(title)
      })
    }

    async getTitleById(id) {
      const res = await this.get(`/titles/${id}`)

      return this.titleReducer(res)
    }

  
}

export default Consultant