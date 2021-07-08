// using the `rafce` boilerplate from the ES7 React extension (React import deleted)
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

// setting default prop
Header.defaultProps = {
    title: 'Task Tracker'
}

// we will receive warning if prop type isn't same as specified
Header.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Header
