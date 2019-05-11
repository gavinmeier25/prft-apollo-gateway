import { gql } from 'apollo-server'

export const typeDefs = gql`
	# businessUnits: [BusinessUnits]
	type Query {
		titles: [Title]
		title(id: String!): Title
		consultants(page: Int, size: Int): [Consultant]
		consultant(id: String!): Consultant
		projects: [Project]
		project(id: String!): Project
		projectStatuses: [ProjectStatus]
		projectStatus(id: String!): ProjectStatus
		projectTypes: [ProjectType]
		projectType(id: String!): ProjectType
		clients: [Client]
		client(id: String): Client
		businessUnits: [BusinessUnit]
		businessUnit(id: String): BusinessUnit
		roles: [Role]
		role(id: String!): Role
		roleStatuses: [RoleStatus]
		roleStatus(id: String): RoleStatus
	}
`
