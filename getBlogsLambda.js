// getBlogsLambda

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName : 'blogs-dev'
}

exports.handler = async (event, context) => {
  try {
    const data = await docClient.scan(params).promise()
    return { body: JSON.stringify(data) }
  } catch (err) {
    return { error: err }
  }
}
