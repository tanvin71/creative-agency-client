import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import {faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { useState } from 'react';
const Sidebar = () => {
    
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)

    useEffect(() => {
        fetch(`https://sheltered-fjord-01575.herokuapp.com/admin?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data=> {
            if(data) {
                const adminUser = {...loggedInUser};
                adminUser.setUser = true;
                setLoggedInUser(adminUser);
            }
            else {
                const adminUser = {...loggedInUser}
                adminUser.setUser = false;
                setLoggedInUser(adminUser)

            }
        })
    },[])

    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "300px" }}>
        <Link to="/">
            <img height="47px" width="150px" src={logo} alt="" />
        </Link> 
         <ul className="list-unstyled mt-5">
             
             {
                 loggedInUser.setUser ?
            <div>
                <li>
                    <Link className="text-dark" to="/adminService">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-dark" to="/addService">
                        <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-dark" to="/makeAdmin">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </div>
            :
             <div>
                <li>
                    <Link className="text-dark" to="/order">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-dark" to="/clientService">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link className="text-dark" to="/review">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
             </div>
             
              } 
         </ul>
     </div>
    );
};

export default Sidebar;