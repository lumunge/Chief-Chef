import { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../Config/FirebaseConfig";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
	const [user] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const history = useHistory();

	const logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				localStorage.clear();
				history.push("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<nav
			className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top"
			id="mainNav"
		>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand text-light js-scroll-trigger">
						Chief Chef
					</span>
				</Link>
				<div>
					{user ? <span className="profile">Hey, {user}</span> : null}
				</div>
				<div>
					<button
						className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded ml-4"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-bars"></i>
					</button>
				</div>
			</div>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<div className="navbar-nav ml-auto">
					<Link to="/recipes">
						<span className="nav-item">Recipes</span>
					</Link>
					<Link to="/about">
						<span className="nav-item">About</span>
					</Link>
					<div>
						{user ? (
							<>
								<button className="logout" onClick={logout}>
									<i class="fas fa-power-off"></i>
								</button>
							</>
						) : null}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
