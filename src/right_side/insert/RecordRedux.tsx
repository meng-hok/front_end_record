// import React from 'react';
// import {useSelector,useDispatch} from 'react-redux';
// import { getTodayRecord, ServiceRecord } from '../model/Record';

//type RecordRedux = {records  : Promise<ServiceRecord[]> | any}
//const result =getTodayRecord()
export const counterRecord =  
    (state = {records : [0]} ,action : {type :string,object : any} ) => {
            switch(action.type){
                case 'DEFAULTFETCH': 
                    
                    state.records = action.object
                    return state;
                case 'INSERT':
                    console.log("INSERT WORKING")
                    // state.records;
                    const new_state = {records : [...state.records,action.object]};
                    // new_state.records.push(action.object)
                    return new_state;    
                default: 
                        console.log("backtoempty")
                     return {records : [] }
       
            }
    }

export const insert = {
    type : 'INSERT', test : 'hahahha'
}

export const remove = {
    type : 'REMOVE'
}

