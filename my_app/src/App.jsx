import Navbar from './navbar'
import './App.css' 
import Rahul from './rahul';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.webp'
import img4 from './assets/img4.jpg'
function App() {

  return(
    <>

  <Navbar image={img1} mname="bigil" description="directed by atlee"/>
  <Navbar image={img2} mname="GOAT" description="directed by vk"/>
  <Navbar show={true} image={img3} mname="puli" description="directeed by lk"/>
  <Navbar show={true} image={img4} mname="master" description="directeed by lk"/>
  
    </>
  );
}

export default App
