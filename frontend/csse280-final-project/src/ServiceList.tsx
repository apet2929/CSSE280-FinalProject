import * as React from 'react';
import './ServiceTableData.css'
import { Service } from './csv';


type ServiceItemProps = {
    service: Service
}

const ServiceListItem = (props: ServiceItemProps) => {
    let s = props.service
    let address = `${s.address_1} ${s.address_2} ${s.city} ${s.zipcode}`
    let categoryString = Array.from(s.taxonomy_category).reduce((prev, current, index) => {
        return prev + ", " + current
    })
    return (
        <>
            <li className="card my-3 mx-3">
                <div className="row g-0">
                    <div className="col-md-10">
                        <div className="card-body">
                            <p className="card-text"><small className="text-body-secondary">{categoryString}</small></p>
                            <h5 className="card-title">{s.agency_name}</h5>
                            <p className="card-text">{s.agency_desc}</p>
                            <p className="card-text">{address}</p>
                            
                            <a href={s.service_website.toString()}>{s.service_website}</a>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <img className="img-fluid rounded-start" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
                    </div> */}
                </div>
            </li>
        </>
    );
};

const ServiceTableItem = (props: ServiceItemProps) => {
    let s = props.service
    let address = `${s.address_1} ${s.address_2} ${s.city} ${s.zipcode}`
    let categoryString = Array.from(s.taxonomy_category).reduce((prev, current, index) => {
        return prev + ", " + current
    })
    return (
        <div className="row border-top">
            <div className="col-2">{s.service_name}</div>
            <div className="col-2">{categoryString}</div>
            <div className="col-3" style={{fontSizeAdjust: "0.3"}}>{s.service_description}</div>
            <div className="col-2">{address}</div>
            <div className="col-1">{s.site_number}</div>
            <div className="col-2" style={{pageBreakAfter: "always"}}>
                <a href={s.service_website.toString()}>{s.service_website}</a>    
            </div>
        </div>
    );
};

type ServiceListProps = {
    services: Service[]
    category: string
    county: string
}

export const ServiceList = (props: ServiceListProps) => {
    let filteredServices = props.services
        .filter((service: Service) => props.category === "" || service.taxonomy_category.includes(props.category))
    let serviceItems = filteredServices
        .map((service: Service) =>  {
            return <ServiceListItem service={service} /> 
        })
    let serviceTableItems = filteredServices
        .map((service) => {
            return <ServiceTableItem service={service} />
        })
    console.log(props.services[0]);

    return <div className='p-5 overflow-scroll' style={{height: "100vh"}}>
        <h3>Services for {props.category} in {props.county} </h3>
        <div id="serviceList">
            { serviceItems }
        </div>
            
        <section id="serviceTable" className='container'>
            <div className="row">
                <div className="col-2 h4">Name</div>
                <div className="col-2 h4">Categories</div>
                <div className="col-3 h4">Description</div>
                <div className="col-2 h4">Address</div>
                <div className="col-1">Phone Number</div>
                <div className="col-2 h4">Website</div>
            </div>
            { serviceTableItems }
        </section>
    </div>
}

export default ServiceList;
                                                                                                                                                        
