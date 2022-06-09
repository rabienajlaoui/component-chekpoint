import React from 'react';
import {Photo} from './component/Profile/Photo'
import {FullName} from './component/Profile/FullName'
import {Address} from './component/Profile/Address' 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (

    <div className="container con m-2">
    <div className="row">
      <div className="col-12">
        <div className="card" style={{ width: "18rem" }}>
          <Photo />
          <div className="card-body">
            <FullName />
            <Address />
          </div>
        </div>
      </div>
    </div>
  </div>

    


    
  );
}

export default App;
