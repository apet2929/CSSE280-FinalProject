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
  if(root) {
    root.style.height = "100vh";
    root.style.background = "#FFEEDB"
    root.style.padding = "0";
  }
  let width = root?.clientWidth || 500;
  let height = root?.clientHeight || 600;
  let mapWidth = (width/1.5);
  let mapHeight = height * 0.9;

  let renderState = () => {
    return Pages[state];
  }

  let Pages = [
    <MapView width={mapWidth} height={mapHeight} onClick={pageTwo} />,
    <ServiceList />,
  ]

  function pageTwo(county_key: string) {
    console.log(county_key);
    setState(1)
  }

  let [state, setState] = useState(0)

  return (
  <div className="h-100 w-100">
    <PageHeader onLogoClick={() => setState(0)}/>
    <div className="row w-100 justify-content-center">
        { renderState() }
    </div>
  </div>
  );
}


export default App;
