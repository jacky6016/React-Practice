import { Link } from "react-router-dom"

// use link to avoid page reload
const About = () => {
	return (
		<div>
			<h4>Version 1.0.0</h4>
			<Link to="/">Go Back</Link>
		</div>
	)
}

export default About
