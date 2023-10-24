import * as React from 'react';
import './ServiceTableData.css'

const ServiceListItem = () => {
    return (
        <>
            <li className="p-4 m-6">
                <div className="inner px-4">
                    <div className="navbar">
                        <div className="navbar-brand">
                            <img className="mx-2" width="40" height="25" src="https://in211.communityos.org/publicassets/logo.png" alt="" />
                            <p className="catagory align-middle">Catagory</p>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col">
                            <h5>Service Name</h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini.
                        </div>
                        <div className="col">
                            <h5>
                                Service IMG
                            </h5>
                        </div>
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