// deleteBlogsLambda

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: 'blogs-dev',
  Key: {
    "blog_id": 1
  },
  ReturnValues: "ALL_OLD"
}

exports.handler = async (event, context) => {
  try {
    const data = await docClient.delete(params).promise()
    return { body: JSON.stringify(data) }
  } catch (err) {
    return { error: err }
  }
}
