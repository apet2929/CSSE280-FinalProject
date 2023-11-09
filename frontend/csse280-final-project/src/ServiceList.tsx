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

let getData = async (county: String) => {
    let response = await fetch(`/${county}`)
    console.log(response);
    return await response.json()
}

type ServiceListProps = {}
class ServiceList extends React.Component {
    constructor(props: ServiceListProps){
        super(props)
        this.state = {
            services: []
        }
    }

    componentDidMount(): void {
        getData("Lake").then((services) => {
            console.log(services);
            
            this.setState({
                services: services
            })
        })
    }

    render(): React.ReactNode {
        return <ul className='list-unstyled'>
                    Hello world
                </ul>
    }
}

// const ServiceList = () => {
//     return <ul className='list-unstyled'>
//         <ServiceListItem />
//         <ServiceListItem />
//     </ul>
// }
export default ServiceList;
                                                                                                                                                        
