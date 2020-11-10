import React from 'react';
import './Companies.css'
import logo1 from'../../../images/logos/slack.png';
import logo2 from'../../../images/logos/google.png'
import logo3 from'../../../images/logos/uber.png';
import logo4 from'../../../images/logos/netflix.png';
import logo5 from'../../../images/logos/airbnb.png';






const Companies = () => {
    return (
        <section>
        <div className="d-flex justify-content-center row">
            <div  className="img col-6 col-md-2">
                <img src={logo1} className="img-fluid" alt=""/>
            </div>
            <div className="img col-6 col-md-2">
                <img src={logo2} className="img-fluid" alt=""/>
            </div>
            <div className="img col-6 col-md-2">
                <img src={logo3} className="img-fluid" alt=""/>
            </div>
            <div className="img col-6 col-md-2">
                <img src={logo4} className="img-fluid" alt=""/>
            </div>
            <div className="img col-6 col-md-2">
                <img src={logo5} className="img-fluid" alt=""/>
            </div>
        </div>
        </section>
    );
};

export default Companies;