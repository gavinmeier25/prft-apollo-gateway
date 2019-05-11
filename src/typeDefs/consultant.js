import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Consultant {
		id: ID!
		name: String
		email: String
		hourlyRate: Float
		manager: String
		relocate: Boolean
		dob: Date
		ssn: Int
		businessUnit: BusinessUnit
		title: Title
	}

	type Title {
		id: ID!
		name: String
	}
`
