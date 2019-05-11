import { RESTDataSource } from 'apollo-datasource-rest'
import chalk from 'chalk'

class Role extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = `http://localhost:8084/api/v1`
	}

	roleReducer({
		id,
		businessUnitId,
		projectId,
		startDate,
		endDate,
		roleStatus,
		resourceId,
		resourceStartDate,
		totalHours,
		pctDedicate,
		rate,
		comments,
		consultants,
		sowTitle,
	}) {
		console.log(chalk.yellow('rolesReducer...'))
		return {
			id,
			businessUnitId,
			projectId,
			startDate,
			endDate,
			roleStatus: this.roleStatusReducer(roleStatus),
			resourceId,
			resourceStartDate,
			totalHours,
			pctDedicate,
			rate,
			comments,
			consultants,
			sowTitle,
		}
	}

	async getRoles() {
		console.log(chalk.green.italic('getRoles...'))
		try {
			const res = await this.get('/roles')
			return res.content.map(role => {
				return this.roleReducer(role)
			})
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/roles`))
			throw new Error(err)
		}
	}

	async getRoleById(id) {
		console.log(chalk.green.italic('getRoleById...'))
		try {
			const res = await this.get(`/roles/${id}`)
			return res
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/roles/${id}`))
			throw new Error(err)
		}
	}

	roleStatusReducer({ id, roleStatus }) {
		console.log(chalk.whiteBright('roleStatusReducer'))
		return {
			id,
			name: roleStatus,
		}
	}

	async getRoleStatuses() {
		console.log(chalk.green.italic('getRoleStatuses...'))
		try {
			const res = await this.get('/role-status')
			return res
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/role-status`))
			throw new Error(err)
		}
	}

	async getRoleStatusById(id) {
		console.log(chalk.green.italic('getRoleStatusById...'))
		try {
			const res = await this.get(`/roles-status/${id}`)
			return res
		} catch (err) {
			console.log(chalk.red(`${err} - ${this.baseURL}/role-status/${id}`))
			throw new Error(err)
		}
	}
}

export default Role
