import React from "react";
import Image from "next/image";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";

const MedicalEmergency = () => {
  return (
    <section className='about-section ptb48 mt48 bg-grdnt-03'>
      <div className='wrapper df plr48'>
        <div className='about-content flx1 mr24'>
          <h2 className='v-center fs14 fc3 mt4'>
            <span className='section-line'></span>Emergency Helpline
          </h2>
          <h3 className='v-center fs18 fw3 fc3 mt32'>The Quick response</h3>
          <h4 className='v-center fs26 fw6 fc1 mt8'>Need Emergency Contact</h4>
          <p className='v-center fc3 mt24 lh24 pr48 mr48'>
            In our Emergency Room, we prioritize easy and prompt access to
            highly skilled medical professionals, including top-tier trauma
            surgeons in India who excel in performing state-of-the-art
            procedures.
          </p>
          <ul className='about-key-points v-center fww mt32'>
            <li className='key-item v-center flx100 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              24/7 Contact Our Hospital
            </li>
            <li className='key-item v-center flx100 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              24 Hours Oncall Facilities
            </li>
            <li className='key-item v-center flx100 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              Emergency Contact Number
            </li>
          </ul>
          <div className='hepline-cta v-center'>
            <div className='call-help-btn box-center mt24 mr16 ptb8 br2 plr24 bg5 fc4 brd1'>
              <div className='help-btn-icon box-center br50 bg1 w48 h48 mr12'>
                <PiPhoneCallFill size={20} color='#fff' className='mr4' />
              </div>
              <div className='help-btn-text fc2 fs15 fw6'>
                <span className='fs12 fw4 fc3 db mb4'>Phone Number</span>
                +91 7679856232
              </div>
            </div>
            <div className='email-help-btn box-center mt24 mr16 ptb8 br2 plr24 bg5 fc4 brd1'>
              <div className='help-btn-icon box-center br50 bg1 w48 h48 mr12'>
                <MdMarkEmailRead size={20} color='#fff' className='mr4' />
              </div>
              <div className='help-btn-text fc2 fs15 fw6'>
                <span className='fs12 fw4 fc3 db mb4'>
                  Email Us for Quick Response
                </span>
                info@jeevanrakshahospital.com
              </div>
            </div>
          </div>
        </div>
        <div className='emergency-image df flx48 pr'>
          <Image
            src='/images/emergency-01.svg'
            width={800}
            height={500}
            alt='Picture of the author'
            className='about-img br8'
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalEmergency;
