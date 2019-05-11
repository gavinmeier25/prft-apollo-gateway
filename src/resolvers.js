export default {
    Query: {
        hello: async (_, args, context, info) => {
            await context.dataSources.consultant.getBusinessUnits()
            return 'hello world'
        },
        consultants: async (_, {page, size}, context, info) => {
            return await context.dataSources.consultant.getConsultants(page, size)
        },
        consultant: async (_, {id}, context, info) => {
            return await context.dataSources.consultant.getConsultantById(id)
        },
        titles: async (_, args, context, info ) => {
            return await context.dataSources.consultant.getTitles()
            
        },
        title: async (_, {id}, context, info ) => {
            return await context.dataSources.consultant.getTitleById(id)
        },
    },
    // Mutation: {

    // }
}