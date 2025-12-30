// install extension -> graphql: language features
// >npm i nodemon
//

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    fullname: String!
    verified: Boolean!
  }

  type Query {
    game(id: ID!): Game!
    games: [Game!]!
    authors: [Author!]!
    author(id: ID!): Author!
    reviews: Review!
    review(id: ID!): [Review!]!
  }

  type Mutation {
    addGame(title:String!, platform:[String!]!): Game!
    addAuthor(fullname:String!)
  }
`;

export const resolvers {
    Query{}
}