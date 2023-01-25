import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  Envelop,
  Instagram,
  Linkedin,
  Phone,
  PinRounded,
  Pin
} from "../../icons";
import Button from "../../specific/button";
import Text from "../../specific/text";

const Contactus = () => {
  const { lg } = useWindowSize();
  return (
    <div className="panel panel-5 shadow-panel bg-contact-us h-screen w-full bg-no-repeat bg-home-contact-us-mob bg-right-top sm:bg-home-projects sm:bg-left-top flex flex-col px-8 lg:px-0">
      <Text className="text-dark-slate-blue font-Medium text-4.5 lg:text-5.5 leading-[1.8] lg:leading-normal text-center mt-24 lg:mt-auto">
        غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
        <br />
        وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت
        است.
      </Text>
      <Button
        size={lg ? "big" : "small"}
        bg="purple"
        className="text-white text-3 lg:text-4 font-Bold mt-5 lg:mt-6 flex-shrink-0 self-center shadow-36"
      >
        {lg ? "مشاوره طراحی محصول" : "مشاوره محصول"}
      </Button>
      <div className="grid place-content-center lg:place-content-around lg:items-start lg:grid-flow-col gap-4 custom-backdrop-blur mt-auto lg:mt-8 3xl:mt-24 py-14 lg:py-10 px-10">
        <div className="flex items-center lg:flex-col lg:justify-center">
          <div className="bg-white ml-2 rounded-full shadow-pin flex justify-center items-center w-7 lg:w-19.5 h-7 lg:h-19.5 flex-shrink-0">
            <Pin className="text-green-blue-light text-4 lg:text-10" />
          </div>
          <Text className="text-dark-slate-blue text-3 leading-5 lg:font-Medium lg:text-4 lg:leading-7 lg:mt-5 lg:text-center max-w-[200px]">
            جنت آباد جنوبی لاله غربی جنب کوچه نمازی پ ۲۸ واحد۴
          </Text>
        </div>
        <div className="flex items-center lg:flex-col lg:justify-center">
          <div className="bg-white ml-2 rounded-full shadow-xl flex justify-center items-center w-7 lg:w-19.5 h-7 lg:h-19.5 flex-shrink-0">
            <Phone className="text-green-blue-light text-4 lg:text-10" />
          </div>
          <Text className="text-dark-slate-blue text-3 leading-5 lg:font-Medium lg:text-4 lg:leading-7 lg:mt-5">
            <a href="tel:02144656228" dir="ltr">
              021-44656228
            </a>
          </Text>
        </div>
        <div className="flex items-center lg:flex-col lg:justify-center">
          <div className="bg-white ml-2 rounded-full shadow-xl flex justify-center items-center w-7 h-7 lg:w-19.5 lg:h-19.5 flex-shrink-0">
            <Envelop className="text-green-blue-light text-4 lg:text-10" />
          </div>
          <Text className="text-dark-slate-blue text-3 leading-5 lg:font-Medium lg:text-4 lg:leading-7 lg:mt-5">
            <a href="mailto:info@produpt.com">info@produpt.com</a>
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-center lg:mt-2 mt-5">
        {lg && (
          <Text className="font-Medium text-brown-grey text-3.5 mb-2">
            پروداپت را در شبکه های اجتماعی دنبال کنید.
          </Text>
        )}

        <div className="grid grid-flow-col gap-1 mb-8">
          <a
            href="https://www.instagram.com/produptco/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="text-green-blue-light text-6 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/produpt/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="text-green-blue-light text-6 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
