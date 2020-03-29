import React , {useRef}from 'react';
import {Category, uploadCategory } from '../model/Category';


export const NewCategory = (props:any) => {

    const name = useRef<HTMLInputElement>(null);
    const image = useRef<HTMLInputElement>(null);
    const price = useRef<HTMLInputElement>(null);
    const addNewCategory =  props.addCategory;
    
    const categoryShow = () => {
      
        let category : Category = {
            name : name.current?.value,
            image : image.current?.value,
            price :  price.current ==  null ? 0 : parseInt(price.current.value)
        }
        const result =  uploadCategory(category)
        console.log(result)
          
        result.then(category =>{
            /**
             * console.log("category")
                console.log(category)
                addNewCategory(result) work twice
             */
            
        })
    }
    return (
        <div className="px-4">
            <h3 className="">
                Category
            </h3>   
            <form>
                <div className="form-group py-3">
                    <label className="text-left">Service Name</label>
                    <input ref={name} type="text" className="form-control" id="i1" placeholder="Wash"/>
                </div>
                <div className="form-group py-3">
                    <label className="text-left">Service Price</label>
                    <input ref={price} type="text" className="form-control" id="i2" placeholder="$$"/>
                </div>
                <div className="form-group py-3">
                    <label className="text-left">Image Representation</label>
                    <input ref={image} type="text" className="form-control" id="i3" placeholder="<link/> "/>
                </div>
                <br/>
                <button className="btn btn-outline-primary" type="button" onClick={categoryShow}> Insert Category</button>
            </form>
        </div>
    )
}