// Fragments - define reusable fields
type Post {
    id:ID!
    title:String!
    content:String!
}

type Comment{
id:ID!
body:String!
}


query getPost($id:ID!){
    post(id: $id):Post(){
        ...postFields
    }
    post2:Post(){
        ...postFields
    }
}

fragment postFields on Post{
    id
    title
    content
    comments{
        id
        body
    }
}


// Mutations 
