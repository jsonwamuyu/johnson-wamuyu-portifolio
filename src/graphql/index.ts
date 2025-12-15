// DEFINING THE TYPE OBJECT

// Bank accounts, client 
type Account{
    id: ID!
    accountType:string!
    client:Client!
}

type Client{
    id:ID!
    fullname:string
}


// scaller types - they do not have sub-fields.They include - Int, String, ID, Boolean, Float

type Course{
    id:ID!
    name:String
    author:Author!
    price:Int!
    thumbnail:String!
    duration:Int!
    videoUrl:String!
}

type Author{
    id:ID!
    fullname:String!
    courses:[Course!]!
}

// enun types (enumeration types - type resolve to a pre defined set of values)
enum Gender{
    MALE
    FEMALE
    NOTSPECIFY
    LGBTQ
}
// It means that whenever we use the type Gender in our schema, we expect to be exactly one of the above

type Person{
    id:ID!
    fullname:String!
    gender:Gender!
    isMarried:Boolean!
}

type User{
    users:[Person!] // means the list itself can be null, but it can not have any null member 
    users2:[Person!]! // means list itself and any member must be Non-Null
}

myField: [String!] // This means that the list itself can be null, but it can’t have any null members.
myField: [String]! //This means that the list itself cannot be null, but it can contain null values
myField: [String!]! // You can also have a Non-Null List of Non-Null String types

// DEFINIG THE QUERIES - GraphQL support 3 main operation types o read data from the server - Query, Mutation and Subscription
type Query{} // Rem. when creating a GraphQL document, always start with the root operation type (Query) - this serves as the enntry point to the API.
type Mutation{}
type Subscription{}