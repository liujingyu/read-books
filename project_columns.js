require('dotenv').config()
var beautify = require("json-beautify");


const { request, GraphQLClient } = require('graphql-request')

const client = new GraphQLClient(process.env.endpoint, {
    headers: {
        Authorization: 'Bearer ' + process.env.token
    },
})

const query = `
{
  repository(owner:"liujingyu", name:"todos") {
      projects(last:3) {
            edges {
                    node {
                              id
                              name
                                        columns(first:1) {
                                                    edges {
                                                                  node {
                                                                                  id
                                                                                  name
                                                                                }
                                                                }
                                                  }
                            }
                  }
          }

    }
}
`

client.request(query).then(data => console.log(beautify(data, null, 4, 100)));
