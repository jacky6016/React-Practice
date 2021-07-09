// using the `rafce` boilerplate from the ES7 React extension (React import deleted)
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
            <Button color='blue' text='Hi' />
            <Button color='red' text='Bye' />
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
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
