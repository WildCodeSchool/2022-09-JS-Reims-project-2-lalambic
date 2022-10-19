## Concept

Lalambic is a cocktail catalog application developed with React JS.
This application aims to support the user in the creation of cocktails.

## Date

We have been in training since 1 month at the Wild Code School,
We have six weeks to do the catalog project "Lalambic".

## Setup & Use

Used Technologies :
HTML
CSS
JAVASCRIPT
REACT JS
GIT

## Contributors

José Alves
Farid Himeur
Jessy Hazart
Louen Maginot
Lucie Froissart
Olivier Lopez

## Linkedin 
<https://www.linkedin.com/in/olivier-lopez-432868251>
<https://www.linkedin.com/in/jessy-hazart3250>
<https://www.linkedin.com/in/lucie-froissart-171b60246>
<https://www.linkedin.com/in/jos%C3%A9-alves-5195b922b>
<https://www.linkedin.com/in/louen-maginot-a81222206>
<https://www.linkedin.com/in/farid-himeur>

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
