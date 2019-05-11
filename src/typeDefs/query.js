import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        hello: Consultant
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
    }
`