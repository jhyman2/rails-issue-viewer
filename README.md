# Twitter/Fabric Coding Challenge

###Installation
`npm install`

###Deploy
`npm start`

###Preview at localhost:8080
In a browser, navigate to `localhost:8080` to see the app.

###Test
`npm test`

###Notes about the project:
- Node v6.2.0 or later is required.
- webpack-dev-server is serving everything so this simplifies build steps and number of dependencies.
- Jest is used for testing.
- Architecture is smart containers and dumb components.
- The containers do all of the data fetching and just pass data to components.
- Components only display data - this method allows for reusable components.
- If you use Safari, please find and check 'Disable Cross-Origin Restrictions'. Otherwise, Safari will block the Github request.
- After using the app for a bit, the Github API rate limit will be exceeded and the user will have to wait a few minutes. In order to avoid this in the future, I would set my github API token or allow the developer to enter their own.

###Notes about testing:
- The warning when running `npm test` that states: "Warning: ReactComponentTreeDevtool: Missing React element for debugID 2 when building stack..." is simply an internal bug with the latest release of React and does not affect the application or tests.
- Due to time constraints, my tests are minimal. Only components (except the comments component) have tests. The container logic simply fetches data and passes it to a dumb component. In the future, I would like to add tests that will test the containers.