import { Link } from "react-router-dom"

// use link to avoid page reload
const Footer = () => {
	return (
		<footer>
			<p>Copyright &copy; 2021</p>
			<Link to="/about">About</Link>
		</footer>
	)
}

export default Footer
