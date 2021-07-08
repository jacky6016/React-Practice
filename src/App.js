// The root App component
// JSX must return one parent component (or wrapped in <>...</>)
import Header from './components/Header'

// Using a functional component
// const App = () => {
//   return (
//     <div className='container'>
//         <Header />
//     </div>
//   )
// }

// if using class component
import React from 'react'
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}

export default App;
 