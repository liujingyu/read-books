require('dotenv').config()
var beautify = require("json-beautify");

var variables = {
  "myvar": {
      "note": "2018年3月10日 每日keep",
      "projectColumnId": "MDEzOlByb2plY3RDb2x1bW4yMjU2MjM3"
    }
}

const { request, GraphQLClient } = require('graphql-request')

const client = new GraphQLClient(process.env.endpoint, {
    headers: {
        Authorization: 'Bearer ' + process.env.token
    },
})

const query = `
{
  repository(owner:"liujingyu", name:"todos") {
      isPrivate
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


//client.request(m, variables).then(data => console.log(beautify(data)))

var moment = require('moment');
moment.locale('zh_CN');
console.log(moment().format("LL"));

