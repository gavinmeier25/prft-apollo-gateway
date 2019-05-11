import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Mutation {
		addConsultant(consultant: ConsultantInput): Consultant
		addProject(project: ProjectInput): Project
		addRole(role: RoleInput): Role
        updateRole(role: RoleInput): String
        deleteRole(id: String): String
	}
`