import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        hello: Consultant
        # businessUnits: [BusinessUnits]
        titles: [Title]
        title(id: String!): Title
        consultants(page: Int, size: Int): [Consultant]
        consultant(id: String!): Consultant
    }
`