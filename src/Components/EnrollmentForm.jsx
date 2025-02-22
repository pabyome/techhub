import { useState } from "react";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";

const EnrollmentForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    workshop: "",
    picture: null,
    picturePreview: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture" && files && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        picture: file,
        picturePreview: URL.createObjectURL(file),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.workshop.trim()) {
      errors.workshop = "Workshop is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.picture) {
      errors.picture = "Picture is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted");
      closeModal();
    }
  };

  return (
    <div className="relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-3xl text-gray-600"
      >
        &times;
      </button>
      <h1 className="text-[24px] font-bold mb-4">Fill The Form To Enroll</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Picture Upload */}
          <div className="space-y-2">
            {/* <label htmlFor="picture" className="text-gray-700 text-[16px]">
              Upload Picture*
            </label> */}
            <div className="flex items-center justify-center">
              <label htmlFor="picture" className="cursor-pointer">
                {formData.picturePreview ? (
                  <img
                    src={formData.picturePreview}
                    alt="Preview"
                    className="w-28 h-28 object-cover rounded-full border-2"
                  />
                ) : (
                  <FaUserCircle size={90} className="text-gray-400" />
                )}
              </label>
              <input
                type="file"
                id="picture"
                name="picture"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            {formErrors.picture && (
              <p className="text-red-500 text-xs mt-1">{formErrors.picture}</p>
            )}
          </div>

          {/* Full Name Input */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-gray-900 text-[16px]">
              Enter Full Name*
            </label>
            <input
              type="text"
              className={`block w-full border-2 py-2 px-4 rounded-lg outline-none ${
                formErrors.fullName ? "border-red-500" : ""
              }`}
              id="fullName"
              name="fullName"
              value={formData.fullName}
              placeholder="Full name"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {formErrors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.fullName}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-900 text-[16px]">
              Enter Email Address*
            </label>
            <input
              type="text"
              className={`block w-full border-2 py-2 px-4 rounded-lg outline-none ${
                formErrors.email ? "border-red-500" : ""
              }`}
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>

          {/* WorkShop */}
          <div className="space-y-2">
            <label htmlFor="workshop" className="text-gray-900 text-[16px]">
              Enter Workshop*
            </label>
            <input
              type="text"
              className={`block w-full border-2 py-2 px-4 rounded-lg outline-none ${
                formErrors.workshop ? "border-red-500" : ""
              }`}
              id="workshop"
              name="workshop"
              value={formData.email}
              placeholder="Workshop"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {formErrors.workshop && (
              <p className="text-red-500 text-xs mt-1">{formErrors.workshop}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-gray-900 text-[16px]">
              Enter Phone Number*
            </label>
            <input
              type="tel"
              className={`block w-full border-2 py-2 px-4 rounded-lg outline-none ${
                formErrors.phone ? "border-red-500" : ""
              }`}
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Phone number"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            {formErrors.phone && (
              <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full text-white bg-green-900 py-4 rounded-lg"
            >
              Submit Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

EnrollmentForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default EnrollmentForm;
