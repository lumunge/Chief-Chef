import React from 'react';

const Meal = ({title, image, ingredients, directions, vidLink}) => {

    return(
        <div className="container">
            <h2>A Meal Here</h2>
        <div className="meal">
                <h1>{title}</h1>
                <img src={image} alt={title} />
                <div className="ingredients">
                    <ul>
                       {ingredients}
                    </ul>
                </div>
                <div className="directions">
                    <p>{directions}</p>
                </div>
                <a href={vidLink}>Video Tutorial</a>
        </div>
        </div>
    )
}

export default Meal;
