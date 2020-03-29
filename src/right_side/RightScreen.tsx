
import React,{useState} from 'react';
import $ from 'jquery';
import { CategoryCard } from './insert/CategoryCard';
import {Category, getAllCategoies} from './model/Category';
import { NewCategory } from './insert/NewCategory';
import { ReactComponent } from '*.svg';
import { throws } from 'assert';
import { Report } from './report/MainReport';

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
 
export class Insert extends React.Component<{},{categories :Category[]}> {
    constructor (props:any){
        super(props)
        this.state = {
            categories :[]
        }
        
       
    }
   
   componentDidMount(){
       console.log("compoentn that call")
       this.initializeState()
   }
    componentDidUpdate(){
        
    }
    initializeState = () => {
        const data = getAllCategoies();
        data
            .then(category=> {
               if  (category.length ){
                    // this.setState(state => {
                    //     console.log(state)
                    //     state.categories.push(category);
                    //     return state
                    // })
                    console.log("working when")
                    this.setState({categories :category })
               }else{
                   console.log(`non of category is found`)
               }
            })
            .catch(err => {
                console.log(err)
                console.log(`non of category is found`)
            })
        console.log("fetch te")
        console.log( this.state)
    }
   
    addNewCategory = (category:Category) => {
        this.setState(state => {
            //s
            state.categories.push(category);
            return state;
        })
    }
    /**
     * loop through
     */
    render(){

        return (
            <div className="content  d-flex">
                <div className="mt-4 w-75 d-flex flex-wrap justify-content-around ">
                    {this.state.categories.map(category => {
                        return (
                            <CategoryCard key={category.id} category={category}/>
                        )
                    })}
                </div>
                <div className="w-25 insertion border-left">
                    <NewCategory addCategory={this.addNewCategory}/>
                    
                </div>
                
            </div>
        )
        
    }
}
 

