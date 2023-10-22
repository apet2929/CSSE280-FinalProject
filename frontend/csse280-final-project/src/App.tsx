import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import { MapView } from './MapView';
import PageHeader from './PageHeader';

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
  let mapWidth = (width/2) * 0.9;
  let mapHeight = height * 0.9;

  return (
  <div className="container-fluid h-100 w-100">
    <PageHeader />
    <div className="row w-100 justify-content-center">
      <div className="col-md-3 p-0">
        hello
      </div>
      <div className="col-md-6 p-0">
        <MapView width={mapWidth} height={mapHeight} />
      </div>
      <div className="col-md-3 p-0">
        world
      </div>
    </div>
    
  </div>
  );
}


export default App;
