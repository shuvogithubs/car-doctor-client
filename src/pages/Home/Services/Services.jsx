import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));


    },[])
    return (
        <div>
            <div className="text-center space-y-5">
                <p className="text-[#FF3811] text-3xl font-semibold">Services</p>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-6">
            {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;