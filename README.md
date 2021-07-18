# Introduction
This is a Task Tracker app where an user can add future tasks and setup reminders. It is built with React JS.

# Acknowledgement
This repository contains learning notes and code from the [React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8).

# Installation
`npm run build`

# Run the Project
- Run the React app in dev mode: `npm start`, the web page can be viewed at `http://localhost:3000`
- Run the production built React app: `serve -s build -p [PORT]`
- Run the mock backend server: `npm run server` (backend db data will be saved in `db.json` and examined at `http://localhost:5000`)

# Course Notes
### What is React JS
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
