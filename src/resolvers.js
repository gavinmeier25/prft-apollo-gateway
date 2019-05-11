export default {
    Query: {
        hello: async (_, args, context, info) => {
            await context.dataSources.consultant.getBusinessUnits()
            return 'hello world'
        },
        projects: async (_, args, context, info) => {
            return await context.dataSources.project.getProjects()
        },
        projectById: async (_, { id }, context, info) => {
            return await context.dataSources.project.getProjectById(id)
        },
        businessUnits: async (_, args, context, info) => {
            return await context.dataSources.project.getBusinessUnits()
        },
        businessUnitById: async (_, { id }, context, info) => {
            return await context.dataSources.project.getBusinessUnitsById(id)
        },
        projectTypes: async (_, args, context, info) => {
            return await context.dataSources.project.getProjectTypes()
        },
        projectTypeById: async (_, { id }, context, info) => {
            return await context.dataSources.project.getProjectTypeById(id)
        },
        projectStatuses: async (_, args, context, info) => {
            return await context.dataSources.project.getProjectStatuses()
        },
        projectStatusById: async (_, { id }, context, info) => {
            return await context.dataSources.project.getProjectStatusById(id)
        },
        roles: async (_, args, context, info) => {
            return await context.dataSources.role.getRoles()
        },
        roleById: async (_, { id }, context, info) => {
            return await context.dataSources.role,getRoleById(id)
        },
        roleStatuses: async (_, args, context, info) => {
            return await context.dataSources.role.getRoleStatuses()
        },
        roleStatusById: async (_, { id }, context, info) => {
            return await context.dataSources.role.getRoleStatusById(id)
        }
    },
    // Mutation: {

    // }
}