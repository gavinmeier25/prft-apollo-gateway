export default {
    Query: {
        hello: async (_, args, context, info) => {
            await context.dataSources.consultant.getBusinessUnits()
            return 'hello world'
        }
    },
    // Mutation: {

    // }
}