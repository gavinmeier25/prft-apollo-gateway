import { RESTDataSource } from 'apollo-datasource-rest'
import chalk from 'chalk'

class Project extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = `http://localhost:8089/api/v1`
	}

	projectReducer({
		id,
		name,
		accountDeveloper,
		startDate,
		endDate,
		engagementDirector,
		travel,
		comments,
		projectStatus,
		projectType,
		client,
		businessUnit,
	}) {
		return {
			id,
			name,
			accountDeveloper,
			startDate,
			endDate,
			engagementDirector,
			travel,
			comments,
			projectStatus: this.projectStatusReducer(projectStatus),
			projectType: this.projectTypeReducer(projectType),
			client: this.clientReducer(client),
			businessUnit: this.businessUnitReducer(businessUnit),
		}
	}

	async getProjects() {
		console.log(chalk.green.italic('getProjects...'))
		try {
			const res = await this.get('/projects')
			return res.content.map(project => {
				return this.projectReducer(project)
			})
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/projects`))
			throw new Error(err)
		}
	}

	async getProjectById(id) {
		console.log(chalk.green.italic('getProjectById...'))
		try {
			const res = await this.get(`/projects/${id}`)
			return this.projectReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/projects/${id}`))
			throw new Error(err)
		}
	}

	async addProject(project) {
		console.log(chalk.green.italic('addProject...'))
		try {
			const reqBody = this.projectReducer(project)
			const res = await this.post('/projects', reqBody)
			return this.projectReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/projects`))
			throw new Error(err)
		}
	}

	async updateProject(project) {
		console.log(chalk.green.italic('updateProject...'))
		try {
			const oldProject = await this.get(`projects/${project.id}`)
			const updatedProject = { ...oldProject, ...project }
			const reqBody = this.projectReducer(updatedProject)
			return await this.put(`/projects`, reqBody)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/projects/${project.id}`))
			throw new Error(err)
		}
	}

	businessUnitReducer({ id, name }) {
		return {
			id,
			name,
		}
	}

	async getBusinessUnits() {
		console.log(chalk.green.italic('getBusinessUnits...'))
		try {
			const res = await this.get('/business-units')
			return res.map(bu => {
				return this.businessUnitReducer(bu)
			})
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

	projectStatusReducer({ id, name }) {
		return {
			id,
			name,
		}
	}

	async getProjectStatuses() {
		console.log(chalk.green.italic('getProjectStatuses...'))
		try {
			const res = await this.get('/project-status')
			return res.map(status => {
				return this.projectReducer(status)
			})
		} catch (err) {
			console.log(`${err} - ${this.baseURL}/project-status`)
			throw new Error(err)
		}
	}

	async getProjectStatusById(id) {
		console.log(chalk.green.italic('getProjectStatusById...'))
		try {
			const res = await this.get(`/project-status/${id}`)
			return this.projectReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/project-status/${id}`))
			throw new Error(err)
		}
	}

	projectTypeReducer({ id, name }) {
		return {
			id,
			name,
		}
	}
	async getProjectTypes() {
		console.log(chalk.green.italic('getProjectTypes...'))
		try {
			const res = await this.get('/project-type')
			return res.map(type => {
				return this.projectTypeReducer(type)
			})
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/project-type`))
			throw new Error(err)
		}
	}

	async getProjectTypeById(id) {
		console.log(chalk.green.italic('getProjectTypeById...'))
		try {
			const res = await this.get(`/project-type/${id}`)
			return this.projectTypeReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/project-type/${id}`))
			throw new Error(err)
		}
	}

	clientReducer({ id, name }) {
		console.log(chalk.hex('#a9abad').italic('clientReducer...'))
		return {
			id,
			name,
		}
	}

	async getClients() {
		console.log(chalk.green.italic('getClients...'))
		try {
			const res = await this.get('/clients')
			return res.map(client => {
				return this.clientReducer(client)
			})
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/clients`))
			throw new Error(err)
		}
	}

	async getClientById(id) {
		console.log(chalk.green.italic('getClientById...'))
		try {
			const res = await this.get(`/clients/${id}`)
			return this.clientReducer(res)
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/clients/${id}`))
		}
	}
}

export default Project
