const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./schema/graphql.graphql');

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]
  // 1
  let idCount = links.length                             // 수정
  const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: () => links,
    },
    Mutation: {                                          // 수정
      // 2
      post: (parent, args) => {                          // 수정
         const link = {                                  // 수정
          id: `link-${idCount++}`,                       // 수정
          description: args.description,                 // 수정
          url: args.url,                                 // 수정
        }                                                // 수정
        links.push(link)                                 // 수정
        return link                                      // 수정
      }                                                  // 수정
    },                                                   // 수정
  }


const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`http://localhost:4000에서 서버 가동중`))