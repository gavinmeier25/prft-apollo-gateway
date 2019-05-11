import { ApolloServer } from 'apollo-server'
import chalk from 'chalk'
import { typeDefs } from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({
    typeDefs,
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
    cors: true
})

server.listen().then(({ url }) => {
    console.log(chalk.blueBright.bold(`Server is running at ${url}`))
})