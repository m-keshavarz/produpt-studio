import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Text from "../../specific/text";
import { ArrowLeft, ArrowRight } from "../../icons";

// images
import logo1 from "../../../public/images/saderat-logo.png";
import proj1 from "../../../public/images/saderat.png";
import logo3 from "../../../public/images/barkat-logo.png";
import proj3 from "../../../public/images/barkat.png";
import logo4 from "../../../public/images/day-logo.png";
import proj4 from "../../../public/images/day.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useWindowSize from "../../../hooks/useWindowSize";

// // import Swiper core and required modules
// import SwiperCore, { Navigation } from "swiper";

// // install Swiper modules
// SwiperCore.use([Navigation]);

const Projects = () => {
  const { lg, width } = useWindowSize();
  const [slider, setSlider] = React.useState();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <>
      <div className="panel panel-4 shadow-panel h-screen flex flex-col lg:flex-row lg:items-end bg-white lg:bg-projects lg:bg-home-projects bg-left-top bg-no-repeat pt-20 lg:pt-28 custom-h-full:pt-36 pb-4 lg:pb-12 custom-h-full:pb-20 default-right-container">
        <div className="relative flex flex-col pl-8 lg:pl-14 lg:w-[45%] lg:flex-shrink-0">
          <h1 className="text-dusky-blue font-UltraBold text-7 iphone5:text-6 whitespace-nowrap mb-8 lg:mb-6">
            {fakeData[currentSlide].title}
          </h1>
          {lg && (
            <Text className="text-3.5 2xl:text-5 text-dark-slate-blue text-justify leading-[1.71] mb-8">
              {fakeData[currentSlide].description}
            </Text>
          )}
          <div className="flex justify-between items-center mb-16 lg:mb-0">
            <div className="relative w-[2.5rem] h-[2.5rem] md:w-16 md:h-16 lg:w-24 lg:h-24 lg:absolute lg:-top-1/2 lg:-right-3">
              <Image
                src={fakeData[currentSlide].logo}
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
            <a
              href={fakeData[currentSlide].link}
              target="_blank"
              rel="noreferrer"
              className="px-7 lg:px-12 rounded-lg flex justify-center items-center whitespace-nowrap bg-green-blue text-white h-8.5 lg:h-10 font-Bold text-3 lg:text-4 lg:mr-auto"
            >
              مشاهده پروژه
            </a>
          </div>
        </div>

        <Swiper
          loop
          slidesPerView={
            width >= 1024 && width < 1280
              ? 1.36
              : width >= 1280 && width < 1440
              ? 1.42
              : width >= 1440 && width < 1536
              ? 1.38
              : width >= 1536 && width < 1800
              ? 1.34
              : width >= 1800 && width < 1920
              ? 1.28
              : width >= 1920
              ? 1.52
              : width < 1024
              ? 1.24
              : 1.24
          }
          spaceBetween={
            width >= 1024 && width < 1920 ? 128 : width >= 1920 ? 156 : 32
          }
          className="w-full flex-grow lg:h-full"
          onInit={setSlider}
          onSlideChange={s => {
            setCurrentSlide(s.realIndex);
          }}
        >
          {fakeData.map((project, index) => (
            <SwiperSlide
              key={project.id}
              className={`relative after:absolute after:top-0 after:right-0 after:w-full after:h-full after:z-10 after:opacity-50 after:transition after:duration-300 ${clsx(
                { "after:bg-white": index !== currentSlide }
              )}`}
            >
              <Image src={project.img} alt="project" layout="fill" priority />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-4 custom-h-full:mb-8 flex lg:absolute lg:left-16 xl:left-[124px] 3xl:left-[12.5%] lg:bottom-[15%] lg:z-10">
          <button
            className="flex justify-center items-center ml-2"
            onClick={() => {
              slider.slidePrev();
            }}
          >
            <ArrowRight className="text-6 lg:text-10 !font-black text-dark-slate-blue cursor-pointer" />
          </button>
          <button
            className="flex justify-center items-center"
            onClick={() => {
              slider.slideNext();
            }}
          >
            <ArrowLeft className="text-6 lg:text-10 !font-black text-green-blue-light cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;

const fakeData = [
  {
    id: 1,
    title: "پروژه شمس بانک صادرات",
    description:
      "سامانه شمس بانک صادرات ایران به در خواست روابط عمومی برج سپهر صادرات با هدف مجازی سازی تمامی خدمات حضوری درون شعب در خلال پاندمی ویروس کرونا طراحی و پیاده سازی گردید.",
    logo: logo1,
    link: "https://www.bsi.ir/Pages/Home.aspx",
    img: proj1
  },
  {
    id: 2,
    title: "پروژه برکت",
    description:
      "اپلیکیشن بنیاد برکت با رویکرد توسعه اقتصادی کشور، ایجاد اشتغال و همدلی در شرایط پاندمی پیاده‌سازی شد. این اپلیکیشن همچنان در استودیو پروداپت در حال توسعه و افزودن ویژگی‌های جدید است.",
    logo: logo3,
    link: "https://app.barkat.ir/",
    img: proj3
  },
  {
    id: 3,
    title: "پروژه بانک دی",
    description:
      "وبسایت جدید بانک دی به خواسته واحد روابط عمومی این سازمان طراحی و توسعه داده شده است. از چالش های این پروژه میتوان به ایجاد نقاط مشترک بین خواسته های مدیران بانک و نیاز اصلی مشتریان بانک اشاره کرد.",
    logo: logo4,
    link: "https://www.bank-day.ir/",
    img: proj4
  }
];
