import React from 'react';
import Review from '../Customers/Review/Review';
import Sidebar from '../Shared/Sidebar/Sidebar';

const OrderReview = () => {
    return (
        <div className="row">
                <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5">
                <Review></Review>
            </div>
        </div>
    );
};

export default OrderReview;