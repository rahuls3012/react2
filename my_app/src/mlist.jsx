import Navbar from "./navbar";
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.webp'
import img4 from './assets/img4.jpg'
import { useState } from "react";
function Mlist(){
    const [movies,setmovies]=useState([
        {
            id:1,
            image:img1,
           mname:"bigil",
           rating:5,
         description:"directed by atlee"},
         { id:2,
            image:img2,
           mname:"GOAT",
           rating:4,
           description:"directed by vk"},
           {
            id:3,
            image:img3,
            mname:"puli",
            rating:3,
            description:"directed by lk"
           },
           {
            id:4,
            image:img4,
            mname:"master",
            rating:2,
            description:"directed by lk"
           }
 
        
    ])
    function deleted(id){
        const nmovies=movies.filter((umovies)=>umovies.id !=id);
        setmovies(nmovies);

    }
    movies.sort((x,y)=>x.rating-y.rating);
    const moviesli=movies.map((movies,id) =><Navbar id={movies.id} mname={movies.mname} image={movies.image} description={movies.description} rating={movies.rating} delet={deleted} />)
    return(
        <>
        {moviesli}
        </>
    );
    
}
export default Mlist