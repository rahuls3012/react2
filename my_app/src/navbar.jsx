import img1 from './assets/img1.jpg'
function Navbar(props) {
    if(props.show==true){
    return (
        <div className="card">
            
            <img src={props.image} alt="" />
            <h3>{props.mname}</h3>
            <p>{props.description}</p>
        </div>
    );
}

}
export default Navbar