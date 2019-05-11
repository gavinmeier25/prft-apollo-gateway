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

	input ProjectInput {
		id: String
		name: String ## project name
		accountDeveloper: String ## sales rep
		startDate: Date
		endDate: Date
		engagementDirector: String
		travel: Boolean
		comments: String
		projectStatus: ProjectStatusInput ## resolver needed
		projectType: ProjectTypeInput ## ENUM
		client: ClientInput ## resolver needed
		businessUnit: BusinessUnitInput ## resolver needed
	}

	type BusinessUnit {
		id: ID!
		name: BU
	}

	input BusinessUnitInput {
		id: String
		name: BU!
	}

	enum BU {
		ATL
		ATS
		STL
	}

	type ProjectType {
		id: ID!
		name: PT
	}

	enum PT {
		ReactJava
		Drupal
		GoLang
	}

	input ProjectTypeInput {
		id: String
		name: PT!
	}

	type ProjectStatus {
		id: ID!
		name: PS
	}
	enum PS {
		Verbal
		Proposed
		Sold
		Archived
	}

	input ProjectStatusInput {
		id: String
		name: PS!
	}

	type Client {
		id: ID!
		name: CL
	}

	enum CL {
		BCBSRI
		EXPRESS_SCRIPTS
		MASTER_CARD
	}

	input ClientInput {
		id: String
		name: CL!
	}
`
