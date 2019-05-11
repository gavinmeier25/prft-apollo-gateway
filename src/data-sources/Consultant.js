import { RESTDataSource } from 'apollo-datasource-rest'
import chalk from 'chalk'

class Consultant extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = `http://localhost:8085/api/v1`
	}

	consultantReducer({
		id,
		name,
		email,
		hourlyRate,
		manager,
		relocate,
		dob,
		ssn,
		businessUnit,
		title,
		page,
	}) {
		console.log(chalk.yellow.italic('consultantReducer...'))
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
			title: this.titleReducer(title),
			// pageInfo: this.pageReducer()
		}
	}

	pageReducer({ totalPages, last, totalElements, size }) {
		console.log(chalk.yellow.italic('pageReducer...'))
		return {
			totalPages,
			last,
			totalElements,
			size,
		}
	}

	async getConsultants(page, size) {
		console.log(chalk.green.italic('getConsultants...'))
		try {
			if (!page || !size) {
				const res = await this.get('/consultants')
				return res.content.map(consultant => {
					return this.consultantReducer(consultant)
				})
			} else {
				const res = await this.get(`/consultants?page=${page}&size=${size}`)
				return res.content.map(consultant => {
					return this.consultantReducer(consultant)
				})
			}
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/consultants`))
			throw new Error(err)
		}
	}

	async getConsultantById(id) {
		console.log(chalk.green.italic('getConsultantById...'))
		try {
			const res = await this.get(`/consultants/${id}`)
			return this.consultantReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/consultant/${id}`))
			throw new Error(err)
		}
	}

	businessUnitReducer({ id, name }) {
		console.log(chalk.whiteBright.italic('businessUnitReducer...'))
		return {
			id,
			name,
		}
	}

	async getBusinessUnits() {
		console.log(chalk.green.italic('getBusinessUnits...'))
		try {
			const res = await this.get('/business-units')
			return this.businessUnitReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/business-units`))
			throw new Error(err)
		}
	}

	async getBusinessUnitById(id) {
		console.log(chalk.green.italic('getBusinessUnitById...'))
		try {
			const res = await this.get(`/business-units/${id}`)
			return this.businessUnitReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/business-units/${id}`))
			throw new Error(err)
		}
	}

	titleReducer({ id, name }) {
		console.log(chalk.hex('#a9b5c9').italic('titleReducer...'))
		return {
			id,
			name,
		}
	}

	async getTitles() {
		console.log(chalk.green.italic('getTitles...'))
		try {
			const res = await this.get('/titles')
			return res.map(title => {
				return this.titleReducer(title)
			})
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/titles`))
			throw new Error(err)
		}
	}

	async getTitleById(id) {
		console.log(chalk.green.italic('getTitleById...'))
		try {
			const res = await this.get(`/titles/${id}`)
			return this.titleReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/titles/${id}`))
		}
	}
}

export default Consultant
