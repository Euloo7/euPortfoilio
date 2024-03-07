import {AiFillGithub} from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from '../assets/profile.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Banner = () => {
    useEffect(()=>{

        Aos.init({
            easing: "ease-out-quart",
            delay:0,
            duration: 750
        })
    },[])
   
    return (
        <div id="Banner" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1  data-aos="fade-right" className="text-[52px] font-semibold mb-1 leading-normal uppercase">Hello, I am </h1>
                <h1  data-aos="fade-right" className="text-[30px] font-semibold mb-8 leading-normal uppercase"><span className="text-fuchsia-500"> Edward Urbiztondo</span></h1>
                    <p  data-aos="fade-left">Graduate of Bachelor of Science Information of Technology from University Of Mindanao. A former freelance and enthusiast programmer.</p>      
                    <div className="flex mt-8 gap-2">
                      <div className="flex items-center justify-center">
                         <div className="flex space-x-2">
                            <a href="" data-aos="fade-up" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            < FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="" data-aos="fade-up" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FiTwitter className="text-[28px]"/>
                            </a>
                            <a href="" data-aos="fade-up" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="" data-aos="fade-up" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                            <FaInstagram className="text-[28px]"/>
                            </a>
                     </div>
                    </div>
                </div>         
             </div>    
             <img  data-aos="fade-down" src={img} width={300} height={290} className='rounded-full  border-fuchsia-500 img_glow' alt="" />
        </div>
    );
};

export default Banner;