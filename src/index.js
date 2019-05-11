import { ApolloServer } from 'apollo-server'
import chalk from 'chalk'
import { typeDefs as consultant } from './typeDefs/consultant'
import { typeDefs as query } from './typeDefs/query'
import { typeDefs as project } from './typeDefs/project'
import { typeDefs as role } from './typeDefs/role'
import { typeDefs as shared } from './typeDefs/shared'
import resolvers from './resolvers'

const server = new ApolloServer({
    typeDefs: [consultant, query, project, role, shared],
    resolvers,
    dataSources: () => ({

    }),
    context: async (req, res) => {
        return {
            req, res
        }
    },
    tracing: true,
    cacheControl: true,
    cors: true,
    mocks: true
})

server.listen().then(({ url }) => {
    console.log(chalk.blueBright.bold(`Server is running at ${url}`))
})