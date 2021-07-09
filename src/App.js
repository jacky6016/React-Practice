// The root App component
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  return (
    // passing a prop
    <div className='container'>
        <Header />
        <Tasks />
    </div>
  )
}

export default App;
 