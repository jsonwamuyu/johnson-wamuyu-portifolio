import { authors, games, reviews } from "./db";

export const typeDefs = `#graphql 
    type Game{
        id:ID!
        title:String!
        platform:[String!]!
        author:Author!
        reviews:[Review!]
    },
    type Author{
        id:ID!
        fullname:String!
        games:[Game!]
        reviews:[Review!]
    }
    type Review{
        id:ID!
        content:String!
        author:Author!
        game:Game!
    }

    type Query{
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
        reviews:[Review!]
        review(id:ID!):Review
    }

    type Mutation{
        addAuthor(fullname:String!):Author
        addGame(title:String!, platform:[String!]!):Game
        addReview(content:String!):Review
    }
     `;
