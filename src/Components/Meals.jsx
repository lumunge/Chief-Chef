import React from 'react';
import { Link } from 'react-router-dom';

const Meals = ({mealId, image, title, origin}) => {

    return(
            <div className="meal">
                <img className="img-fluid" src={image} alt={title} />
                <p>{origin} - {title}</p>
                <button className="btn btn-outline-primary">
                    <Link to={{
                        pathname: `/meal/:${mealId}`,
                        state: { meal: mealId}
                    }}> How To </Link>
                </button>
            </div>
    )
}
export default Meals;

