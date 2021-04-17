import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import React, {useState, useEffect} from 'react';
import '../index.css';
import Meals from './Meals';

const Main = () => {

    // initial states
    const [meals, setMeals] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    // getMeals as a side effect
    useEffect(() => {
        getMeals();
    }, [query]);


    // fetch data from provider based on $query as the search parameter
    const getMeals = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => {
                console.log(res.status);
                const allMeals = res.data.meals;
                setMeals(allMeals);
                console.log(allMeals);
                setLoading(true)
            })
            .catch(err => {
                console.log(err);
            });
    }

   
    // get input data from field
    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    // search for a specific meal
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


        {loading ? (
        
        <div className="meals">
            {meals.map(meal => (
                // geting meals and setting props
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
        ) : (
        // while getting meals show spinner else show meals
        <div className="spinner"><Spinner animation="border" /></div>
        )}
        </>
    )
}

export default Main;