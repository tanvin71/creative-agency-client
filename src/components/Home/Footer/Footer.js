import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container ">
            <div className="two-div row d-flex justify-content-around">
                <div className="col-md-4 align-self-center">
                    <h2>Let us handle your <br/> project, professionally</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, hic.</p>
                </div>
                <div className="footer-form mt-5 col-12 col-md-6">
                    <form action="">
                        <input type="email" placeholder="Your email" className="w-75 mb-2"/>
                        <input type="text" className="w-75 mb-2" placeholder="Your company/Your name"/>
                        <textarea name="" id="" cols="50" rows="10">Your message</textarea>
                        <br/>
                        <button className="btn btn-dark text-white"> send</button>
                    </form>
                </div>
            </div>
            
            <div className="text-center pb-3 mt-5">
                <p>Copyright orange labs 2020</p>
            </div>
            
            
        </div>
    );
};

export default Footer;