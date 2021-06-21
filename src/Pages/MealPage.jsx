import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import '../App.css';
import Footer from '../Components/Footer';

const MealPage = (props) => {
    const [meal, setMeal] = useState([]);
    const [singleMeal, setSingleMeal] = useState([]);

    const pathname = props.location.pathname;
    const mealId = pathname.substr(9);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((res) => {
                const {meals} = res.data;
                setMeal(meals);
                setSingleMeal(meals[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const ingredients = [];
    for(let i=1; i<=20; i++){
        if(singleMeal[`strIngredient${i}`]){
            ingredients.push(`${singleMeal[`strMeasure${i}`]} --- ${singleMeal[`strIngredient${i}`]}`)
        }else{
            break;
        }
    }

    return(
        <>
        <Navbar/>
        <br /><br /> <br />
           <div className="mealpage">
               {meal.map((single) => (
                   <div className="single-meal">
                   <div className="mealContainer">
                       <div className="mealLeft">
                                <img src={single.strMealThumb} alt={single.strMeal} />
                               <h4>Category: <span className="subtitle">{single.strCategory} </span></h4>
                               <h4>Affiliation: <span className="subtitle"> {single.strArea}</span></h4>
                               <h4>Ingredients: </h4>
                               <ul className="ingredients">
                                   {ingredients.map((ingredient) => (
                                       <li className="list">{ingredient}</li>
                                   ))}
                               </ul>
                       </div>
                       <div className="mealRight">
                       <h4>{single.strMeal}</h4>
                           <p className="instructions">{single.strInstructions}</p>
                       </div>
                   </div>
                   <div className="videoWrapper">
                   <iframe className="iframe" title={single.strMeal}
                       src={`https://www.youtube.com/embed/${single.strYoutube.slice(-11)}`}>
                   </iframe>
               </div>
               </div>
               ))}
           </div>
           <Footer/>
        </>
    )
}

export default MealPage;