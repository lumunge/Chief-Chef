import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./Pages/Recipe/Recipe";
import About from "./Pages/About";
import Recipes from "./Pages/Recipes/Recipes";
import Home from "./Pages/Home/Home";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
	return (
		<div className="App">
			<HashRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/recipes" component={Recipes} />
					<Route path="/about" component={About} />
					<Route path="/recipe" component={Recipe} />
				</Switch>
				<Footer />
			</HashRouter>
		</div>
	);
}
