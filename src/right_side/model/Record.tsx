import { Category } from "./Category";
import { stringify } from "querystring";
import { METHODS } from "http";

export type ServiceRecord = {
    id? : number;
    service_amount : number;
    category : Category;
}

let upload_endpoint :string = "http://localhost:3001/record/post";
export const saveRecord =async (record:ServiceRecord) =>  {
   
    try {
        let serviceRecord :ServiceRecord;
        serviceRecord = record;
        const result = await fetch(upload_endpoint,{
            body : JSON.stringify(serviceRecord),
            method :'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
             
        })
        const json = await result.json();  
        if(json.raw.length>0 ){
            return "ok"
        }else{
            return "fail"
        }        
    } catch (error) {
        return "fail"
    }       
}

