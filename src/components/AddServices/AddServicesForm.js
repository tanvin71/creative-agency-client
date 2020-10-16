import React from 'react';
import { useState } from 'react';


const AddServicesForm = () => {
    const [info ,setInfo] = useState({})
    const [file ,setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit  =(e) => {
        const formData = new FormData ()
        formData.append('file',file);
        formData.append('name', info.name)
        formData.append('des', info.des)

        fetch('https://sheltered-fjord-01575.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="style"> 
            <form onSubmit={handleSubmit} style={{background:'white',paddingBottom:'80px', marginLeft:'10px'}}>
                <div className="form-group">
                    <label for="service">Service Title</label>
                    <br/>
                    <input name="name" className="w-75" onBlur={handleBlur} type="text" placeholder="Service name" />
                </div>
                <div className="form-group">
                    <label for="service">Description </label>
                    <br/>
                    <input name="des" className="w-75" onBlur={handleBlur} type="text" placeholder="descriptions" />
                </div>

                <div className="form-group">
                    <label for="upload image">Upload an image</label>
                    <br/>
                    <input className="w-75" onChange={handleFileChange} type="file" placeholder="Upload image " />
                </div>
            <button type="submit" className="mt-5 btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default AddServicesForm;