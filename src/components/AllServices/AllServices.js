import React, { useEffect, useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';

const AllServices = () => {
    const [services,  setServices] = useState([])
    useEffect(() => {
        fetch('https://sheltered-fjord-01575.herokuapp.com/allOrderedService')
        .then(res => res.json())
        .then(data  => setServices(data))
    },[])
    return (
        <div className="row"> 
            <Sidebar></Sidebar>
            <div className="col-md-10 p-3 pr-5">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary"  scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col"> Project details</th>
                            <th className="text-secondary" scope="col"> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service) =>
                            <tr>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.serviceName}</td>
                                <td>{service.text}</td>
                                <td><select>
                                    <option value="pending">pending</option>
                                    <option value="On going"> On going</option>
                                    <option value="Done">Done</option>
                                    </select></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllServices;