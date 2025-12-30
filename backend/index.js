// This is our entry point -> Lets create standalone server

import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema";
import { startStandaloneServer } from "@apollo/server/standalone";

const PORT = 8080;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, listen: {
  port:PORT
});

console.log(`Server running on: ${url}`)

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
