// using the `rafce` boilerplate from the ES7 React extension (React import deleted)
// props can be de-structured into parameters {title}
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

export default Header
