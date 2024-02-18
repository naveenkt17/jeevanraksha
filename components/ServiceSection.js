import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./ServiceCard";
import * as ReactIcons from "react-icons/fa";
const getIconComponent = (iconName) => {
  const IconComponent = ReactIcons[iconName];
  return IconComponent ? <IconComponent /> : null;
};
const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='service-section ptb48 mt48 brd-t1'>
      <div className='wrapper df fww pb48'>
        <div className='service-heading mb48 mt48 flx100 v-center fdc'>
          <h3 className='v-center fs15 fw6 fc1 mt32 mb12'>The Great Service</h3>
          <h2 className='v-center fs26 fw6 mt8'>Our Medical Services</h2>
        </div>
        <Slider {...settings}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceSection;
