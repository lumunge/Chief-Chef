import React from 'react';


const Meal = ({
    title,
    origin,
    image, 
    ingredient1, 
    ingredient2, 
    ingredient3, 
    ingredient4, 
    ingredient5, 
    ingredient6, 
    ingredient7,
    ingredient8, 
    ingredient9,
    ingredient10,
    ingredient11,
    ingredient12,
    ingredient13,
    ingredient14,
    ingredient15,
    ingredient16,
    ingredient17,
    ingredient18,
    ingredient19,
    ingredient20,
    directions, 
    vidLink, }) => {


    return(
        <div className="meal-container container-fluid">
            <h1>{origin} - {title}</h1>
        <div className="single-meal">
                <div className="meal-img">
                    <img src={image} alt={title} />
                </div>
                <div className="meal-details">
                    <div className="ingredients">
                        <h4>Ingredients</h4>
                            <span>{ingredient1} </span>
                            <span>{ingredient2} </span>
                            <span>{ingredient3} </span>
                            <span>{ingredient4} </span>
                            <span>{ingredient5} </span>
                            <span>{ingredient6} </span>
                            <span>{ingredient7} </span>
                            <span>{ingredient8} </span>
                            <span>{ingredient9} </span>
                            <span>{ingredient10} </span>
                            <span>{ingredient11} </span>
                            <span>{ingredient12} </span>
                            <span>{ingredient13} </span>
                            <span>{ingredient14} </span>
                            <span>{ingredient15} </span>
                            <span>{ingredient16} </span>
                            <span>{ingredient17} </span>
                            <span>{ingredient18} </span>
                            <span>{ingredient19} </span>
                            <span>{ingredient20} </span>   
                    </div>
                    <div className="directions">
                        <h4>Directions</h4>
                        <p>{directions}</p>
                    </div>
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">Video Tutorial</a>
                </div>
        </div>
        </div>
    )
}

export default Meal;


