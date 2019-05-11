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
		return {
			id,
			businessUnitId,
			projectId,
			startDate,
			endDate,
			roleStatus: roleStatus ? this.roleStatusReducer(roleStatus) : null,
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

    async addNewRole (value) {
        console.log(chalk.green.italic('addNewRole'))
        const role = this.roleReducer(value)
        return await this.post('/roles', role)
            .catch(err => {
                console.log(chalk.red(`${err.message} - ${this.baseURL}/roles POST with body ${role}`))
                throw new Error(err)
            })
    }

    async updateRole (value) {
        console.log(chalk.green.italic(`updateRole(${value.id})`))
        const oldRole = await this.get(`/roles/${value.id}`)
        const newRole = { ...oldRole, ...value }
        const updatedRole = this.roleReducer(newRole);
        return await this.put('/roles', updatedRole)
            .catch(err => {
                console.log(chalk.red(`${err.message} - ${this.baseURL}/roles PUT with id ${value.id}`))
                throw new Error(err)
            })
    }

    async deleteRole (id) {
        console.log(chalk.green.italic(`deleteRole(${id})`))
        return await this.delete(`/roles/${id}`)
            .catch(err => {
                console.log(chalk.red(`${err.message} - ${this.baseURL}/roles/${id} DELETE}`))
                throw new Error(err)
            })
    }
}

export default Role
