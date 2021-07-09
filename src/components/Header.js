// using the `rafce` boilerplate from the ES7 React extension (React import deleted)
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <h1 style={{color: 'blue'}}>Demonstrating style</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

// setting default prop
Header.defaultProps = {
    title: 'Task Tracker'
}

// we will receive warning if prop type isn't same as specified
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header
