import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../Config/FirebaseConfig";
import { GoogleProvider } from "../../Config/AuthMethods";
import Auth from "../../Services/Auth";
import "./Home.css";

const Home = () => {
	const history = useHistory();

	const SignIn = async (provider) => {
		await Auth(provider);
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				localStorage.setItem('user', JSON.stringify(user))
				history.push("/recipes");
                console.log(user);
			} else {
				console.log("Please Sign Up");
			}
		});
		// eslint-disable-next-line
	}, []);

	return (
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
	);
};

export default Home;
