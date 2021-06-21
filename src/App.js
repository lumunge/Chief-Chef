import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MealPage from "./Pages/MealPage";
import About from "./Pages/About";
import Meals from "./Components/Meals";
import Home from "./Pages/Home/Home";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/recipes" component={Meals} />
					<Route path="/about" component={About} />
					<Route path="/recipe" component={MealPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
