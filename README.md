# Repo Organizer
Project created to organize GitHub repositories based on its REST API (v3). Used NodeJS, ExpressJS, ReactJS, Redux and others technologies. 

***

# Requirements

To run this application you'll need install:

 - [Nodejs](https://nodejs.org/en/download/package-manager/);
 - [NPM packet](https://nodejs.org/en/download/package-manager/);

 ***

 # Instalation

  1. Please clone our application running the following command on a terminal:

  ```bash
    git clone https://github.com/ga0125/repo_organizer.git
  ```

  2. Install the server:
  ```bash
    cd repo_organizer/backend/
    npm install
  ```

  3. Install the SPA application:
  ```bash
    cd ..
    cd repo_organizer/repo_organizer_app/
    npm install
  ```
  *** 
  # Execution

  1. To execute the backend, follow this commmand line:
  ```bash
    cd repo_organizer/backend/
    npm run dev #It will run on port 3838 as default
  ```
  2. To execute the SPA application, follow this commmand line:
  ```bash
    cd..
    cd repo_organizer/repo_organizer_app/
    npm start #It will run on port 3000 as default
  ```
  ***
 # Application accesses

  1. After run the SPA application, you can access by:

  **Web application:** [Repo Organizer](http://localhost:3000)

  2. Check on this table the APIs endpoints description:

  Route | Method Type | Body Parameters | Description
--------- | ------------- | ------------ | ------------- |
/api/v1/repositories| **POST** |  {"language_type": "string", page_ID: "interger"} | The endpoint will return all repos data according to the filter parameters passed on body request.
/api/v1/repository | **POST** |  {"username": "string"} | Passing any GitHub user as parameter, this endpoint will return **only public repos** activated on the platform. |

***

# References

 - [GitHub API](https://developer.github.com/v3/);
 - [NodeJS](https://nodejs.org/en/);
 - [Express](https://expressjs.com/pt-br/);
 - [ReactJS](https://pt-br.reactjs.org/);
 - [ReduxJS](https://redux.js.org/);
 - [Redux-SagaJS](https://redux-saga.js.org/);

***

# RoadMap (To-Do)

1. Add unit/integration tests (Jest, enzyme);
2. Implement OAuth2 authentication to access private data on GitHub;
3. Implement GraphQL to handle to the V4 of GitHub API (support to data pagination);
4. Add parameters validation on the backend (for request parameters);
5. Implement system cache control to optimize the application (Redis on the backend and useMemo - hooks for SPA);

***

# Conclusion

  I hope you enjoy the Repo Organizer, and regardless of the completion of this test, I appreciate the opportunity where I could learn even more.