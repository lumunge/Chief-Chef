import React from 'react';

const Meal = ({title, image, ingredients, directions, vidLink}) => {

    return(
        <div className="container">
            <h1>{title}</h1>
        <div className="meal">
                <div className="">
                    <img src={image} alt={title} />
                </div>
                <div className="meal-details">
                    <ol>
                        {ingredients}
                    </ol>
                    <p>{directions}</p>
                </div>
        </div>
            <a href={vidLink}>Video Tutorial</a>
        </div>
    )
}

export default Meal;
