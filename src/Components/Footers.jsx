import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { useEffect } from 'react';
import Aos from 'aos';

const Footers = () => {
    useEffect(()=>{

        Aos.init({
            easing: "ease-out-quart",
            delay:0,
            duration: 750
        })
    },[])
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-semibold text-fuchsia-800 py-2 uppercase">Edward Urbiztondo</span>
                    <p className="text-[16px] my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Services</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">Data Entry</li>
                        <li className="my-2">Android App Development</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">Email: urbiztondoedward@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +63 930-065-3824</p>
                </div>
                <div>
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
                <div className="flex space-x-4">
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaGithub/>
                    </a>
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaLinkedinIn/>
                    </a>
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FiTwitter/>
                    </a>
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaInstagram/>
                    </a>
                </div>
                </div>
            </div>

        </footer>
    );
};

export default Footers;