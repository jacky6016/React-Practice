This is a repository containing learning notes and code from the [React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8).

# Installation
`npm run build`

# Run the Project
- Run the React app in dev mode: `npm start`
- Run the production built React app: `serve -s build -p [PORT]`
- Run the mock backend server: `npm run server` (backend db will be saved in `db.json`)

# Acknowledgement

# Course Notes
What is React JS
- A frontend framework
- Single page application
- The "view" layer of the MVC application structure (Model: data, C: control/routing)
- **Reusable components** with their own state
    - Components can take in `props` (attributes): <Header title="My Title"/>
    - State can be global (or App)
    - **React Hooks**: functions that hook into the React state and lifecycle features from function components
        - `useState`, `useEffect`, `useContext`
- JSX (JavaScript Syntax Extension): dynamic markup (no need to separate markup with logic)
- Interactive UIs with Virtual DOM: update parts of the pages without re-loading
- Better performance & testing

