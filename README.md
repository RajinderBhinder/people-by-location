# people-by-location

## Introduction

An API which calls the https://bpdts-test-app.herokuapp.com/ API, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London.

## Installation steps


1. Clone the repository:

```
git clone https://github.com/RajinderBhinder/people-by-location
``` 

2. Navigate into the cloned repository, and install the dependencies:

```
 npm i
``` 

3. Run the app on your local machine

```
npm start
```



## Endpoint

When running on the local machine, the app will be available at port 3000.

Example url to send the request: http://localhost:3000/api/city/london/users

## Testing

To test the endpoints on your local machine use the command:

```
npm test
```