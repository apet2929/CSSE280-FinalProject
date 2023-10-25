import {FaStar} from "react-icons/fa"

type CategoryProps = {
    name: string;
}

let Category = (props: CategoryProps) => {
    return <li>
        <button type="button" className="btn btn-primary w-25">{ props.name }</button>
    </li>
}

let ServiceCategoryPopup = () => {
    return <div className="container">
        <div className="card">
            <div className="card-header">
            Choose from the categories below and browse local programs
            </div>
            <div className="card-body container">
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <Category name="star" />
                            <Category name="star" />
                            <Category name="star" />
                            <Category name="star" />
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li>Hi 2</li>
                            <li>Hi 2</li>
                            <li>Hi 2</li>
                            <li>Hi 2</li>
                        </ul>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
}

export default ServiceCategoryPopup