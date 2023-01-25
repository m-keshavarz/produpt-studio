import React from "react";
import Layout from "../layout";
import dynamic from "next/dynamic";

import Text from "../../components/specific/text";
import {
  Pin,
  Phone,
  Envelop,
  Instagram,
  Linkedin
} from "../../components/icons";
import useWindowSize from "../../hooks/useWindowSize";
const ContactUsMap = dynamic(() => import("../../components/specific/map"), {
  ssr: false
});

const Contactus = () => {
  const { lg } = useWindowSize();

  return (
    <Layout containerClassName="bg-consulting-page bg-contactus-Mobile-size bg-consulting-mobile-position bg-no-repeat lg:bg-contactus-Descktop-size lg:bg-contactus-position-back">
      <div className="w-full default-container pt-[1.812rem] lg:pt-[9.5rem] lg:pl-[18.594%]">
        <div className=" w-full mb-8 lg:mb-[3.25rem] ">
          <div className="bg-seafoam w-[5.525rem] h-4 relative lg:w-[10.125rem] lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4 whitespace-nowrap">
              تماس با ما
            </Text>
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:w-full lg:justify-between lg:items-start">
          <div className="flex flex-col items-center lg:w-[75%] lg:items-start">
            <div className="w-full bg-gray-600 h-[22vh] lg:h-[21.562rem] relative">
              <ContactUsMap />
            </div>
            <div className="lg:w-full lg:flex lg:justify-between lg:items-center lg:mt-5 lg:mb-24">
              <a
                href="https://www.google.com/maps/place/35%C2%B044'47.9%22N+51%C2%B018'06.2%22E/@35.7466313,51.3011777,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x22b0062e9a904839!8m2!3d35.7466313!4d51.3017249"
                className="w-32 bg-white-Two flex justify-center text-dusky-blue font-SemiBold text-3  py-2 rounded-lg mt-5 shadow-ContactUs-btn-shadow lg:w-[11.75rem] lg:text-4 lg:font-Bold "
                target="blank"
              >
                مسیریابی
              </a>
              {lg && (
                <div className="flex flex-col items-end lg:mt-2 mt-5">
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
              )}
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 lg:mt-0 lg:w-[13%]  ">
            <div className="w-full grid  gap-4 custom-backdrop-blur lg:backdrop-filter-none lg:bg-transparent mt-auto  3xl:mt-24 py-14  px-10 lg:py-0 lg:px-0 ">
              <div className="flex items-center lg:flex-col lg:justify-center">
                <div className="bg-white ml-2 rounded-full shadow-pin flex justify-center items-center w-7 lg:w-14 h-7 lg:h-14 flex-shrink-0">
                  <Pin className="text-green-blue-light text-4 lg:text-9" />
                </div>
                <Text className=" text-dark-slate-blue text-3 leading-5 lg:font-Regular lg:text-3.5  lg:mt-2.5 lg:text-center max-w-[200px]">
                  جنت آباد جنوبی لاله غربی جنب کوچه نمازی پ ۲۸ واحد۴
                </Text>
              </div>
              <div className="flex items-center lg:flex-col lg:justify-center">
                <div className="bg-white ml-2 rounded-full shadow-xl flex justify-center items-center w-7 lg:w-14 h-7 lg:h-14 flex-shrink-0">
                  <Phone className="text-green-blue-light text-4 lg:text-9" />
                </div>
                <Text className="text-dark-slate-blue text-3 leading-5 lg:font-Regular lg:text-4.5 lg:leading-7 lg:mt-2.5">
                  <a href="tel:02144656228" dir="ltr">
                    021-44656228
                  </a>
                </Text>
              </div>
              <div className="flex items-center lg:flex-col lg:justify-center">
                <div className="bg-white ml-2 rounded-full shadow-xl flex justify-center items-center w-7 h-7 lg:w-14 lg:h-14 flex-shrink-0">
                  <Envelop className="text-green-blue-light text-4 lg:text-8" />
                </div>
                <Text className="text-dark-slate-blue text-3 leading-5 lg:font-Medium lg:text-4 lg:leading-7 lg:mt-2.5">
                  <a href="mailto:info@produpt.com">info@produpt.com</a>
                </Text>
              </div>
            </div>

            {!lg && (
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
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactus;
