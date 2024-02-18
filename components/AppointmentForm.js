import React, { useState } from "react";
import { MdMedicalInformation } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission (e.g., API call, validation)
    console.log("Form submitted:", formData);
  };

  return (
    <section className='appointment-form '>
      <div className='wrapper br8 pt24 pb48 plr40 pr bg-grdnt-02'>
        <MdMedicalInformation
          size={160}
          color='rgba(255,255,255,.2)'
          className='pa t0 r0'
        />
        <FaHandHoldingMedical
          size={110}
          color='rgba(255,255,255,.2)'
          className='pa t0 l0'
        />
        <h2 className='fs22 fc4 mtb24'>Quick Appointment</h2>
        <form
          onSubmit={handleSubmit}
          className='book-appointment w100 df jcsb pr zi1'
        >
          <label className='df fdc'>
            <span className='label-text'>Full Name:</span>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label className='df fdc'>
            <span className='label-text'>Email:</span>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className='df fdc'>
            <span className='label-text'>Department:</span>
            <select
              name='department'
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value='' disabled>
                Select Department
              </option>
              <option value='Cardiology'>Cardiology</option>
              <option value='Orthopedics'>Orthopedics</option>
              {/* Add more department options */}
            </select>
          </label>

          <label className='df fdc'>
            <span className='label-text'>Preferred Time:</span>
            <input
              type='time'
              name='time'
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>

          <button
            type='submit'
            className='quick-book-btn h48 box-center mt24 plr24 bg2 fc4 cp'
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
