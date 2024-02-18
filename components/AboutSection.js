import React from "react";
import Image from "next/image";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className='about-section ptb48 mt48'>
      <div className='wrapper df plr48'>
        <div className='about-image flx48 pr'>
          <Image
            src='/images/about-image-01.jpg'
            width={400}
            height={300}
            alt='Picture of the author'
            className='about-img br8'
          />
          <div className='abt-vid-box box-center pa b0 r0'>
            <button className='play-button'>
              <div className='play-icon'></div>
            </button>
            <Image
              src='/images/about-image-02.jpg'
              width={380}
              height={260}
              alt='Picture of the author'
              className='about-img br8'
            />
          </div>
        </div>
        <div className='about-content flx1 ml24'>
          <h2 className='v-center fs14 fc3 mt4'>
            <span className='section-line'></span>About Jeevanraksha
          </h2>
          <h3 className='v-center fs18 fw3 fc3 mt32'>The Great Place of</h3>
          <h4 className='v-center fs26 fw6 fc1 mt8'>
            Empowering Health, Enriching Lives
          </h4>
          <p className='v-center fc3 mt24 lh24 pr48 mr48'>
            Discover Jeevanraksha's commitment to compassionate care and medical
            excellence. With state-of-the-art facilities and a dedicated team,
            we're here to support your journey to wellness with personalized
            healthcare solutions.
          </p>
          <ul className='about-key-points v-center fww mt32'>
            <li className='key-item v-center flx48 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              Ambulance Service
            </li>
            <li className='key-item v-center flx48 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              Oxyzen on Wheel
            </li>
            <li className='key-item v-center flx48 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              Pharmacy on Clinic
            </li>
            <li className='key-item v-center flx48 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              Ambulance Service
            </li>
            <li className='key-item v-center flx48 mb16'>
              <IoCheckmarkDoneCircle
                size={20}
                color='#1a76d1'
                className='mr4'
              />
              24/7 Medical Emergency
            </li>
          </ul>
          <button className='lm-btn box-center mt24 h48 br2 plr24 bg2 fc4'>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
