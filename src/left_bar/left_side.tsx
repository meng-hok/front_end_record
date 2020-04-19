import React,{useState} from 'react';

export const LeftSide : React.FC<any> = (props : any) => {
   
    const menu_object = [
        {id:1,title:"Transaction",img_link: "/img/notepad.svg"},
        {id:2,title:"Report",img_link: "/img/dashboard.svg"},
        // {id:3,title:"Insertion",img_link: "https://image.flaticon.com/icons/svg/2736/2736648.svg"}
    ] 
   
    const setStt = props.setStatus;
    const [menus, setMenu ] = useState(menu_object);
    const status = props.active;
    const setTrue = () => {
      
        setStt(true)
    }
    const setFalse = () => {
        setStt(false)
    }
    console.log(status)
    return (
        <div className="mt-2" >
            <h3 className="py-2">Menu</h3>
            <div onClick={setTrue}  className={status==true? "py-4 mouse-hover bg-facebook" : "py-4 mouse-hover"} key={menus[0].id}>
                        <img src={menus[0].img_link} alt="" width="50" height="50"/><br/>
                        <h6   className="py-2"><b>{menus[0].title}</b></h6>
                    </div>
            <div onClick={setFalse}  className={status===false?  "py-4 mouse-hover bg-facebook" :"py-4 mouse-hover" } key={menus[1].id}>
                <img src={menus[1].img_link} alt="" width="50" height="50"/><br/>
                <h6   className="py-2"><b>{menus[1].title}</b></h6>
            </div>        
        </div>
    )
}