import React, {useState, useRef ,useEffect} from 'react'
import {static_data,Report as ReportModel,getReportDuring} from '../model/Report';
import { inherits } from 'util';

/**
 * Main page for report
 */
/*
export const Report :React.FC =  () => {

    const [Reports, setReports] = useState<ReportModel[]>();
    
    const changeState = (new_report : ReportModel[])=> {
        setReports(new_report);
    }
    const init = () => {
        const result = getReportDuring('2020-03-01','2020-03-30')
        result.then(data => {
            changeState(data);
         })
        // init()
    }
    
    return (
        <div>
            <div className="header my-3">
                <h3>Transaction Record</h3>
            </div>
            <Upperdiv changeState={changeState} />
            <ReportList  changeState={changeState} reports={Reports}/>
        </div>
    )
}
*/

export class Report extends React.Component<{},{Reports:ReportModel[]}> {
    constructor (props:any){
        super(props)
        this.state = {
            Reports : []
        }
        this.init();
    }
    
    changeState = (new_report : ReportModel[])=> {
        this.setState( { Reports: new_report});
    }
    init = () => {
        const result = getReportDuring('2020-03-29','2020-03-30')
        result.then(data => {
            this.changeState(data);
         })
        // init()
    }
    
    render(){
        return (
            <div>
                <div className="header my-3">
                    <h3>Transaction Record</h3>
                </div>
                <Upperdiv changeState={this.changeState} />
                <ReportList  changeState={this.changeState} reports={this.state.Reports}/>
            </div>
        )
    }
}
const Upperdiv =(props : any) => {
     const start_date = useRef<HTMLInputElement>(null);
     const end_date = useRef<HTMLInputElement>(null);
     const onSearch = () => {
        //  console.log(start_date.current?.value)
        //  console.log(end_date.current?.value)
         const result =  getReportDuring(start_date.current?.value,end_date.current?.value)
         result.then(data => {
            props.changeState(data);
         })
         
     }
    return (
        <div className="d-flex justify-content-end my-4">
            <input ref={start_date} className="form-control w-25" type="date" defaultValue="2020-03-01" placeholder="start"/>
            
            <input ref={end_date} className="form-control w-25"  type="date" defaultValue="2020-03-31"  placeholder="end"/>
            <button className="btn btn-outline-primary" onClick={onSearch}>Search</button>
        </div>
     
    )
}

const ReportList = (props : any) => {

   const reports : ReportModel[] = props.reports;
  
//    useEffect(() =>{
//        const result = getReportDuring('2020-03-01','2020-03-30')
//         result.then(data => {
//             props.changeState(data);
//          })
//    }, [props] );
    // const initializeState = () => {
    //     const result = getReportDuring('2020-03-01','2020-03-30')
    //             result.then(data => {
    //                 props.changeState(data);
    //              })
    // }
    //initializeState();
    const sumTotal = (reports : ReportModel[]) => {
        let data  = 0;
       
        
        return data;
    }

    return (
        <div className="my-4 py-4">
            <table className="table">
               <thead>
                <tr>
                        <th>N*</th>
                        <th>Service</th>
                        <th>Amount</th>
                        <th>Total</th>
                        
                    </tr>
               </thead>
            
                <tbody>
                    <tr></tr>
                    {reports.map(report => {
                        return ( 
                            <tr>
                                <td>{report.categoryId}</td>
                                <td>{report.name}</td>
                                <td>{report.service_amount}</td>
                                <td>{report.total_price}</td>  
                            </tr>
                        )
                    }) }
                </tbody>
                <tfoot>
                    <tr>
                        <th><h3>Total</h3></th>
                        <th></th>
                        <th>
                            
                        </th>
                        <th>
                            <h4>0000</h4>
                        </th>
                    </tr>
                </tfoot>
            </table>
          
        </div>
    )
}
