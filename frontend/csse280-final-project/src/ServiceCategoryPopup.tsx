import {FaStar} from "react-icons/fa"

type CategoryProps = {
    name: string;
    onClick: Function;
}

let Category = (props: CategoryProps) => {
    return <li>
        <button type="button" className="btn btn-primary w-25" onClick={(e) => props.onClick()}>{ props.name }</button>
    </li>
}

type PopupProps = {
    onClick: Function;
}

let ServiceCategoryPopup = (props: PopupProps) => {
    return <div id="serviceCategoryPopup" className="container">
        <div className="card">
            <div className="card-header">
            Choose from the categories below and browse local programs
            </div>
            <div className="card-body container">
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <Category name="star" onClick={() => props.onClick("star")}/>
                            <Category name="star" onClick={() => props.onClick("star1")}/>
                            <Category name="star" onClick={() => props.onClick("star2")}/>
                            <Category name="star" onClick={() => props.onClick("star3")}/>
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