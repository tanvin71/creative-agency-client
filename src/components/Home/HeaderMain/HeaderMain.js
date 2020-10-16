import React from 'react';
import img from '../../../images/logos/Frame.png'

const HeaderMain =() => {
    return (
        <main  style={{overflowX:'hidden'}} className="row d-flex align-items-center">
            <div className="col-12 col-md-4 offset-1 align-self-center">
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Nisi mollitia voluptatum at amet qui reiciendis.</p>
                <button className="btn btn-dark text-white">Hire us</button>
            </div>
            <div className=" col-12 col-md-6 text-align-right">
                <img src={img} className="img-fluid " alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;