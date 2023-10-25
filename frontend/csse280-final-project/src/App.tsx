import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import { MapView } from './MapView';
import PageHeader from './PageHeader';
import ServiceList from './ServiceList';

const ExampleToast = ({ children } : {children : any}) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => {
  let root = document.getElementById('root')

  let width = window.screen.width;
  let height = window.screen.height;
  let mapWidth = (width/1.5);
  let mapHeight = height - 45;

  let renderState = () => {
    return Pages[state];
  }

  let popup = document.getElementById("serviceCategoryPopup")
  let handler = function() {
    console.log("Removing event listener and popup class");
    popup?.classList.remove("popup")
    popup?.classList.add("popped")
  };
  

  function pageOne() {
    setState(0)
    popup?.classList.remove("popped")
    popup?.classList.remove("popup")
    popup?.removeEventListener("animationend", handler, false)
  }

  function pageTwo(county_key: string) {
    console.log("Page two");
    popup = document.getElementById("serviceCategoryPopup")
    console.log(popup);
    
    console.log(county_key);
    setCounty(county_key);
    popup?.classList.add("popup")
    popup?.addEventListener("animationend", handler, false)
  }

  function pageThree(category_key: string) {
      // do api call
      setState(1)
  }

  let [state, setState] = useState(0)
  let [county, setCounty] = useState("")

  let Pages = [
    <MapView width={mapWidth} height={mapHeight} onCountyClick={pageTwo} onCategoryClick={pageThree} countyName={county} />,
    <ServiceList />,
  ]

  return (
  <div className="h-100 w-100">
    <PageHeader onLogoClick={() => pageOne()}/>
    <div className="row w-100 justify-content-center">
        { renderState() }
    </div>
  </div>
  );
}


export default App;
