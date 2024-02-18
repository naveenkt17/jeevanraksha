import React from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa6";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  return (
    <section className='faq-section ptb48 mt48 bg-grdnt-01'>
      <div className='wrapper df fww pb48'>
        <div className='faq-heading mb48 mt48 flx100 v-center fdc'>
          <h3 className='v-center fs15 fw6 fc1 mt32 mb12'>FAQ</h3>
          <h2 className='v-center fs26 fw6 mt8'>Frequentaly Ask Questions</h2>
        </div>

        <div className='faq-box df w100'>
          <FaqAccordion />
          <div className='faq-content flx1 mr24 dn'>
            <div className='faq-qa v-center flx1 br4 brd1 ptb8 plr16 mb16'>
              <h2 className='faq-ques v-center fc3 lh24'>
                <FaPlus size={32} color='#031422' className='mr16' />
                In our Emergency Room, we prioritize easy and prompt access
                procedures.
              </h2>
              <p className='faq-ans fs14 lh22'></p>
            </div>
            <div className='faq-qa v-center flx1 br4 brd1 ptb8 plr16 mb16'>
              <h2 className='faq-ques v-center fc3 lh24'>
                <FaPlus size={32} color='#031422' className='mr16' />
                Support your journey to wellness?
              </h2>
              <p className='faq-ans fs14 lh22'></p>
            </div>
            <div className='faq-qa v-center flx1 br4 brd1 ptb8 plr16 mb16 fww'>
              <h2 className='faq-ques v-center fc3 lh24'>
                <FaMinus size={32} color='#031422' className='mr16' />
                Room, we prioritize easy and prompt access procedures?
              </h2>
              <p className='faq-ans fs14 lh22 flx100 pl48 pr40 fc3 mt16'>
                Discover Jeevanraksha's commitment to compassionate care and
                medical excellence. With state-of-the-art facilities and a
                dedicated team, we're here to support your journey to wellness
                with personalized healthcare solutions.
              </p>
            </div>

            <div className='faq-qa v-center flx1 br4 brd1 ptb8 plr16 mb16'>
              <h2 className='faq-ques v-center fc3 lh24'>
                <FaPlus size={32} color='#031422' className='mr16' />
                Jeevanraksha's commitment to compassionate care?
              </h2>
              <p className='faq-ans fs14 lh22'></p>
            </div>
            <div className='faq-qa v-center flx1 br4 brd1 ptb8 plr16 mb16'>
              <h2 className='faq-ques v-center fc3 lh24'>
                <FaPlus size={32} color='#031422' className='mr16' />
                In our Emergency Room, we prioritize easy and prompt access
                procedures.
              </h2>
              <p className='faq-ans fs14 lh22'></p>
            </div>
            <div className='faq-qa v-center flx1 br4 brd1 ptb8 plr16 mb16'>
              <h2 className='faq-ques v-center fc3 lh24'>
                <FaPlus size={32} color='#031422' className='mr16' />
                In our Emergency Room, we prioritize easy and prompt access
                procedures.
              </h2>
              <p className='faq-ans fs14 lh22'></p>
            </div>
          </div>
          <div className='faq-image df flx48 pr'>
            <div className='faq-image-bg flx25 bg1 pr br8'></div>
            <Image
              src='/images/about-image-02.jpg'
              width={500}
              height={400}
              alt='Picture of the author'
              className='faq-img mtb24 pr zi2'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
