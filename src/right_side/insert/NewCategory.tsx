import React , {useRef, useState, useEffect}from 'react';
import {Category, uploadCategory } from '../model/Category';
import {ServiceRecord , getTodayRecord, removeRecord} from '../model/Record';
// import { RecordRedux } from './RecordRedux';
import { useSelector, useDispatch } from 'react-redux';

export const NewCategory = (props:any) => {

    const name = useRef<HTMLInputElement>(null);
    const image = useRef<HTMLInputElement>(null);
    const price = useRef<HTMLInputElement>(null);
    const addNewCategory =  props.addCategory;
    
    const categoryShow = () => {
      //<img src="" />
        let category : Category = {
            name : name.current?.value,
            image : image.current?.value,
            price :  price.current ==  null ? 0 : parseFloat(price.current.value)
        }
        const result =  uploadCategory(category)
      
          
        result.then(_category =>{
            /**
             * _category property was set in uploadCategory
             */
                
                addNewCategory(_category)
            
            
        })
    }
    return (
        <div className="py-3 vh-100" >
            <h3>
                History
            </h3>
            <div  className="h-50 overflow-auto scrollbar border-bottom" id="style-11">
                <TodayRecordTransactionHistory/>
               
            </div>
            
            <div className="h-50 px-3 ">
                <h3 className="">
                    Category
                </h3>   
                <form>
                    <div className="form-group py-1">
                        <label className="text-left">Service Name</label>
                        <input ref={name} type="text" className="form-control" id="i1" placeholder="Wash"/>
                    </div>
                    <div className="form-group py-1">
                        <label className="text-left">Service Price</label>
                        <input ref={price} type="text" className="form-control" id="i2" placeholder="$$"/>
                    </div>
                    <div className="form-group py-1">
                        <label className="text-left">Image Representation</label>
                        <input ref={image} type="text" className="form-control" id="i3" placeholder="<link/> "/>
                    </div>
                    <br/>
                    <button className="btn btn-outline-primary" type="button" onClick={categoryShow}> Save</button>
                </form>
                
            </div>
        </div>
    )
}

export const TodayRecordTransactionHistory =() =>{
   
    const dispatch = useDispatch()
    const RecordRedux = useSelector((state :any) => state.records);
    const getInit = async () =>  {
       
        const result = await getTodayRecord();
        dispatch({type:'DEFAULTFETCH',object:result})
 
        }
        useEffect(() => {
            /**
             * component will mount
             */
            getInit()
        }, [])
        
     
        return ( 
        
            <div className="border-top">
              
                   <table className="table">
                       <thead>
                           <tr>
                               {/* <th>N</th> */}
                               <th>Service</th>
                               <th>Amount</th>
                               <th>Remove</th>
                           </tr>
                       </thead>
                        <tbody >
                            {RecordRedux.map((record:any)=> {
                                return (<RecordComponent  key={record.id} record={record}/>)
                               
                            })}
                        </tbody>
                        {/* <MyRedux/> */}
                   </table>
            </div>
         
        )
};

const RecordComponent = (props:any) => {
    const record = props.record
    const dispatch = useDispatch()
    const removeClick = async () => {

       const result =await  removeRecord(record.id);
       if ( result.status ){
        /**
         * Removed
         */
            const result = await getTodayRecord();        
            dispatch({type:'DEFAULTFETCH',object:result})
       }else{
            /**
         * Problem
         */
       }
    }
    return (
        <tr >
                {/* <td>
                    {record.id}
                </td> */}
            <td className="text-left">
                {record.category_name}
            </td>
            <td>
                {record.service_amount}
            </td>
            <td className="mouse-hover" onClick={removeClick}>
                <span className="text-primary" >X</span>
            </td>
        </tr>
    )
}


/*context
export const RecordListContext = React.createContext(()=> { alert("menghok")})
<RecordListContext.Provider value={this.sayHi}>
</RecordListContext.Provider>*/