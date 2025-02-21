import { Link, useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

const Header = () => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full">
      <nav className="fixed top-0 left-0 w-full bg-white z-10 shadow">
        <div className="flex justify-between items-center max-xl:px-3 py-4 max-w-[1400px] mx-auto">
          <h1 className="text-xl font-semibold text-green-900">Fountain TechHub</h1>
          <div className="hidden md:flex gap-[40px] font-normal items-center">
            <Link to="/" className={pathname === "/" ? "text-green-900" : ""}>
              Home
            </Link>

            <a href="#about">
              <span className={pathname === "#about" ? "text-green-900" : ""}>
                About Us
              </span>
            </a>

            <a href="#workshop">
              <span
                className={pathname === "#workshop" ? "text-green-900" : ""}
              >
                Workshop
              </span>
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="py-2 px-4 rounded-lg bg-green-900 text-white"
            >
              Enroll now
            </button>
          </div>
          <div className="hidden">
            <FaBarsStaggered />
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px]">
            <EnrollmentForm closeModal={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
