import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const  [reviews ,setReviews] = useState([])

    useEffect(() => {
        fetch('https://sheltered-fjord-01575.herokuapp.com/getReview')
        .then(res  => res.json())
        .then(data =>  setReviews(data))
    })
    return (
        <section className="reviews-container pt-5 pb-5 mb-5  ">
            <div className="text-center mt-5 mb-5">
                <h3>Clients <span>Feedback</span> </h3>
            </div>
            <div className="row justify-content-center">
                
                    {
                    reviews.map(review => <div className="col-md-3 m-2 col-12" key={review._id}>
                            <div className="row shadow d-flex align-items-center">
                                <div className="m-5">
                                    <h3>{review.name}</h3>
                                    <p>{review.company}</p>
                                    <p>{review.description}</p>
                                </div>
                            </div>

                        </div>)
                    }
            </div>
           
        </section>
    );
};

export default Reviews;