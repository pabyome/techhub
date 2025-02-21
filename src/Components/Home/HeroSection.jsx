import { useState } from "react";
import robotPic from "../../assets/workshopsImg/background.jpeg";
import youngLearnerImg from "../../assets/younglearner.png";
import youngLearnersImg from "../../assets/younglearners.png";
import { motion } from "framer-motion";
import EnrollmentForm from "../EnrollmentForm";

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);
  
  return (
    <section>
      <div className="relative">
        <img
          src={youngLearnersImg}
          alt=""
          className="w-full max-w-[1440px] max-h-[600px] object-cover mx-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full text">
          <div className="max-xl:px-3 py-4 w-full h-full max-w-[1240px] mx-auto flex items-end max max-lg:bg-black/20">
            <motion.div
              className=" text-white font-bold"
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >
              <h1 className="text-2xl lg:text-[32px] lg:leading-10">
                WELCOME TO
              </h1>
              <h1 className="lg:leading-[64px] text-4xl lg:text-[56px] max-md:">
                FOUNTAIN TECHHUB
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="about" className="max-xl:px-5 py-12 ">
        <div className="max-w-[1440px] mx-auto">
          <div className="my-12 flex flex-col gap-16 lg:gap-36 md:flex-row md:justify-between ">
            <motion.div
              className="w-full"
              initial={{ x: "-7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "spring"
              }}
            >
              <h1 className="font-medium text-3xl lg:text-[64px] lg:leading-[76px]">
                Equipping Africa with Vital{" "}
                <span className="text-green-900">Tech Expertise</span> for
                Progress.
              </h1>
              <p className=" font-normal text-base my-5">
                At Fountain Techhub, we empower you with the critical tech
                skills necessary to ignite innovation and foster growth
                throughout Africa. Discover your potential, drive technological
                progress, and lead the way in the tech industry with our
                extensive and immersive training programs.
              </p>
              <button onClick={() => setShowModal(true)} className=" py-4 px-5 bg-green-900 rounded-lg text-white">
                Enroll &rarr;
              </button>
            </motion.div>
             {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                        <EnrollmentForm closeModal={() => setShowModal(false)} />
                      </div>
                    </div>
                  )}
            <motion.div
              className=" w-full max-w-[630px]"
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 6,
                type: "spring"
              }}
            >
              <img src={youngLearnerImg} alt="" />
            </motion.div>
          </div>

          <div className="my-12 flex flex-col gap-16 lg:gap-36 md:flex-row md:justify-between ">
            <motion.div
              className=" w-full max-w-[630px]"
              initial={{ y: "7rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 8,
                type: "spring"
              }}
            >
              <img src={robotPic} alt="" />
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ x: "-7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 8,
                type: "spring"
              }}
            >
              <h1 className="font-medium text-4xl lg:text-[64px] lg:leading-[76px]">
                About Us
              </h1>
              <p className="font-normal text-base my-5"> Fountain Tech Hub is the innovation and technology arm of Fountain International High School, Ado Ekiti. At Fountain Tech Hub, we are passionate about empowering individuals and organizations through innovative technology solutions. Our mission is to provide cutting-edge digital services and training that equip our community with the skills and knowledge to thrive in an ever-evolving tech landscape. From desktop publishing and Microsoft packages to graphics and software development, we offer expert-led training programs designed to foster growth and digital literacy. As a forward-thinking tech hub, we aim to cultivate a culture of creativity, learning, and advancement in technology, preparing our students for a bright future in the digital age.</p>
              <button onClick={() => setShowModal(true)} className=" py-4 px-5 bg-green-900 rounded-lg text-white">
                Enroll &rarr;
              </button>
            </motion.div>
             {/* Modal */}
             {showModal && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                        <EnrollmentForm closeModal={() => setShowModal(false)} />
                      </div>
                    </div>
                  )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
