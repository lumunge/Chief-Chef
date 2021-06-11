import React from 'react';
import { Link } from 'react-router-dom';


// getting meal properties
const Meals = ({mealId, image, title, origin}) => {

    return(
            <div className="meal">
                <img className="img-fluid" src={image} alt={title} />
                <p className="font-weight-bold pt-4 text-dark">{origin} - {title}</p>
                {/* create a route to single meal based on the meal id */}
                <Link to={{
                        //assign path as meal/:00345, send state mealId
                        pathname: `/meal/:${mealId}`,
                        state: { meal: mealId}
                    }}> 
                <button className="meal-btn">
                    How To 
                </button>
                </Link>
            </div>
    )
}
export default Meals;

