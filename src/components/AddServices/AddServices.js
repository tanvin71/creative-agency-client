import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import AddServicesForm from './AddServicesForm';

const AddServices = () => {
    return (
        <div className="row">
                <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5">
                <AddServicesForm></AddServicesForm>
            </div>
        </div>
    );
};

export default AddServices;