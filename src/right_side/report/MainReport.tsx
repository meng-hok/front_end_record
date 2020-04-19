import React, {useRef } from 'react'
import {Report as ReportModel,getReportDuring} from '../model/Report';

/**
 * Main page for report
 */

const getTodayAndAfter = () => {
    console.log(`get date working`)
    let today = new Date()
    let month  =  ("0" + (today.getMonth()+1)).slice(-2);
    let date = ("0" +today.getDate()).slice(-2);
    let tmr = ("0" +(today.getDate() + 1)).slice(-2);
    let year = today.getFullYear();
    return {
        start_today : `${year}-${month}-${date}` ,
        tomorrow_end : `${year}-${month}-${tmr}`
    } 
}

const _defaultDate = {
    start : getTodayAndAfter().start_today,
    end : getTodayAndAfter().tomorrow_end
} 

/**
 * 
 * GET STARTED COMPONENT
 * 
 */
export class Report extends React.Component<{},{Reports:ReportModel[]}> {
    constructor (props:any){
        super(props)
        this.state = {
            Reports : []
        }
        this.init();
    }
    defaultDate = _defaultDate;
    changeState = (new_report : ReportModel[])=> {
        this.setState( { Reports: new_report});
    }
    init = () => {
        const result = getReportDuring(this.defaultDate.start,this.defaultDate.end)
        result.then(data => {
            this.changeState(data);
         })
        // init()
    }
    
    render(){
        return (
            <div>
                <div className="header my-3">
                    <h3>Transaction Report</h3>
                </div>
                <Upperdiv changeState={this.changeState}  />
                <ReportList  changeState={this.changeState} reports={this.state.Reports}/>
            </div>
        )
    }
}

const Upperdiv =(props : any) => {
     const start_date = useRef<HTMLInputElement>(null);
     const end_date = useRef<HTMLInputElement>(null);
     const defaultDate = _defaultDate;
     const onSearch = () => {
            /// if nothing on search error
         const result =  getReportDuring(start_date.current?.value,end_date.current?.value)
         result.then(data => {
            props.changeState(data);
         })
         
     }
    //  const getInitialState= ()=> {
    //      if(start_date.current !== null && end_date.current !== null ){
            
    //        start_date.current.value = defaultDate.start;
    //        end_date.current.value = defaultDate.end;
    //      }
      
    //  }
     
    
    //getInitialState()
    return (
      
        <div className="d-flex justify-content-end my-4">
            <input ref={start_date} className="form-control w-25" type="date" id="left_input" defaultValue={defaultDate.start} placeholder="start"/>
            
            <input ref={end_date} className="form-control w-25"  type="date" id="right_input"  defaultValue={defaultDate.end} placeholder="end"/>
            <button className="btn btn-outline-primary" onClick={onSearch}>Search</button>
        </div>
     
    )
}

const ReportList = (props : any) => {

   const reports : ReportModel[] = props.reports;
  
    const sumTotal = (reports : ReportModel[]) => {
        let data  = 0;
        for (const report  of reports) {
            console.log(report)
        //   let _report : ReportModel = JSON.parse(report);
        //   console.log(_report)
        
           data += report.total_price === undefined ? 0 :parseFloat( report.total_price);
            
          console.log(data)
        }
        /**sum total */
        console.log(data)
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
                        <th>Total Income</th>
                        
                    </tr>
               </thead>
            
                <tbody>
                    <tr></tr>
                    {reports.map(report => {
                        return ( 
                            <tr key={report.categoryId}>
                                <td>{report.categoryId}</td>
                                <td>{report.name}</td>
                                <td>{report.service_amount}</td>
                                <td className="text-right">{report.total_price} $</td>  
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
                        <th  className="text-right">
                            <h4>{sumTotal(reports).toString()} $</h4>
                        </th>
                    </tr>
                </tfoot>
            </table>
          
        </div>
    )
}
