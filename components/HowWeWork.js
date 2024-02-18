import React from "react";
import { FaWpforms } from "react-icons/fa";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCheckupList, TbReportAnalytics } from "react-icons/tb";

const HowWeWork = () => {
  return (
    <section className='service-section ptb48 brd-t1'>
      <div className='wrapper df fww pb48'>
        <div className='service-heading mb48 mt48 flx100 v-center fdc'>
          <h3 className='v-center fs15 fw6 fc1 mt32 mb12'>How We Work</h3>
          <h2 className='v-center fs26 fw6 mt8'>Our Working Process</h2>
        </div>
        <div className='how-work-block flx100 v-center'>
          <div className='how-card flx25 plr24'>
            <div className='how-card-icon box-center h64 w64 br50 bg1'>
              <FaWpforms size={24} color='#fff' />
            </div>
            <h3 className='how-card-title fw6 fs18 mt16'>Fill The Form</h3>
            <p className='how-card-text lh24 fs14 fc3 mt16'>
              You can schedule an appointment with a specialist either by using
              our online appointment booking system or by contacting our
              reception.
            </p>
          </div>
          <div className='how-card flx25 plr24 mt48 pt48'>
            <div className='how-card-icon box-center h64 w64 br50 bg1'>
              <BsBuildingAdd size={24} color='#fff' />
            </div>
            <h3 className='how-card-title fw6 fs18 mt16'>
              Book an appointment
            </h3>
            <p className='how-card-text lh24 fs14 fc3 mt16'>
              Visiting hours are from 10 AM to 8 PM every day. However,
              exceptions may apply in specific cases, so it's advisable to check
              with the hospital staff.
            </p>
          </div>
          <div className='how-card flx25 plr24'>
            <div className='how-card-icon box-center h64 w64 br50 bg1'>
              <TbCheckupList size={24} color='#fff' />
            </div>
            <h3 className='how-card-title fw6 fs18 mt16'>Check-Ups</h3>
            <p className='how-card-text lh24 fs14 fc3 mt16'>
              The hospital provides parking facilities for visitors. Please
              follow the designated parking areas and inquire at the reception
              for more information.
            </p>
          </div>
          <div className='how-card flx25 plr24 mt48 pt48'>
            <div className='how-card-icon box-center h64 w64 br50 bg1'>
              <TbReportAnalytics size={24} color='#fff' />
            </div>
            <h3 className='how-card-title fw6 fs18 mt16'>Get Reports</h3>
            <p className='how-card-text lh24 fs14 fc3 mt16'>
              Patients can access their medical records online through our
              secure patient portal. Please register on our website or contact
              our medical records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
