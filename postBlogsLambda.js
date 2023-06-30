// postBlogsLambda

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();



exports.handler = async (event) => {
    console.log(event);
    try {
      const params = {
      TableName : 'blogs-dev',
      Item: {
             "blog_id":11,
             "blog_author":"Neil harrison",
             "blog_title":"Microservice"
        }
      }
    await docClient.put(params).promise();
    return { body: 'Successfully created item!' }
  } catch (err) {
    
    return { error: err }
  }
};
