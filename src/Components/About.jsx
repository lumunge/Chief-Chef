import React from 'react';

const About = () => {
    return(
        <>
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">A tool much like the cook book but diverse that allows you to search for over 1000 recipies from different parts of the world with detaled intrsuctions on how to prepare a meal to servings. Enjoy</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">We welcome you to this recipe tool, have a blast.</p></div>
                </div>
                <div class="text-center mt-4 pb-4">
                    <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i class="fas fa-download mr-2"></i>
                        Free Download!
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;