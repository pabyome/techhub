

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-[#FFFFFF] text-base">
      <div className="max-w-[1240px] mx-auto p-3 lg:py-20 flex flex-col lg:flex-row gap-y-5 md:gap-20">
        <div>
          <h1 className="text-3xl textg-white">Fountain TechHub</h1>
          <small>
            At Fountain TechHub we equip you with essential tech skills to drive
            <br />
            innovation in the Africa.
          </small>
        </div>
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-10">
          <div>
            <h3 className=" text-xl">
              <b>Quick Links</b>
            </h3>
            <div className="flex flex-col">
              <Link to="/">Home</Link>
             
            </div>
          </div>
          <div>
            <h3 className=" text-xl">
              <b>Contact Us</b>
            </h3>
            <a href="mailto:Techwonderafrica@gmail.com">
              fountain@gmail.com
            </a>
            <br />
            <a></a>
            <address>Nigeria.</address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
