import React, { useState } from 'react';

import './App.css';
import { MapView } from './MapView';
import PageHeader from './PageHeader';
import ServiceList from './ServiceList';
import axios from 'axios';
import { Service } from './csv'
import ServiceCategoryPopup from './ServiceCategoryPopup';


const getServicesByCounty = async (county: String) => {
  const response = await axios.get(`http://localhost:8080/${county}`);
  return response.data;
}

const App = () => {
  let root = document.getElementById('root')

  let [modalShow, setModalShow] = useState(false)
  let [state, setState] = useState(0)
  let [county, setCounty] = useState("")
  let initialState: Service[] = []
  let [services, setServices] = useState(initialState)
  let [category, setCategory] = useState("")

  let width = window.screen.width;
  let height = window.screen.height;
  let mapWidth = (width/1.5);
  let mapHeight = height - 45;
  if(width < 800) {
    mapWidth = width
  }


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
    console.log(county_key);
    setCounty(county_key);
    setModalShow(true)
  }

  function pageThree(category_key: string) {
      if(services.length == 0) {
        getServicesByCounty(county).then((data: Service[]) => {
          console.log(data);
          setServices(data)
        })
      }
      setModalShow(false)
      setCategory(category_key)
      setState(1)
  }

  let Pages = [
    <MapView width={mapWidth} height={mapHeight} onCountyClick={pageTwo} onCategoryClick={pageThree} countyName={county} />,
    <ServiceList services={services} category={category} county={county} />,
  ]

  let handleClose = (showVal: boolean) => {
    setModalShow(showVal)    
  }

  return ( 
  <div className="h-100 w-100">
    <PageHeader onLogoClick={() => pageOne()}/>
    <div className="row w-100 justify-content-center">
        { renderState() }
    </div>
    <ServiceCategoryPopup show={modalShow} setShow={handleClose} onClick={pageThree} countyName={county} />
  </div>
  );
}


export default App;
