const {ApolloServer} = require('apollo-server');
const {resolvers} = require('./resolvers');



const typeDefs = `
   
  scalar DateTime

  type Query{
      totalPhotos: Int!
      allPhotos(after:DateTime):[Photo!]!
  }

  type Mutation {
      postPhoto(input:PostPhotoInput!): Photo!
  }
  type Photo {
      id:ID!
      url:String!
      name:String!
      description:String
      category: PhotoCategory!
      postedBy:User!
      taggedUsers:[User!]!
      created: DateTime
  }

  type User{

    githubLogin:ID!
    name:String
    avatar:String
    postedPhotos:[Photo!]!
    inPhotos:[Photo!]!
  }

  input PostPhotoInput{
      name:String!
      category:PhotoCategory=PORTRAIT
      description:String
  }
  enum PhotoCategory{
      SELFIE
      PORTRAIT 
      ACTION 
      LANDSCAPE 
      GRAPHIC
  }
`


const server = new ApolloServer({
    typeDefs, resolvers
})

server
.listen()
.then( ({url}) => console.log(`GraphQL API running on ${url}`))