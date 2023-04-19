# Envelope Budget Rest API

![License](https://img.shields.io/github/license/bbland1/CC-Personal-BudgetAPI?style=plastic)
![Top Language](https://img.shields.io/github/languages/top/bbland1/CC-Personal-BudgetAPI?style=plastic)
![Contributors](https://img.shields.io/github/contributors-anon/bbland1/CC-Personal-BudgetAPI?style=plastic)

This is a Rest API built using the idea of the [envelope budgeting](https://www.thebalancemoney.com/what-is-envelope-budgeting-1293682) to allow a user to track the budget of the envelope, add, subtract and view the amount within it. This project is not deployed or hosted anywhere. It isn't callable API, but is used to practice proper API creation. This project uses express routers and controllers so that versioning of the API could be done in future to add more routes or change how they were being handled. It allows the project to be scalable especially if a database was attached and a front-end. This is a starting base for this API, but was built with the idea of good practive to be used by others.

## Requirements
Install all the dependecies of this project by using the [package.json](./package.json). You will need to run the install command in your terminal after forking and cloning the project. While it is not a hard requirement it is suggested that you use [Postman](https://www.postman.com) for API checking calls.

```shell
npm install
```

## Built With
* [Node.js](https://nodejs.org/en)
* [Express](https://expressjs.com)

## How to use API
All `GET` methods:
- Append end of url with:
  * `api/v1/envelopes/` to get all of the envelopes that the user has or a status code of 400 if there are none
  * `api/v1/envelopes/:id` where :id is an integer value that will equate to the id of the envelope and will select that specifc envelope from the database and show that information
  * `api/v1/envelopes/envelope/:name` where :name is the string value of the title of the envelope and will select that specifc envelope from the database and show that information

All `POST` methods:
- Append end of url with:
  * `api/v1/envelopes/` then the information for the title, budget and the amount saved for the envelope is passed through the body of the request to create a new envelope. The id for the envelop is generated within the code so the user doesn't have to put it in.

All `PUT` methods
- Append end of url with:
  * `api/v1/envelopes/:id` allows the user to update the amount saved or the budget of the envelope by searching the database with the :id (an integer) passed as the query parameters
  * `api/v1/envelopes/envelope/:name` allows the user to update the amount saved or the budget of the envelope by searching the database with the :name passed as the query parameters
  * `api/v1/envelopes/transfer/:from/:to` the transfer is the amount the user wants to move and from and to are the designated envelopes the user selects and it will move the specific amount from the amount saved in the "from envelope" and move it within the amount saved for the "to envelope"

All `DELTE` methods:
- Append end of url with:
  * `api/v1/envelopes/:id` allows the user to delete and entire envelope by looking into the database for it with by :id (an integer) passed by the query paramters
  * `api/v1/envelopes/envelope/:name` allows the user to delete and entire envelope by looking into the database for it with by :name (a string) passed by the query paramters

### Local Development
1. Download and install the LTS version of [Node.js](https://nodejs.org/en). In this project [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) was used for the installing of a node version.
2. (Optional) Download and install [Postman](https://www.postman.com). This is a good tool to get use to using that will allow for easier viewing of your API paths/calls. You will be able to use it to see which status codes you are getting and if API is being called correctly. Calling within the broswer works but it can be a bit cumbersome.
3. Install the project requirements
```shell
npm install
```
4. Run the project
```shell
node app.js
```
6. Go to `localhost:3000/api/v1/envelopes/` in your web browser or within postman to see all the envelopes display.

### License
See the [LICENSE](./LICENSE) file for license rights and limitations (MIT).
