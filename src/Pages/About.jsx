import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
    return(
        <>
        <Navbar/>
        <div className="about">
            <br/>
            <br/>
            <br/>
            <h1>About Food Recipes App</h1>
            <div>
                <p>A free web tool that enables you to search for recipes for over 1000+ foods and their ingredients, preparation methods and country of origin.</p>
            </div>
        </div>
        </>
    )
}

export default About;