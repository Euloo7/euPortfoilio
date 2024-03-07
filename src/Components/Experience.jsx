import { useEffect } from 'react';
import {Typography,} from "@material-tailwind/react";
import Aos from 'aos';

const Experience = () => {
    useEffect(()=>{

        Aos.init({
            easing: "ease-out-quart",
            delay:0,
            duration: 750
        })
    },[])
    return (
        <div id='Services' className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Work Experience</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20">
            
               <div data-aos="fade-up" className="text-[15px]  pt-3 pb-4 flex flex-col justify-center lg:items-start items-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl p-3 border-fuchsia-800 b_glow">
                <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800'>
                InRiver Company
                </h2>
                <br />
                <Typography className='text-white mb-4'>
               • Link Validation  <br />• Freelance <br />• Blackweek Contract <br /><br />
               <span className="text-white-200"> October 17, 2022 - January 15, 2023</span>
               </Typography>
                </div>

                <div data-aos="fade-up" className="text-[15px]  pt-3 pb-4 flex flex-col justify-center lg:items-start items-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl p-3 border-fuchsia-800 b_glow">
                <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800'>
                Jairosoft Incorporated
                </h2>
                <br />
                <Typography className='text-white mb-4'>
               • Intern <br />• UI/UX Designer <br />• Bubble Developer <br /><br />
               <span className="text-white-200"> March 6, 2023 – June 2, 2023</span>
               </Typography>
                </div>

                <div data-aos="fade-up" className="text-[15px]  pt-3 pb-4 flex flex-col justify-center lg:items-start items-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl p-3 border-fuchsia-800 b_glow">
                <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800'>
                InRiver Company
                </h2>
                <br />
                <Typography className='text-white mb-4'>
               • Link Validation  <br />• Freelance <br />• Blackweek Contract <br /><br />
               <span className="text-white-200"> October 16, 2023 - January 5, 2024</span>
               </Typography>
                </div>
            </div>
    </div>
    );
};

export default Experience;