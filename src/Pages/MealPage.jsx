import React from 'react';
import axios from 'axios';
import Meal from '../Components/Meal';

class MealPage extends React.Component{
    state={
        activeMeal: []
    }

    componentDidMount = () => {
        const mealId = this.props.location.state.meal;
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((res) => {
                const allMeal = res.data.meals;
                console.log(allMeal);
                this.setState({
                    activeMeal: allMeal
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render(){
    const meal = this.state.activeMeal;
    return(
        <div>
           <div className="meal">
               {meal.map(oneMeal => (
                   <div>
                       <Meal
                            key={oneMeal.idMeal}
                            title={oneMeal.strMeal}
                            image={oneMeal.strMealThumb}
                            ingredients={oneMeal.strIngredient1}
                            directions={oneMeal.strInstructions}
                            vidLink={oneMeal.strYoutube}
                       />
                    </div>
               ))}
           </div>
        </div>
      )
}
}
export default MealPage;