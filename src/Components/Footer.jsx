import React from 'react';

const Footer = () => {
    return(
        <>
         <footer className="footer text-center">
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            nairobi
                            <br />
                            kenya
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-primary btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-primary btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Recipe App</h4>
                        <p className="lead mb-0">
                            This app is a free to use  
                            <a href="/home"> foodrecipeapp</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container text-dark"><small>Copyright © Your rectfoodapp 2020</small></div>
        </div>
        </>
    )
}

export default Footer;