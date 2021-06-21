import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';


const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [search, setSearch] = useState('');


    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => {
                const {meals} = res.data;
                if(meals){
                    setMeals(meals);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [search]);


    return(
        <>
        <Navbar/>
        <br /><br /><br />
        {user ? (
            <div className="mealsContainer">
                 <div className="searchBar">
                    <input type="text" autoFocus placeholder="eg beef, pork, dessert, pasta..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="singleMeals">
                    {meals.map((single) => (
                        <div key={single.idMeal} className="mealCard">
                            <div className="image">
                                <img src={single.strMealThumb} alt={single.strMeal} />
                            </div>
                            <div className="details">
                                <p>{single.strMeal}</p>
                                    <Link to={{pathname: `/recipe/:${single.idMeal}`}}>
                                        <a href="recipe" className="utensils"><i className="fas fa-utensils"></i></a>
                                    </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            ) : (
                <div>
                    <h1>Sign In <Link to="/"> Here</Link> To View Recipes</h1>
                </div>
            )}
            <Footer/>
            </>
    )
}
export default Meals;

