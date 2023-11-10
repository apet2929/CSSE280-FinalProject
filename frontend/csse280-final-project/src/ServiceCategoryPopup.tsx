import { FaStar } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

type CategoryProps = {
  name: string;
  onClick: Function;
};

let Category = (props: CategoryProps) => {
  // return <li>
  //     <button type="button" className="btn btn-primary w-25" onClick={(e) => props.onClick(props.name)}>{ props.name }</button>
  // </li>
  return (
    <button
      type="button"
      className="btn btn-primary mx-4 my-2"
      onClick={(e) => props.onClick(props.name)}
    >
      {props.name}
    </button>
  );
};

/*
<div id="serviceCategoryPopup" className="container p-0">
        <div className="card categoryCard">
            <div className="card-header">
            Choose from the categories below and browse programs local to {props.countyName}
            </div>
            <div className="card-body text-center container">
                    <Category name="Basic Needs" onClick={props.onClick}/>
                    <Category name="Consumer Services" onClick={props.onClick}/>
                    <Category name="Criminal Justice and Legal Services" onClick={props.onClick}/>
                    <Category name="Education" onClick={props.onClick}/>
                    <Category name="Environment and Public Health/Safety" onClick={props.onClick}/>
                    <Category name="Health Care" onClick={props.onClick}/>
                    <Category name="Income Support and Employment" onClick={props.onClick}/>
                    <Category name="Individual and Family Life" onClick={props.onClick}/>
                    <Category name="Mental Health and Substance Use Disorder Services" onClick={props.onClick}/>
                    <Category name="Organizational/Community/International Services" onClick={props.onClick}/>
            </div>
        </div>
    </div>
*/
type PopupProps = {
  show: boolean;
  setShow: Function;
  onClick: Function;
  countyName: string;
};

function ServiceCategoryPopup(props: PopupProps) {
  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  console.log(props.countyName);
  
  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose from the categories below and browse programs local to { props.countyName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card categoryCard">
            <div className="card-body text-center container">
              <Category name="Basic Needs" onClick={props.onClick} />
              <Category name="Consumer Services" onClick={props.onClick} />
              <Category
                name="Criminal Justice and Legal Services"
                onClick={props.onClick}
              />
              <Category name="Education" onClick={props.onClick} />
              <Category
                name="Environment and Public Health/Safety"
                onClick={props.onClick}
              />
              <Category name="Health Care" onClick={props.onClick} />
              <Category
                name="Income Support and Employment"
                onClick={props.onClick}
              />
              <Category
                name="Individual and Family Life"
                onClick={props.onClick}
              />
              <Category
                name="Mental Health and Substance Use Disorder Services"
                onClick={props.onClick}
              />
              <Category
                name="Organizational/Community/International Services"
                onClick={props.onClick}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceCategoryPopup;
