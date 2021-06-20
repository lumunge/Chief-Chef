import {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import '../App.css';

const MealPage = (props) => {
    const [meal, setMeal] = useState([]);

    const pathname = props.location.pathname;
    const mealId = pathname.substr(7)

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((res) => {
                const {meals} = res.data;
                console.log(meals);
                setMeal(meals);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    return(
        <>
        <Navbar/>
           <div className="meal">
               {meal.map((single) => (
                   <>
                   <div className="mealContainer">
                       <div className="mealLeft">
                                <img src={single.strMealThumb} alt={single.strMeal} />
                               <h4>Category: {single.strCategory}</h4>
                               <h4>Affiliation: {single.strArea}</h4>
                               <h4>Ingredients: </h4>
                       </div>
                       <div className="mealRight">
                           <p>{single.strInstructions}</p>
                       </div>
                   </div>
                   <div className="videoWrapper">
                   <iframe width="420" height="315" title={single.strMeal}
                       src={`https://www.youtube.com/embed/${single.strYoutube.slice(-11)}`}>
                   </iframe>
               </div>
               </>
               ))}
           </div>
        </>
    )
}

export default MealPage;