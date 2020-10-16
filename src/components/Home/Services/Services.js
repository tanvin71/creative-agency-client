import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import service1 from'../../../images/icons/service1.png';
import service2 from'../../../images/icons/service2.png';
import service3 from'../../../images/icons/service3.png'
import InfoCard from '../InfoCard/InfoCard';

// const servicesData = [
//     {
//         title: 'Web & Mobile design',
//         description:"we craft stunning and amazing web ui, using a well drafted ux to fit your product ",
//         img: service1,
        
//     },
    
//     {
//         title: 'Graphic  design',
//         description:"we craft stunning and amazing web ui, using a well drafted ux to fit your product ",
//         img: service2
//     },
//     {
//         title: 'Web development',
//         description:"we craft stunning and amazing web ui, using a well drafted ux to fit your product ",
//         img: service3
//     }
// ]

const Services = () => {
    const {service ,setService} = useContext(UserContext)
    useEffect(() => {
        fetch('https://sheltered-fjord-01575.herokuapp.com/showServices')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <section className="services-container">
            <div className=" text-center mt-5 mb-5">
                <h2>provide awesome <span>services</span> </h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 ">
                    {
                        service.map(service => <InfoCard service={service}  key ={service._id}></InfoCard>)
                    }
                </div>
            </div>
            
            
        </section>
    );
};

export default Services;