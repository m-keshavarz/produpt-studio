import React from "react";
import Text from "../../specific/text";
import Link from "next/link";
import { ChevronLeft } from "../../icons";
import SubText from "../../specific/subText";

const Services = () => {
  return (
    <div className="panel panel-3 shadow-panel h-screen bg-white bg-home-services-mob lg:bg-home-services bg-no-repeat bg-right-bottom flex flex-col default-container">
      <Text className="text-7 text-dusky-blue font-UltraBold leading-[1.86] mt-28 lg:hidden">
        طراحی وبسایت <br /> و اپلیکیشن مبتنی <br /> بر استراتژی کسب و کار
      </Text>

      <div className="flex flex-col self-end lg:w-1/2 mt-auto mb-14 lg:mb-8">
        <Link href="/">
          <a className="flex items-start lg:items-center">
            <Text className="font-Bold text-green-blue w-36 lg:w-auto lg:text-5.5">
              مشاوره محصول
            </Text>
            <SubText className="font-Medium text-3.5 text-dusky-blue mr-auto hidden lg:inline">
              مشاهده
            </SubText>
            <ChevronLeft className="text-dusky-blue text-6" />
          </a>
        </Link>

        <ul className="hidden lg:grid gap-1 mt-4 mr-8">
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            مشاوره محصول
          </li>
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            طراحی و مشاوره استراتژی دیجیتال
          </li>
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            مشاوره کسب وکار آنلاین
          </li>
        </ul>
      </div>

      <div className="flex flex-col self-end lg:w-1/2 mb-14 lg:mb-8">
        <Link href="/">
          <a className="flex items-start lg:items-center">
            <Text className="font-Bold text-green-blue w-36 lg:w-auto lg:text-5.5">
              طراحی رابط و تجربه کاربری
            </Text>
            <SubText className="font-Medium text-3.5 text-dusky-blue mr-auto hidden lg:inline">
              مشاهده
            </SubText>
            <ChevronLeft className="text-dusky-blue text-6" />
          </a>
        </Link>

        <ul className="hidden lg:grid gap-1 mt-4 mr-8">
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            تحقیق تجربه کاربری
          </li>
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            طراحی تجربه کاربری
          </li>
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            طراحی رابط کاربری
          </li>
        </ul>
      </div>

      <div className="flex flex-col self-end lg:w-1/2 mb-14">
        <Link href="/">
          <a className="flex items-start lg:items-center">
            <Text className="font-Bold text-green-blue w-36 lg:w-auto lg:text-5.5">
              طراحی و توسعه وبسایت و اپلیکیشن
            </Text>
            <SubText className="font-Medium text-3.5 text-dusky-blue mr-auto hidden lg:inline">
              مشاهده
            </SubText>
            <ChevronLeft className="text-dusky-blue text-6" />
          </a>
        </Link>

        <ul className="hidden lg:grid gap-1 mt-4 mr-8">
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            خدمات سرور
          </li>
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            توسعه و برنامه نویسی فرانت اند
          </li>
          <li className="font-Medium text-3.5 text-dark-slate-blue flex items-center before:content-['-'] before:ml-2">
            توسعه و برنامه نویسی بک اند
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
