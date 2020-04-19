import React, { useRef } from 'react';
import {ServiceRecord ,saveRecord, getTodayRecord} from '../model/Record'
import {removeCategory} from '../model/Category'
import '../../App.css';
import { isNull } from 'util';
import { useDispatch } from 'react-redux';
export const CategoryCard =  (props :any ) => {
    /**
     * const category = { 
     *      id ,price , name , image
     * }
     * 
     */
    const _category = props.category;
    let inputRef = useRef<HTMLInputElement>(null);
    const removeByid = props.remove;
    const dispatch = useDispatch();
    const getInit = async () =>  {
       
        const result = await getTodayRecord();
        dispatch({type:'DEFAULTFETCH',object:result})

    }
    const onPay = () => {
        let record : ServiceRecord;
        
        record = {
            category : {
               id: _category.id , 
               price : _category.price
            },
            service_amount : parseInt(isNull(inputRef.current) ? "0" : inputRef.current.value),
        }
        
        const result = saveRecord(record);
        result.then(data => {
            if (data.status === true) {
              /* console.log(`Im data body`)
                console.log(data.body.raw[0].id)
                dispatch({type:"INSERT",object : {id: data.body.raw[0].id,category_name : _category.name , service_amount :record.service_amount }})*/
                getInit()
            }
        })
        let input = inputRef.current;
        if(input != null ){
            input.value = "1";
        }
    }

    const removeCurrentCategory = () => {
       const pro_category =  removeCategory(_category);
       pro_category.then(category => {
           if(category.id !== undefined){
                removeByid(category.id);
           }
       }).catch(err => {
           console.log(err)
       })
    }
    return (
        <div className="card  m-2 rounded" >
            <div className="m-2">
            <div >
                {/* <b className=" text-center">{_category.name}</b> */}
                <p className=" text-right mb-0" onClick={removeCurrentCategory}><sup className="mouse-hover">X</sup></p>
                <b className=" text-center text-uppercase">{_category.name}</b>
            </div>
                <br/>
                <img src={_category.image} className="" width ="200px" height="150px" alt="..." />
            </div>
            <div className="card-body p-2">
                <h6 className="card-title text-center">
                    <b>{_category.price} $</b>
                </h6>
                <input ref={inputRef} className="text-center " defaultValue="1" />
                <br/>
                <button className="mt-4 btn btn-outline-primary" onClick={onPay}>Add</button>
            </div>
        </div>
    )
}