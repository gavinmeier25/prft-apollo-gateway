export default {
	Query: {
		consultants: async (_, { page, size }, context, info) => {
			return await context.dataSources.consultant.getConsultants(page, size)
		},
		consultant: async (_, { id }, context, info) => {
			return await context.dataSources.consultant.getConsultantById(id)
		},
		titles: async (_, args, context, info) => {
			return await context.dataSources.consultant.getTitles()
		},
		title: async (_, { id }, context, info) => {
			return await context.dataSources.consultant.getTitleById(id)
		},
		projects: async (_, args, context, info) => {
			return await context.dataSources.project.getProjects()
		},
		project: async (_, { id }, context, info) => {
			return await context.dataSources.project.getProjectById(id)
		},
		businessUnits: async (_, args, context, info) => {
			return await context.dataSources.project.getBusinessUnits()
		},
		businessUnit: async (_, { id }, context, info) => {
			return await context.dataSources.project.getBusinessUnitsById(id)
		},
		projectTypes: async (_, args, context, info) => {
			return await context.dataSources.project.getProjectTypes()
		},
		projectType: async (_, { id }, context, info) => {
			return await context.dataSources.project.getProjectTypeById(id)
		},
		projectStatuses: async (_, args, context, info) => {
			return await context.dataSources.project.getProjectStatuses()
		},
		projectStatus: async (_, { id }, context, info) => {
			return await context.dataSources.project.getProjectStatusById(id)
		},
		roles: async (_, args, context, info) => {
			return await context.dataSources.role.getRoles()
		},
		role: async (_, { id }, context, info) => {
			return await context.dataSources.role, getRoleById(id)
		},
		roleStatuses: async (_, args, context, info) => {
			return await context.dataSources.role.getRoleStatuses()
		},
		roleStatus: async (_, { id }, context, info) => {
			return await context.dataSources.role.getRoleStatusById(id)
		},
	},
}
