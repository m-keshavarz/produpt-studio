import React from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "../components/specific/text";
import MainHeader from "../components/mainHeader";
import useWindowSize from "../hooks/useWindowSize";
import whiteLogo from "../public/images/whiteLogo.png";

import {
  PinRounded,
  PhoneRounded,
  EnvelopRounded,
  Linkedin,
  Instagram
} from "../components/icons";
import clsx from "clsx";

const Layout = ({
  children,
  containerClassName,
  fixed = true,
  white,
  footer = true
}) => {
  return (
    <div className={clsx("flex flex-col ", containerClassName)}>
      <MainHeader fixed={fixed} white={white} />
      {children}
      {footer && <MainFooter />}
    </div>
  );
};

export default Layout;

const MainFooter = () => {
  const { lg } = useWindowSize();
  return (
    <footer className="bg-dark-slate-blue flex flex-col px-10 py-14 text-white lg:flex-row lg:w-full lg:justify-between lg:px-[6.623rem] lg:py-[4.412rem]">
      {/* useful links */}

      {!lg && (
        <div className="flex justify-between mb-14">
          <div className="flex flex-col">
            <Text className="font-SemiBold text-4.5 mb-6">بلاگ</Text>
            <Link href="/">
              <a className="font-Medium text-3.5 mb-2">خانه</a>
            </Link>
            <Link href="/">
              <a className="font-Medium text-3.5">مشاوره</a>
            </Link>
          </div>
          <div className="flex flex-col">
            <Text className="font-SemiBold text-4.5 mb-6">پروژه‌ها</Text>
            <Link href="/">
              <a className="font-Medium text-3.5 mb-2">درباره ما</a>
            </Link>
            <Link href="/">
              <a className="font-Medium text-3.5">تماس با ما</a>
            </Link>
          </div>
          <div className="flex flex-col">
            <Text className="font-SemiBold text-4.5 mb-6">پروژه‌ها</Text>
            <Link href="/">
              <a className="font-Medium text-3.5 mb-2">درباره ما</a>
            </Link>
            <Link href="/">
              <a className="font-Medium text-3.5">تماس با ما</a>
            </Link>
          </div>
        </div>
      )}

      {/* contact-us */}
      <div className="flex flex-col mb-10  lg:mb-0 ">
        <div className="flex items-center mb-2 lg:mb-3">
          <PinRounded className="text-10 ml-2 lg:text-11" />
          <Text className="text-3 lg:text-3.5">
            جنت آباد جنوبی لاله غربی جنب کوچه نمازی پ ۲۸ واحد۴
          </Text>
        </div>
        <div className="flex items-center mb-2 lg:mb-3">
          <PhoneRounded className="text-10 ml-2 lg:text-11" />
          <a href="tel:02144656228" dir="ltr" className="text-3.5">
            021-44656228
          </a>
        </div>
        <div className="flex items-center">
          <EnvelopRounded className="text-10 ml-2 lg:text-11" />
          <a href="mailto:info@produpt.com" className="text-3.5">
            info@produpt.com
          </a>
        </div>
      </div>

      {lg && (
        <div className="flex justify-between w-1/3">
          <div className="flex flex-col justify-between">
            <Text className="font-SemiBold text-4.5 mb-6 lg:text-5 lg:mb-6">
              بلاگ
            </Text>
            <Link href="/">
              <a className="font-Medium text-3.5 mb-2 lg:text-4 lg:mb-3.5">
                خانه
              </a>
            </Link>
            <Link href="/">
              <a className="font-Medium text-3.5 lg:text-4 lg:mb-3.5">مشاوره</a>
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <Text className="font-SemiBold text-4.5 mb-6 lg:text-5 lg:mb-6">
              پروژه‌ها
            </Text>
            <Link href="/">
              <a className="font-Medium text-3.5 mb-2 lg:text-4 lg:mb-3.5">
                درباره ما
              </a>
            </Link>
            <Link href="/">
              <a className="font-Medium text-3.5 lg:text-4 lg:mb-3.5">
                تماس با ما
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <Text className="font-SemiBold text-4.5 mb-6 lg:text-5 lg:mb-6">
              پروژه‌ها
            </Text>
            <Link href="/">
              <a className="font-Medium text-3.5 mb-2 lg:text-4 lg:mb-3.5">
                درباره ما
              </a>
            </Link>
            <Link href="/">
              <a className="font-Medium text-3.5 lg:text-4 lg:mb-3.5">
                تماس با ما
              </a>
            </Link>
          </div>
        </div>
      )}

      {/* socials and logo */}
      <div className="flex items-end  lg:flex-col-reverse lg:justify-between lg:items-center">
        <div className="flex flex-row lg:justify-center ">
          <a
            href="https://www.linkedin.com/company/produpt/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="text-6 lg:text-7" />
          </a>
          <a
            href="https://www.instagram.com/produptco/"
            target="_blank"
            rel="noreferrer"
            className="mr-1"
          >
            <Instagram className="text-6 lg:text-7" />
          </a>
        </div>

        <div className="mr-auto w-[90px] lg:w-[8.75rem]">
          <Image src={whiteLogo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};
