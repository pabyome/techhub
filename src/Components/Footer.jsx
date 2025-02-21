

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-[#FFFFFF] text-base">
      <div className="max-w-[1240px] mx-auto p-3 lg:py-20 flex flex-col lg:flex-row gap-y-5 md:gap-20">
        <div>
          <h1 className="text-3xl textg-white">Fountain TechHub</h1>
      
            At Fountain TechHub we equip you with essential tech skills to drive
            <br />
            innovation in the Africa.
        
        </div>
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-36">
          <div>
            <h3 className=" text-xl">
              <b>Quick Links</b>
            </h3>
            <div className="flex flex-col">
              <Link to="/">Home</Link>
             
            </div>
          </div>
          <div className="space-y-10">
            <h3 className=" text-xl">
              <b>Contact Us</b>
            </h3>
            <a href="">
              Fountain International High School, Omisanjana,Ado-Ekiti   
            </a>
            <br />
            <a>08030671525, 07034447881</a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
