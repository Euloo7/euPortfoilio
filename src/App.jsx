import Banner from "./Components/Banner";
import Nav from "./Components/Nav"
import Abouts from "./Components/Abouts"
import Service from "./Components/Service";

import Contacts from "./Components/Contacts";
import Footers from "./Components/Footers";
import { useEffect, useState } from "react";
import { BallTriangle } from 'react-loader-spinner'
import CardProject from "./Components/CardProject";
import Experience from "./Components/Experience";

const App = () => {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    
 setLoading(true)
 setTimeout(()=>{
   setLoading(false)
    },2000) 
    
 
   
  },[]);
  
  return (
    <>
    {
      loading? 
      <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
        <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#d946ef"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />  
      </div>
      :

      <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <Abouts/>
      <Experience/>
      <Service/>
      <CardProject/>
      <Contacts/>
      <Footers/>
    </div>
    }
    </>
  );
};

export default App;