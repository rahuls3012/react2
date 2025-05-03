import { useState } from 'react';
import img1 from './assets/img1.jpg'
function Navbar(props) {
    const [viewd,setviewd]=useState(true)
    function viewed(views){
        console.log(props.mname,"viewed",views);
        setviewd(false);
    }
   
    return (
      
      props.mname&&<div className="card">
            
            <img src={props.image} alt="" />
            <h3>{props.mname}</h3>
            <p>{props.description}</p>
            <p>{props.rating}</p>
            <p>{viewd? "watch":"already watch"}</p>
            <button onClick={()=>viewed(200)}>click</button>
            <button onClick={()=>delet(props.id)}>delete</button>
        </div>
    );
}
export default Navbar