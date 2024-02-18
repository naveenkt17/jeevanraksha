import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import doctorsData from "../data/doctorteams"

const DoctorTeam = () => {
  return (
    <section className="service-section ptb48 brd-t1">
      <div className="wrapper df fww">
        <div className="service-heading mb48 mt48 flx100 v-center fdc">
          <h3 className="v-center fs15 fw6 fc1 mt32 mb12">
            Meet Our Experienced Team of Doctors
          </h3>
          <p className="v-center fs18 fw5 fc2 mt8 flx50 lh24 tac">
            You can schedule an appointment with a specialist by contacting our
            reception.
          </p>
        </div>
        <div className="team-block flx100 v-center jcsb fww">
          {doctorsData.map((doctor, index) => (
            <div key={index} className="team flx24 plr24 box-sd1 box-center fdc ptb24 br8 mb24">
              <div className="team-card-image box-center br50 ofh">
                <img src={doctor.image} alt={doctor.name} className="w100" />
              </div>
              <h3 className="doctor-name fw6 fs18 mt16">{doctor.name}</h3>
              <p className="doctor-name-text lh24 fs14 fc3 mt8">{doctor.specialization}</p>
              <ul className="v-center mt16">
                <li className="box-center h40 w40 br50 bg4 brd1 mr8">
                  <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="fc1" />
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorTeam;
