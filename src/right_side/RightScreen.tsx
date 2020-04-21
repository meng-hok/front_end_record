
import React, { useContext } from 'react';
import { CategoryCard } from './insert/CategoryCard';
import {Category, getAllCategoies} from './model/Category';
import { NewCategory } from './insert/NewCategory';

import { Report } from './report/MainReport';
import { createStore } from 'redux';
import { counterRecord } from './insert/RecordRedux';
import { Provider } from 'react-redux';
export const RightSide : any = (props: any) => {
        
        const index  = props.status;
        console.log(index)
        return (
            <div >
                {index.status === true ? 
                <Insert/> :
                <Report/>}
            
            </div>
         );
    
}
/**
const dataStatic  :Category[] = [
    { id : 1, name: "Motor", image: "https://cdn.dribbble.com/users/729829/screenshots/3859750/evening-ride.png", price: 123},
    { id : 2, name: "Oil", image: "https://cdn.dribbble.com/users/46743/screenshots/2454222/creativefuel.jpg", price: 123}
]; 

 * Main page for insert
 */
const records = createStore(counterRecord);
export class Insert extends React.Component<{},{categories :Category[]}> {
    constructor (props:any){
        super(props)
        this.state = {
            categories :[]
        }
        
       
    }
   
   componentDidMount(){
      
       this.initializeState()
   }
    componentDidUpdate(){
        
    }
    initializeState = () => {
        const data = getAllCategoies();
        data
            .then(category=> {
               if  (category.length ){
                  
                    this.setState({categories :category })
               }else{
               
               }
            })
            .catch(err => {
                console.log(err)
              
            })
     
        console.log( this.state)
    }
   
    addNewCategory = (category:Category) => {
        this.setState(state => {
            //s
            const _cateogries = state.categories;
            // state.categories.push(category);
            return { categories: [..._cateogries , category]};
        })
        
    }

    removeCategoryById = (cur_id :number) => {
        // this.setState(state  => {
           // eslint-disable-next-line array-callback-return
        //    const cur_category = state.categories;
        //     if(state.categories !== undefined) {

        //         const category = cur_category.map(category=> {
        //             if(category.id !== cur_id){
        //                 return category;
        //             }
        //        });
        //        return {categories : [category]};
        //     }
           this.initializeState()
          
        // })
    }
    /**
     * loop through
     */
    // recordMethod = useContext(RecordListContext);
    render(){

        return (
            <Provider store={records}>
                <div className="content  d-flex">
                    <div className="mt-4 w-75 d-flex flex-wrap justify-content-around ">
                        {this.state.categories.map(category => {
                            return (
                                <CategoryCard key={category.id} category={category} remove={this.removeCategoryById}/>
                            )
                        })}
                    </div>
                    <div className="w-25 insertion border-left">
                        <NewCategory addCategory={this.addNewCategory}/>
                        
                    </div>
                    {/* <button onClick={this.recordMethod}>click</button> */}
                </div>  
            </Provider>
        )
        
    }
}
 

