import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

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
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		parseValue(value) {
			return new Date(value)
		},
		serialize(value) {
			return 'value.getTime()'
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.Int) {
				return parseInt(ast.value, 10)
			}
			return null
		},
	}),
	Mutation: {
		addConsultant: async (_, { consultant }, context, info) => {
			return await context.dataSources.consultant.addConsultant(consultant)
		},
		addProject: (_, { project }, context, info) => {
			return context.dataSources.project.addProject(project)
		},
	},
	BU: {
		ATL: 'ATL',
		ATS: 'ATS',
		STL: 'STL',
	},
	T: {
		ATC: 'Associate Technical Consultant',
		TC: 'Technical Consultant',
		LTC: 'Lead Technical Consultant',
	},
	PS: {
		Verbal: 'Verbal',
		Proposed: 'Proposed',
		Sold: 'Sold',
		Archived: 'Archived',
	},
	CL: {
		BCBSRI: 'BCBSRI',
		EXPRESS_SCRIPTS: 'EXPRESS_SCRIPTS',
		MASTER_CARD: 'MASTER_CARD',
	},
	PT: {
		ReactJava: 'ReactJava',
		Drupal: 'Drupal',
		GoLang: 'GoLang',
	},
}
