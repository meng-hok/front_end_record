export interface Category { 
    id? : number;
    name?: string;
    image?: string;
    price?: number
}
const GETDATA :string = "http://localhost:3001/category"
const CATEGORYUPLOADENDPOINT :string = "http://localhost:3001/category";
const CATEGORYREMOVEENDPOINT : string = "http://localhost:3001/category/remove"
const HEADERS = {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json'
  }
export const getAllCategoies  = async () => {
    console.log("hi my data")
    try {
        const result =await fetch(GETDATA);
        const json = await result.json();
        return json;
    } catch (error) {
        console.log(error)
        return [];
    }

}

export const uploadCategory = async ( _category:Category)=> {
    try {
        let category :Category;
        category = _category;
       
        const result = await fetch(CATEGORYUPLOADENDPOINT,{
            body : JSON.stringify(category),
            method :'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
             
        })
        const json = await result.json();  
        if(json.raw.length>0 ){
            category.id = json.raw[0].id;
            return category;
        }else{
            return {
                status :  false,
                description : "FAIL"
            }
        }        
    } catch (error) {
        return {
            status :  false,
            description : "FAIL"
        }
    }    
}

export const removeCategory = async (_category : Category) => {
    try {
        const res = await fetch(CATEGORYREMOVEENDPOINT,
            {
            method : "PUT",
            body : JSON.stringify(_category), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }});
        const json = await res.json()
        console.log(json)
        return json
    } catch (error) {
        console.log(error)
        return error;
    }
}