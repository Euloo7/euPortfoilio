
import img from '../assets/meme.jpg'
import Aos from 'aos';
import { useEffect} from 'react';

import {Card,CardHeader,CardBody,CardFooter,Typography,Button,} from "@material-tailwind/react";

import React from 'react';
import MoralCarousel from './MoralCarousel';

const CardProject = () => {

    const [showModal, setShowModal] = React.useState(false);

        useEffect(()=>{

            Aos.init({
                easing: "ease-out-quart",
                delay:0,
                duration: 750
            })
        },[])
        return (
            <div id='Projects'className="p-20 flex flex-col items-center text-center justify-center">
              <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects Preview</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10">
              
                <div data-aos="fade-up" className="text-[15px]  pt-3 pb-4 flex flex-col justify-center lg:items-start items-center font-semibold text-fuchsia-800 rounded-2xl p-3  border-fuchsia-800 b_glow">
                <img className="rounded-1xl mb-1 shadow-slate-800" src={img} alt=""/>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                 UI/UX Review Check
                </Typography>
                <Typography className='text-white mb-4'>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
              <Button  onClick={() => setShowModal(true)} className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-1 hover:bg-slate-900 hover:text-fuchsia-500 border-fuchsia-800 rounded-lg py-2 px-2 uppercase relative overflow-hidden'>See Projects</Button>
                </div>

                <div data-aos="fade-down" className="text-[15px]  pt-3 pb-4 flex flex-col justify-center lg:items-start items-center font-semibold text-fuchsia-800 rounded-2xl p-3  border-fuchsia-800 b_glow">
                <img className="rounded-1xl mb-1 shadow-slate-800" src={img} alt=""/>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                 UI/UX Review Check
                </Typography>
                <Typography className='text-white mb-4'>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
              <Button onClick={() => setShowModal(true)} className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-1 hover:bg-slate-900 hover:text-fuchsia-500 border-fuchsia-800 rounded-lg py-2 px-2 uppercase relative overflow-hidden'>See Projects</Button>
                </div>

                <div data-aos="fade-up" className="text-[15px]  pt-3 pb-4 flex flex-col justify-center lg:items-start items-center font-semibold text-fuchsia-800 rounded-2xl p-3  border-fuchsia-800 b_glow">
                <img className="rounded-1xl mb-1 shadow-slate-800" src={img} alt=""/>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                 UI/UX Review Check
                </Typography>
                <Typography className='text-white mb-4'>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
              <Button onClick={() => setShowModal(true)}    className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-1 hover:bg-slate-900 hover:text-fuchsia-500 border-fuchsia-800 rounded-lg py-2 px-2 uppercase relative overflow-hidden'>See Projects</Button>
                </div>
            </div>

            {showModal ? (  <>

      
        

            
            
            </>
              ) : null}




          </div>
    );
};

export default CardProject;