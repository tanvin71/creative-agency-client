import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';

const ClientService = () => {
    const [order, setOrder] =  useState([]);
    const {loggedInUser, setLoggedInUser} =  useContext(UserContext)
    useEffect(() =>  {
        fetch('https://sheltered-fjord-01575.herokuapp.com/showOrder?email=' +loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 col-sm-6 p-4 pr-5">
                <h1 className="mt-3">Ordered Services</h1>
                {
                     order.map(course => <div key={course._id} className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 my-3 d-flex justify-content-center">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img style={{ width: "50px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${course.image.img}`}  alt="" />
                                    <div className="card-body text-center">
                                        <h5 style={{ fontWeight: "600" }} className="card-title">{course.service}</h5>
                                        <p className="card-text text-secondary">{course.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ClientService;