// components/ServiceCard.js
import React from "react";
import Image from "next/image";
import * as ReactIcons from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const getIconComponent = (iconName) => {
  const IconComponent = ReactIcons[iconName];
  return IconComponent ? <IconComponent /> : null;
};

const ServiceCard = ({ service }) => {
  const { name, description, icon, image } = service;

  return (
    <div className='service-card p16'>
      <div className='service-card-img h-center aisc'>
        <Image src={`/images/${image}`} alt={name} width={320} height={210} />
      </div>

      <div className='service-icon df jce mr16'>{getIconComponent(icon)}</div>
      <h3 className='fs18 fw6 mt24'>{name}</h3>
      <p className='fs15 lh24 fc3 mt12'>{description}</p>
      <a className='fs15 fc1 dif aic bg4 mt16 mb24 cp'>
        Read More
        <MdOutlineArrowRightAlt size={24} className='ml8' />
      </a>
    </div>
  );
};

export default ServiceCard;
