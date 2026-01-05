// This is our entry point -> Lets create standalone server

import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema.js";
import { startStandaloneServer } from "@apollo/server/standalone";

import { projects, owners } from "./_db.js";

// Resolver should use the entry points (Query type) defined in the typeDefs
const resolvers = {
  Query: {
    projects() {
      // Return an array/list of projects
      return projects;
    },
    owners() {
      //Return a list/an array of all owners of the project
      return owners;
    },
    project(_, args) {
      // Returns a single project based on the ID provided in the query - find
      return projects.find((project) => project.id === args.id);
    },
    owner(_, args) {
      // Returns a single owner based on the ID provided in the query - find
      return owners.find((owner) => owner.id === args.id);
    },
  },
};
const PORT = 8080;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: PORT,
  },
});

console.log(`Server running on: ${url}`);

// import { gql } from "apollo-server-express";

// export const typeDefs = gql`
//   type Post {
//     id: ID!
//     title: String!
//     content: String!
//     comments: [Comment!]!
//   }

//   type Comment {
//     id: ID!
//     body: String!
//     post: Post
//   }

//   type Query {
//     post(id: ID!): Post
//     post2: Post
//     posts: [Post!]!
//   }

//   type Mutation {
//     createPost(title: String!, content: String!): Post!
//     createComment(postId: ID!, body: String!): Comment!
//   }
// `;
