import React from 'react';

const Meal = ({image, title, origin}) => {
    return(
            <div className="meal">
                <img className="img-fluid" src={image} alt={title} />
                <p>{origin} : {title}</p>
                <button className="btn btn-outline-primary">How To</button>
            </div>
    )
}
export default Meal;
