import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "./Config/FirebaseConfig";
import { GoogleProvider } from "./Config/AuthMethods";
import Auth from "./Services/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./Pages/Recipe/Recipe";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes/Recipes";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
	const history = useHistory();

	const SignIn = async (provider) => {
		await Auth(provider);
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				localStorage.setItem("user", JSON.stringify(user));
				history.push("/recipes");
				console.log(user);
			} else {
				console.log("Please Sign Up");
			}
		});
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="home">
					<div className="title">
						<h3>Hello Friend, Want To try Some New Recipes ?</h3>
						<small>Click on google to begin</small>
					</div>
					<div className="buttonContainer">
						<button
							className="google"
							onClick={() => SignIn(GoogleProvider)}
						>
							<i class="fab fa-google"></i>
						</button>
					</div>
				</div>
				<Switch>
					<Route path="/recipes" component={Recipes} />
					<Route path="/about" component={About} />
					<Route path="/recipe" component={Recipe} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}
