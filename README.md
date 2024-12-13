
# RapidREST: Quick and Easy REST API Development



## Introduction
RapidREST is a command-line tool that expedites the creation of robust REST API servers. With just a few commands, you can establish a fully functional server with MongoDB integration.

## Prerequisites

Before diving in, ensure you have the following installed:

`Node.js and npm:` Download and install the latest version of Node.js from the official website.This installation includes npm, the Node Package Manager.

`MongoDB Compass:` Download and install MongoDB Compass to manage your MongoDB database

## Installation

Install my-project with npm

```bash
mkdir my-api
cd my-api
npm i -g rapidrest-api 
rapidrest init / rapidrest init <directory_name>
```
    
## Configuration
The default settings reside in the .env file, allowing for customization. Key configurations include:

`PORT: The port on which the server listens (default: 3000)`

`MONGODB_URI: The MongoDB connection string (default:mongodb://localhost:27017/crudDB)`
## Run Locally


To start the server, simply execute:

```bash
cd <directory_name>
npm start
```


## Demo API Endpoints


Once the server is operational, interact with the API using the following endpoints:

```http 
GET /api/v1/users Retrieves a list of all users.
```


```http 
POST /api/v1/users

Creates a new user.

Request Body:

 JSON
{
  “Id”: “1”,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```


``` http
GET /api/v1/users/:id
Retrieves a specific user by ID.
```
```http
PUT /api/v1/users/:id
Updates a specific user by ID.

Request Body:

 JSON
{
  "name": "Updated Name"
}
```
```http
DELETE /api/v1/users/:id
Deletes a specific user by ID.
```

## Conclusion

RapidREST streamlines REST API development, enabling you to concentrate on your application's core logic. Its user-friendly setup and powerful features make it an excellent choice for developers of all experience levels.