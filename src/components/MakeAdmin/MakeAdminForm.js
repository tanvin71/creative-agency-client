import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const MakeAdminForm = () => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const [admin, setAdmin] = useState({})
    const handleBlur = (e) => {
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)
    }
    const handleSubmit  =(e) =>  {
        e.preventDefault();
        fetch('https://sheltered-fjord-01575.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
    }
    return (
        <div className="style">
            <form onSubmit={handleSubmit} style={{background:'white',paddingBottom:"50px",borderRadius:"5px"}}>
            <input name="email" placeholder="email" onBlur={handleBlur} className="w-75 mb-3"  />
            <input name="password" placeholder="Your password" onBlur={handleBlur}className="w-75 mb-3" />
            <br/>
            <input type="submit" className='mt-4 btn btn-success'/>
            </form>
        </div>
    );
};

export default MakeAdminForm;