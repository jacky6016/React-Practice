// The root App component
import Header from './components/Header'

const App = () => {
  return (
    // passing a prop
    <div className='container'>
        <Header title='Hello' />
    </div>
  )
}

export default App;
 