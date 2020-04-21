import React , {useState, Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { LeftSide } from './left_bar/left_side';
import { RightSide } from './right_side/RightScreen';

/**
 * LEFT SIDE 
 * RIGHT SIDE
 *        REPORT 
 *        INSERT 
 *            CATEGORY_CARD
 *            NEW_CATEGORY
 */

const App = ()=> {

  const [index,setIndex] = useState({status : true});
  
  const setMyStatus = ( stt : boolean) => {
   
    setIndex(index => {
      
      const new_index = { status: stt};
      
    
      return new_index
    })
  }

  
    return (
      <div className="App container-fluid ">
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Hanuman&family=Montserrat&family=Roboto&display=swap" rel="stylesheet"></link>
        <div className="d-flex min-vh-100">
          <div className="w-10 border-right">
            <LeftSide setStatus={setMyStatus} active={index}/>
            
          </div>
          <div className="w-90 ">
            
            <RightSide status={index}/>
          </div>
        </div>
      </div>
    );

  
}

export default App;
