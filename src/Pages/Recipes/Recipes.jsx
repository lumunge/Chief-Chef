import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";

const Meals = () => {
	const [meals, setMeals] = useState([]);
	const [user] = useState(JSON.parse(localStorage.getItem("user")));
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
			)
			.then((res) => {
				const { meals } = res.data;
				if (meals) {
					setMeals(meals);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [search]);

	return (
		<>
			{user ? (
				<div className="mealsContainer">
					<div className="searchBar">
						<input
							type="text"
							autoFocus
							placeholder="eg; beef, pork, pasta..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
						<div className="singleMeals">
							{meals.map((single) => (
								<div key={single.idMeal} className="mealCard">
									<div className="image">
										<img
											src={single.strMealThumb}
											alt={single.strMeal}
										/>
									</div>
									<div className="details">
										<p>{single.strMeal}</p>
										<Link
											to={{
												pathname: `/recipe/:${single.idMeal}`,
											}}
										>
											<a
												href="recipe"
												className="utensils"
											>
												<i className="fas fa-utensils"></i>
											</a>
										</Link>
									</div>
								</div>
							))}
						</div>
				</div>
			) : (
				<div className="defaultContainer">
					<div className="defaultContent">
						<h1>Seems you are not signed in </h1>
						<small>Sign in Here</small>
						<div className="signup">
							{" "}
							<Link to="/">
								{" "}
								<i className="fas fa-sign-in-alt"></i>{" "}
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default Meals;
