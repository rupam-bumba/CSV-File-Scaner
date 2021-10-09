# CSV-File-Scaner

Use NodeJS, ExpressJS and MongoDB to do the following

1. An API that takes a CSV file from a multipart form upload
2. The uploaded CSV file gets scanned and its contents are pushed to a MongoDB collection
3. Write another API to perform CRUD operations over the collection
4. Every route should have a middleware that checks for a very basic authentication token (something like "allow" or "deny", you can use passport as well for this if you want)

Things to verify

- Make sure to use an ODM/ORM
- The CSV file can be in any format you want
- Make sure to create a Postman collection of the APIs What we will look for
- Structure of the APIs
- Code structure
- Documenting the steps to properly start and stop the server

---

# API Routes

## http://localhost:9002/api/uploadcsv

    - funtion : Parse a csv file and push data in a database
    - input   : csv file (we are not valedateing file type as it was not mention in assigment)

## http://localhost:9002/api/create

    - funtion : Create a contact
    - input   : json{Login_email,Identifier,One_time_password,Recovery_code,First_name,Last_name,Department,Location }

## http://localhost:9002/api/read

    -funtion : Reads records
    -input	 : {}

## http://localhost:9002/api/update

    -funtion : Update records
    -input   : json{_id,Login_email,Identifier,One_time_password,Recovery_code,First_name,Last_name,Department,Location}

## http://localhost:9002/api/remove

    -funtion : delete a record
    -input   : json{_id}

---

# Postman Collection Link

https://www.getpostman.com/collections/a5930ceed61a08486077
