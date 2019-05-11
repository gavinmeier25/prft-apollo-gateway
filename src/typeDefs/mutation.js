import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Mutation {
		addConsultant(consultant: ConsultantInput): Consultant
		addProject(project: ProjectInput): Project
	}
`
