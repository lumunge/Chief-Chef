import React from 'react';
import axios from 'axios';
import Meal from '../Components/Meal';
import Navbar from '../Components/Navbar';

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
                            measure1={oneMeal.strMeasure1}
                            measure2={oneMeal.strMeasure2}
                            measure3={oneMeal.strMeasure3}
                            measure4={oneMeal.strMeasure4}
                            measure5={oneMeal.strMeasure5}
                            measure6={oneMeal.strMeasure6}
                            measure7={oneMeal.strMeasure7}
                            measure8={oneMeal.strMeasure8}
                            measure9={oneMeal.strMeasure9}
                            measure10={oneMeal.strMeasure10}
                            measure11={oneMeal.strMeasure11}
                            measure12={oneMeal.strMeasure12}
                            measure13={oneMeal.strMeasure13}
                            measure14={oneMeal.strMeasure14}
                            measure15={oneMeal.strMeasure15}
                            measure16={oneMeal.strMeasure16}
                            measure17={oneMeal.strMeasure17}
                            measure18={oneMeal.strMeasure18}
                            measure19={oneMeal.strMeasure19}
                            measure20={oneMeal.strMeasure20}
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