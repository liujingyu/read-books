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
m = `mutation abc($myvar:AddProjectCardInput!) {
  addProjectCard(input:$myvar) {
        projectColumn {
                    id
                  }

      }
}`

dm =  `
mutation deletecard($myvar:DeleteProjectCardInput!) {
  deleteProjectCard(input:$myvar) {
    deletedCardId
  }
}
`


var moment = require('moment');
var xrange = require("xrange");

xrange(1, 60).forEach(function(each) {
    day = moment().add(each, 'days').format("YYYY年MM月DD日 第w周");
    var variables = {
        "myvar": {
            "note": "**" + day + "**\n - [ ] \n - [ ]\n",
            "projectColumnId": "MDEzOlByb2plY3RDb2x1bW4yMjYzNTEz"
        }
    }
    client.request(m, variables).then(data => console.log(beautify(data, null, 4, 100)));

});
