import React, { useContext } from 'react';
import'./OrderForm.css';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const OrderForm = () => {
    const {id} = useParams()
    const {service, loggedInUser} = useContext(UserContext)
    const serviceOrder = service.find(sr => sr._id === id);
    const {image, des} = serviceOrder;
    const {name, email} = loggedInUser;

    const history = useHistory();
        const handleSubmit = (e) => {
            e.preventDefault();
            const order = {...loggedInUser, service: serviceOrder.name, description: des, image: image }
            fetch('https://sheltered-fjord-01575.herokuapp.com/addAOrder', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(order)
            })
            .then(response => response.json())
            .then(data => {
                if(data) {
                    history.push('/clientService')
                }
            })
            .catch(error => {
                console.error(error)
            })
        }
    return (
        <section className="row">
            <div className="col-md-10 p-4 pr-5">
                <h3 className="mt-3">Order</h3>
                <div style={{ background: "#E5E5E5" }}>
                    <form style={{ width: "50%" }} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="Name">Name</label>
                            <input value={loggedInUser.name} type="text" className="form-control"
                                name="name"
                                placeholder="Type your name" />
                        </div>
                        <div className="form-group">
                            <label for="Email">Email</label>
                            <input value={loggedInUser.email} type="email" className="form-control"
                                name="email"
                                placeholder="Type your email" />
                        </div>
                        <div className="form-group">
                            <label for="Service">Service</label>
                            <input type="text" value={serviceOrder.name} className="form-control"
                                name="service"
                                placeholder="Service Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input value={des} type="text" className="form-control" name="des" placeholder="Description" />
                        </div>
                        <button type="submit" className="btn btn-dark text-white">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;