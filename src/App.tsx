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
      
      console.log(new_index)
      return new_index
    })
  }

  
    return (
      <div className="App container-fluid ">
        <div className="row vh-100">
          <div className="col-2 border">
            <LeftSide setStatus={setMyStatus} active={index}/>
            
          </div>
          <div className="col-10 border">
            
            <RightSide status={index}/>
          </div>
        </div>
      </div>
    );

  
}

export default App;
