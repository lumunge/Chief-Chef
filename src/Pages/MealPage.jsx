import React from 'react';
import axios from 'axios';
import Meal from '../Components/Meal';
import Navbar from '../Components/Navbar';

class MealPage extends React.Component{
    state={
        activeMeal: [],
        loading: false
    }

    componentDidMount = () => {
        const mealId = this.props.location.state.meal;
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((res) => {
                const allMeal = res.data.meals;
                console.log(allMeal);
                this.setState({
                    activeMeal: allMeal,
                    loading: true
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
    const meal = this.state.activeMeal;
    return(
        <>
        <Navbar/>
           <div className="meal">
               {meal.map(oneMeal => (
                   <div>
                       <Meal
                            key={oneMeal.idMeal}
                            title={oneMeal.strMeal}
                            origin={oneMeal.strArea}
                            image={oneMeal.strMealThumb}
                            ingredient1={oneMeal.strIngredient1}
                            ingredient2={oneMeal.strIngredient2}
                            ingredient3={oneMeal.strIngredient3}
                            ingredient4={oneMeal.strIngredient4}
                            ingredient5={oneMeal.strIngredient5}
                            ingredient6={oneMeal.strIngredient6}
                            ingredient7={oneMeal.strIngredient7}
                            ingredient8={oneMeal.strIngredient8}
                            ingredient9={oneMeal.strIngredient9}
                            ingredient10={oneMeal.strIngredient10}
                            ingredient11={oneMeal.strIngredient11}
                            ingredient12={oneMeal.strIngredient12}
                            ingredient13={oneMeal.strIngredient13}
                            ingredient14={oneMeal.strIngredient14}
                            ingredient15={oneMeal.strIngredient15}
                            ingredient16={oneMeal.strIngredient16}
                            ingredient17={oneMeal.strIngredient17}
                            ingredient18={oneMeal.strIngredient18}
                            ingredient19={oneMeal.strIngredient19}
                            ingredient20={oneMeal.strIngredient20}
                            directions={oneMeal.strInstructions}
                            vidLink={oneMeal.strYoutube}
                       />
                    </div>
               ))}
           </div>
        </>
      )
}
}
export default MealPage;