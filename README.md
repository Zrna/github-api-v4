# Github API v4

## Description
Github search application using [Github API v4](https://developer.github.com/v4/).  
Search Github by given username.  
Application will show user profile with profile picture, username, email and link to Github profile. If user have some repositories, repository list will be displayed together with repository name (which is link to Github repo) and repository description.

![Github API v4](https://user-images.githubusercontent.com/22341530/80957623-d488c280-8e03-11ea-840b-4c33087ead96.gif)


## How to run
First you need to generate the Github token following steps on [this link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

On step 7. select next scopes/permissions:
```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

When you have your token, then you need to add it to the project.  
1. Go to the root of the project and create `githubToken.ts` file. In that file paste next code block and replace *YOUR_TOKEN* with previously generated token.  

```javascript
const token: string = 'YOUR_TOKEN';

export default token;

```  
2. Save changes.  

After completing the previous steps from the root of the project run next two commands and the application will start on *localhost:3000*.

1. `npm install`
2. `npm start`

## Architecture

Domain is separeted from the presentation layer of the application (*domain folder*). Domain contains code that is only imported somewhere else, nothing outside the domain folder is imported inside it.  
This type of structure is part of [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin (Uncle Bob).  

UI code is under the *src folder*. Inside the src folder is `index.tsx` which contains React code of the application.  

Assets folder - all the necessary assets goes here (images, etc.)  
Components folder - presentational components  
Containers folder - containers that are concerned with how things work and uses components from Components folder to create certain view  
Styles folder - here are defined files that serve styles globally  

The *.eslintrc.json* file contains rules that ensure the correct writing and style of code based on this application. ESLint npm package is used.

Inside the `package.json` file is application configuration for npm packages, scripts, husky and some additional information about the application.  
Scripts explanation:

- `npm start` - runs application on *localhost:3000*
- `npm build` - builds production ready code
- `npm clear:modules` - deletes node_modules 
- `npm clear:dist` - deletes dist folder
- `npm lint` - starts with checking that the code is written according to the rules defined in the *.eslintrc.json* file 
- `npm lint:fix` - fix all the errors which are find using `npm lint` script

Husky is here to prevent the commit/s if the application has eslint errors.