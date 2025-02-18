import image1 from "../../assets/workshopsImg/image (1).jpeg";
import image2 from "../../assets/workshopsImg/image (2).png";
import image3 from "../../assets/workshopsImg/image (3).jpeg";
import bgImage from "../../assets/workshopsImg/background.jpeg";
import { useState } from "react";
import EnrollmentForm from "../EnrollmentForm";

const TrendingWorkshops = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url("${bgImage}")`
      }}
      id="workshop"
      className="lg:bg-cover bg-no-repeat my-12"
    >
      <div className="bg-black/50">
        <div className="max-xl:px-5 py-12 max-w-[1240px] mx-auto text-white">
          <h1 className="text-2xl lg:text-[40px] lg:leading-[48px] font-bold ">
            Workshops
          </h1>
          <p className=" text-base font-normal leading-normal">
            We offer a comprehensive curriculum that teaches you everything you
            need to know about your chosen learning track. At Fountain Techhub
            we understand that the best way to learn by doing, our learning
            method are;
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 text-black">
            <div className="w-full p-4 bg-white rounded-2xl">
              <div className="max-h-[2080px] rounded-2xl overflow-hidden">
                <img src={image2} alt="" />
              </div>
              <h2 className="py-3 text-2xl font-bold leading-normal">
                Graphics Design
              </h2>
              <p className=" text-justify  text-base font-normal leading-normal">
              This comprehensive program is designed to equip you with the
              skills and knowledge to excel in the fields of Graphics Design.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" p-2 block my-5 font-bold text-base rounded-lg text-green-900 border border-green-900"
              >
                Enroll
              </button>

              {/* Modal */}
              {showModal &&
                <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                    <EnrollmentForm closeModal={() => setShowModal(false)} />
                  </div>
                </div>}
            </div>

            <div className="w-full p-4 bg-white rounded-2xl">
              <div className="max-h-[2080px] rounded-2xl overflow-hidden">
                <img src={image1} alt="" />
              </div>
              <h2 className="py-3 text-2xl font-bold leading-normal">
               Frontend development
              </h2>
              <p className=" text-justify  text-base font-normal leading-normal">
              This comprehensive program is designed to equip you with the
              skills and knowledge to excel in the fields of Frontend Developement.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" p-2 block my-5 font-bold text-base rounded-lg text-green-900 border border-green-900"
              >
                Enroll
              </button>

              {/* Modal */}
              {showModal &&
                <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                    <EnrollmentForm closeModal={() => setShowModal(false)} />
                  </div>
                </div>}
            </div>

            <div className="w-full p-4 bg-white rounded-2xl">
              <div className="max-h-[2080px] rounded-2xl overflow-hidden">
                <img src={image3} className="lg:h-full" alt="" />
              </div>
              <h2 className="py-3 text-2xl font-bold leading-normal">
                Backend Programming
              </h2>
              <p className="text-justify text-base font-normal leading-normal">
                This comprehensive program is designed to equip you with the
                skills and knowledge to excel in the fields of backend programming.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" p-2 block my-5 font-bold text-base rounded-lg text-green-900 border border-green-900"
              >
                Enroll
              </button>

              {/* Modal */}
              {showModal &&
                <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                    <EnrollmentForm closeModal={() => setShowModal(false)} />
                  </div>
                </div>}
            </div>

            <div className="w-full p-4 bg-white rounded-2xl">
              <div className="max-h-[2080px] rounded-2xl overflow-hidden">
                <img src={image2} className="lg:h-full" alt="" />
              </div>
              <h2 className="py-3 text-2xl font-bold leading-normal">
                UI/UX Design
              </h2>
              <p className="text-justify text-base font-normal leading-normal">
                This comprehensive program is designed to equip you with the
                skills and knowledge to excel in the fields of User Inteface and User Experience.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" p-2 block my-5 font-bold text-base rounded-lg text-green-900 border border-green-900"
              >
                Enroll
              </button>

              {/* Modal */}
              {showModal &&
                <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                    <EnrollmentForm closeModal={() => setShowModal(false)} />
                  </div>
                </div>}
            </div>

          


            <div className="w-full p-4 bg-white rounded-2xl">
              <div className="max-h-[2080px] rounded-2xl overflow-hidden">
                <img src={image2} className="lg:h-full" alt="" />
              </div>
              <h2 className="py-3 text-2xl font-bold leading-normal">
                Office Suite
              </h2>
              <p className="text-justify text-base font-normal leading-normal">
                This comprehensive program is designed to equip you with the
                skills and knowledge to excel in the fields of office suite.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" p-2 block my-5 font-bold text-base rounded-lg text-green-900 border border-green-900"
              >
                Enroll
              </button>

              {/* Modal */}
              {showModal &&
                <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                    <EnrollmentForm closeModal={() => setShowModal(false)} />
                  </div>
                </div>}
            </div>

            
            <div className="w-full p-4 bg-white rounded-2xl">
              <div className="max-h-[2080px] rounded-2xl overflow-hidden">
                <img src={image2} className="lg:h-full" alt="" />
              </div>
              <h2 className="py-3 text-2xl font-bold leading-normal">
               Robotics
              </h2>
              <p className="text-justify text-base font-normal leading-normal">
                This comprehensive program is designed to equip you with the
                skills and knowledge to excel in the fields of Robotics.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className=" p-2 block my-5 font-bold text-base rounded-lg text-green-900 border border-green-900"
              >
                Enroll
              </button>

              {/* Modal */}
              {showModal &&
                <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex justify-center items-center">
                  <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
                    <EnrollmentForm closeModal={() => setShowModal(false)} />
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingWorkshops;
