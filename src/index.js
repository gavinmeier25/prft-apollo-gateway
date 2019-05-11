import { ApolloServer } from 'apollo-server'
import chalk from 'chalk'
import { typeDefs as consultant } from './typeDefs/consultant'
import { typeDefs as mutation } from './typeDefs/mutation'
import { typeDefs as query } from './typeDefs/query'
import { typeDefs as project } from './typeDefs/project'
import { typeDefs as role } from './typeDefs/role'
import { typeDefs as shared } from './typeDefs/shared'
import resolvers from './resolvers'
import Consultant from './data-sources/Consultant'
import Project from './data-sources/Project'
import Role from './data-sources/Role'

const server = new ApolloServer({
	typeDefs: [consultant, mutation, query, project, role, shared],
	resolvers,
	dataSources: () => ({
		consultant: new Consultant(),
		project: new Project(),
		role: new Role(),
	}),
	context: async (req, res) => {
		return {
			res,
			req,
		}
	},
	tracing: true,
	cacheControl: true,
	cors: true,
	cache: false,
	// mocks: true
})

server.listen().then(({ url }) => {
	console.log(chalk.blueBright.bold(`Server is running at ${url}`))
})
