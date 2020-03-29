import React,{useState,useEffect} from 'react';

export const LeftSide : React.FC<any> = (props : any) => {
    const setStatus = props.setStatus;
    const menu_object = [
        {id:1,title:"Record Transaction",img_link: "/img/notepad.svg"},
        {id:2,title:"Transaction Report",img_link: "/img/dashboard.svg"},
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
            <h3>Top Menu</h3>
            {/* {menus.map(menu => {
                return (
                    <div onClick={menu.id ==1 ? setTrue : setFalse}  className="py-4 mouse-hover " key={menu.id}>
                        <img src={menu.img_link} alt="" width="75" height="75"/><br/>
                        <h6   className="py-2"><b>{menu.title}</b></h6>
                    </div>
                )
            })} */}
            <div onClick={setTrue}  className={status==true? "py-4 mouse-hover bg-facebook" : "py-4 mouse-hover"} key={menus[0].id}>
                        <img src={menus[0].img_link} alt="" width="75" height="75"/><br/>
                        <h6   className="py-2"><b>{menus[0].title}</b></h6>
                    </div>
            <div onClick={setFalse}  className={status===false?  "py-4 mouse-hover bg-facebook" :"py-4 mouse-hover" } key={menus[1].id}>
                <img src={menus[1].img_link} alt="" width="75" height="75"/><br/>
                <h6   className="py-2"><b>{menus[1].title}</b></h6>
            </div>        
        </div>
    )
}