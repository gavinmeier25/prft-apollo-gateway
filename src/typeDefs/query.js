import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        hello: Consultant
<<<<<<< HEAD
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
=======
        # businessUnits: [BusinessUnits]
        titles: [Title]
        title(id: String!): Title
        consultants(page: Int, size: Int): [Consultant]
        consultant(id: String!): Consultant
>>>>>>> dc6105d2ef151681d9d1b5e36e12aa670bbff107
    }
`