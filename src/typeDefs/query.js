import { gql } from 'apollo-server'

export const typeDefs = gql`
		hello: Consultant
		# businessUnits: [BusinessUnits]
		titles: [Title]
		title(id: String!): Title
		consultants(page: Int, size: Int): [Consultant]
		consultant(id: String!): Consultant
        projects: [Project]
        projectById: Project
        projectStatuses: [ProjectStatus]
        projectStatusById: ProjectStatus
        projectTypes: [ProjectType]
        projectTypeById: ProjectType
        clients: [Client]
        clientById: Client
        businessUnits: [BusinessUnit]
        businessUnitById: BusinessUnit
        roles: [Role]
        roleById: Role
        roleStatuses: [RoleStatus]
        roleStatusById: RoleStatus
`
