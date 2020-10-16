import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';
import MakeAdminForm from './MakeAdminForm';

const MakeAdmin = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    
    return (
        <div className="row">
                <Sidebar></Sidebar>
            <div className="col-md-10">
            <div className="d-flex justify-content-between">
                    <h2>Add Admin</h2>
                    <h4>{loggedInUser.name}</h4>
                </div>
                <MakeAdminForm></MakeAdminForm>
            </div>
        </div>
    );
};

export default MakeAdmin;