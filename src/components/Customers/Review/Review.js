import React from 'react';
import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://sheltered-fjord-01575.herokuapp.com/sendReview' , { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('Your review has been saved successfully')
            }
        })
    };
    return (
        <div className="style"> 
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" placeholder="Your name" className="w-75 mb-3" ref={register} />
            <input name="company" placeholder="Company's your, Designation" ref={register} className="w-75 mb-3"/>
             <br/>
            <textarea name="description" placeholder="description" cols="50" rows="8"ref={register} className="w-75 mb-3"/>
            <br/>
            <input type="submit" />
            </form>
        </div>
    );
};
export default Review;
