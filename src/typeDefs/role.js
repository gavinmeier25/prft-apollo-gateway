import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Role {
		id: ID!
		businessUnitId: ID
		projectId: ID
		sowTitle: String
		startDate: Date
		endDate: Date
		roleStatus: RoleStatus
		resourceId: ID
		resourceStartDate: Date
		totalHours: Float
		pctDedicate: Float ## % of time on project
		rate: Float ## double
		consultants: [Consultant] ## find by id on consultant
	}

	type RoleStatus {
		id: ID!
		name: String ## neeeds mapping for roleStatus
	}

    input RoleInput {
		id: String
		businessUnitId: String
		projectId: String
		sowTitle: String
		startDate: String
		endDate: String
		roleStatus: RoleStatusInput
		resourceId: String
		resourceStartDate: String
		totalHours: Float
		pctDedicate: Float ## % of time on project
		rate: Float ## double
	}

	input RoleStatusInput {
		id: ID
		name: String ## neeeds mapping for roleStatus
	}
`
