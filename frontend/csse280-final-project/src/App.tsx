import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import { MapView } from './MapView';

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
  }
  return (
  <Container className="p-3 h-100">
    <MapView name="map world!" />
  </Container>
);
  }


export default App;
