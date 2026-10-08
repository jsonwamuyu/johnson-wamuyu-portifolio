export const typeDefs = `#graphql
  type Project {
    id: ID!
    title: String!
    source_code: String!
    live_link: String!
    owner:ProjectOwner!
  }
  type ProjectOwner {
    id: ID!
    fullname: String!
    projects:[Project!]
  }

  type Query {
    projects: [Project]
    owners: [ProjectOwner]
    project(id: ID!): Project
    owner(id: ID!): ProjectOwner
  }
  type Mutation {
    addProject(title: String!, source_code: String!, live_link: String!): Project
    addOwner(fullname: String!): ProjectOwner
  }
`;
