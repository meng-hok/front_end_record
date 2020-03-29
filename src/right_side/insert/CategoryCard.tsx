import React, { useRef } from 'react';
import {Category } from "../model/Category";
import {ServiceRecord ,saveRecord} from '../model/Record'
import { isUndefined, isNull } from 'util';
import '../../App.css';
export const CategoryCard =  (props :any ) => {
    /**
     * const category = { 
     *      id ,price , name , image
     * }
     * 
     */
    const _category = props.category;
    let inputRef = useRef<HTMLInputElement>(null);

    const onPay = () => {
        let record : ServiceRecord;
        
        record = {
            category : {
               id: _category.id , 
               price : _category.price
            },
            service_amount : parseInt(isNull(inputRef.current) ? "123" : inputRef.current.value),
        }
        
        saveRecord(record);
        
        let input = inputRef.current;
        if(input != null ){
            input.value = "1";
        }
    }
    return (
        <div className="card  m-2" >
            <div className="m-2">
            <div>
                    <b>{_category.name}</b>
                   
            </div>
                <br/>
                <img src={_category.image} className="" width ="200px" height="150px" alt="..." />
            </div>
            <div className="card-body p-2">
                <h6 className="card-title text-center">
                    <b>Price : {_category.price}</b>
                </h6>
                <input ref={inputRef} className="text-center " defaultValue="1" />
                <br/>
                <button className="mt-4 btn btn-lg btn-outline-primary" onClick={onPay}>Pay</button>
            </div>
        </div>
    )
}