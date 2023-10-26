import * as React from 'react';
import './ServiceTableData.css'

const ServiceListItem = () => {
    return (
        <>
            <li className="card my-3 mx-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text"><small className="text-body-secondary">Service Catagory</small></p>
                            <h5 className="card-title">Service Name</h5>
                            <p className="card-text">Service Description</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
                    </div>
                </div>
            </li>
        </>
    );
};

const ServiceList = () => {
    return <ul className='list-unstyled'>
        <ServiceListItem />
        <ServiceListItem />
    </ul>
}
export default ServiceList;
                                                                                                                                                        
