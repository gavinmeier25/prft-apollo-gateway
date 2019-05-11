import { gql } from 'apollo-server'

export const typeDefs = gql`
      type Project {
        id: ID! ## project id
        name: String! ## project name
        accountDeveloper: String! ## sales rep
        startDate: Date
        endDate: Date 
        engagementDirector: String!
        travel: Boolean
        comments: String
        projectStatus: ProjectStatus ## resolver needed
        projectType: ProjectType ## ENUM
        client: Client ## resolver needed
        businessUnit: BusinessUnit ## resolver needed
    }

    type BusinessUnit {
        id: ID!
        name: String
    }

    type ProjectType {
        id: ID!
        name: String
    }

    type ProjectStatus {
        id: ID!
        name: String
    }

    type Client {
        id: ID!
        name: String
    }

`