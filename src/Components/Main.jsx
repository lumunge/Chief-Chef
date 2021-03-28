import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../index.css';
import Meals from './Meals';

const Main = () => {

    const [meals, setMeals] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [search, setSearch] = useState('');

    useEffect(() => {
        getMeals();
    }, [query]);

    const getMeals = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => {
                console.log(res.status);
                const allMeals = res.data.meals;
                setMeals(allMeals);
                console.log(allMeals);
            })
            .catch(err => {
                console.log(err);
            });
    }

   

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return(
        <>
        <div className="searchBar">
                <form onSubmit={getSearch} className="searchForm">
                    <input type="text" placeholder="Search Meal" value={search} onChange={updateSearch} />
                    <button type="submit" className="btn btn-outline-primary">Search</button>
                </form>
            </div>
        <div className="meals">
            {meals.map(meal => (
                <div>
                    <Meals
                        key={meal.idMeal}
                        mealId={meal.idMeal}
                        image={meal.strMealThumb}
                        title={meal.strMeal}
                        category={meal.strCategory}
                        origin={meal.strArea}
                    />
                </div>
            ))}
        </div>
        </>
    )
}

export default Main;