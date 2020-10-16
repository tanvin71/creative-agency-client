import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from'../../Shared/Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className="row">
                <Sidebar></Sidebar>
            <div className="col-md-10">
                <OrderForm></OrderForm>
            </div>
        </div>
    );
};

export default OrderList;