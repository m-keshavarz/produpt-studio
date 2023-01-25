import React from "react";
import Button from "../../specific/button";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "../../icons";
import Text from "../../specific/text";
import useWindowSize from "../../../hooks/useWindowSize";

// images
import projects from "../../../public/images/Group 3026@2x.png";

const Home2 = () => {
  const { lg } = useWindowSize();

  return (
    <div
      semantic="home2-container"
      className="panel panel-2 shadow-panel h-screen w-full bg-home-slider2-mob bg-cover md:bg-home-slider2 bg-no-repeat default-container flex flex-col"
    >
      <div semantic="header-distance" className="flex-shrink-0 h-16"></div>
      <div
        semantic="text-and-button"
        className="flex flex-col self-start mt-14 lg:mt-auto"
      >
        <h1
          id="main-text1"
          className="home1-h font-UltraBold text-white text-[28px] lg:text-9 leading-relaxed"
        >
          مـا بـرای بهتریــن شدن،
          <br /> مسیــر طراحـی می کنیــم
        </h1>
        <Text
          id="sub-text1"
          className="home1-v mt-2 sm:mt-6 text-white text-[15px] lg:text-very-light-Gray lg:font-Light lg:text-4.5"
        >
          طراحی وبسایت و اپلیکیشن با تمرکز به تجربه کاربری
        </Text>

        <Button
          size={lg ? "big" : "small"}
          bg="white"
          className="home1-v font-Bold text-green-blue lg:text-dusky-blue text-3.5 lg:text-4 mt-5 self-start lg:self-end shadow-36"
        >
          {lg ? "مشاوره طراحی محصول" : "مشاوره محصول"}
        </Button>
      </div>
      <div
        semantic="logos-and-arrows"
        className="w-full sm:flex justify-between items-end mt-auto mb-4 lg:mb-16"
      >
        <div className="home1-h relative hidden lg:flex w-[360px]">
          <Image src={projects} alt="projects" />
        </div>

        <div className="flex">
          <button className="ml-2">
            <ArrowRight className="text-2xl lg:text-4xl text-dark-slate-blue" />
          </button>
          <button>
            <ArrowLeft className="text-2xl lg:text-4xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

Home2.displayName = "Home2";

export default Home2;
