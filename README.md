# Serverless-REST-API-AWS-
REST API using AWS(API Gateway, Lambda, DynamoDB)
  Introduction
  In this tutorial we will explore building Serverless REST API integrated with database using AWS. We will be leveraging AWS services to build this Serverless application, most importantly we don't need to worry about maintaining the underlying server: beauty of Serverless architecture.
  
  In particular we will be using following AWS services to build this application:
  
  ### API Gateway (REST API)
  
  ### Lambda
  
  ### DynamoDB (database)
  
  The architecture will look something like this, We will make an API for a blogging application where different authors can post a blog on a particular topic. Our API will expose endpoints to
  
  GET all the blogs
  
  POST a particular blog
  
  DELETE a particular blog

  ![image](https://github.com/ayushshawnfrost/Serverless-REST-API-AWS-/assets/23500476/02862ff4-ab43-4648-8e29-55f526b5dc61)

  
## Straight into ACTION
### Create a DynamoDB Table
Open the AWS console and in the search field on the top search for DynamoDB then follow these steps:

1. Click “create table” in dynamoDB.
2. Define table name (blogs), primary key (“blog_id”) and any other additional attributes for the application.
3. Configure the table settings and finish creating table.

![image](https://github.com/ayushshawnfrost/Serverless-REST-API-AWS-/assets/23500476/2e99dd79-2a30-49cc-8206-8100728d18c4)

### Create Lambda functions
Open the AWS console and in the search field on the top search for Lambda then follow these steps:

1. Click “create function” in Lambda window.
2. Choose “Author from scratch” and give a name to your function(getBlogsLambda).
3. Select a runtime (Node.js).
4. Click “Create function”.
5. Repeat the above process and create 2 more lambdas for post and delete functionality, and give them appropriate names as well (postBlogsLambda, deleteBlogsLambda).
6. We need to give certain permissions to our lambdas like “cloud watch”(to get logs of our lambdas) and “dynamoDB” (to connect to database and do CRUD operations)
At the bottom of the Lambda page click on “Configuration” tab then select “Permissions”. There you will find a Role attached to this lambda function under “Role name”. Clicking the name will open IAM console, under “Permissions” tab click on “Add permissions” and add “dynamoDB” and “cloud watch” or give permission to the operations you want to perform on these services.
![image](https://github.com/ayushshawnfrost/Serverless-REST-API-AWS-/assets/23500476/cf30e592-104b-461b-8f65-ffbd6d0a8cd5)

### Create an API Gateway
Open the AWS console and in the search field on the top search for API Gateway then follow these steps

1. Click on “Create API” and choose “REST API”.
2. Define the API name(rest) and click on “Create API”.
3. Under the “Resources” tab, create a new resource and name it “/blogs”.
4. Add the necessary methods (GET, POST, DELETE) to the resource.
5. For each method, select the corresponding Lambda function as the integration (getBlogsLambda, postBlogsLambda, deleteBlogsLambda).
6. In the API Gateway console, select the API and go to the “Actions” dropdown.
7. Click on “Deploy API” and create a new stage “dev”.
8. Note down the API endpoint URL provided.
![image](https://github.com/ayushshawnfrost/Serverless-REST-API-AWS-/assets/23500476/0df11b68-ec31-468c-abb1-77137c5f4cc6)

Testing from API Gateway
Goto API gateway click on “Resources” and then click on “TEST” button on top. Then go to the bottom and click “Test ” buttion. you will get all the blogs saved in the database (i have created some entries in the table for your refrence).

![image](https://github.com/ayushshawnfrost/Serverless-REST-API-AWS-/assets/23500476/1b38b965-28a2-4aed-b48d-604a182a0195)
![image](https://github.com/ayushshawnfrost/Serverless-REST-API-AWS-/assets/23500476/c8ecf6c8-93b9-440e-955c-c9e76ce5d2e4)

### Conclusion
Congratulations! You have successfully built a serverless REST API using AWS Lambda functions and DynamoDB. Serverless architecture provides scalability and cost-efficiency, allowing you to focus on building your application’s core functionality. Throughout this process, I want to express my gratitude to the extensive and detailed documentation provided by AWS. Their comprehensive resources have been instrumental in understanding and implementing the serverless architecture. I would also like to extend my appreciation to ChatGPT, an invaluable tool that has provided guidance and assistance in shaping this tutorial. Its ability to generate insightful responses and help bridge any knowledge gaps has been a tremendous asset. You can further enhance the API by adding authentication, validation, and error handling. Happy coding!




