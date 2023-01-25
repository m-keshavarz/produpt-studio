import React, { useState, useRef } from "react";
import Image from "next/image";
import Button from "../specific/button";
import Text from "../specific/text";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Hamburger } from "../icons";
import clsx from "clsx";
import router, { useRouter } from "next/router";

// images
import logo from "../../public/images/Logo.png";
import whiteLogo from "../../public/images/whiteLogo.png";
import useScrollY from "../../hooks/useScrollY";

const activeClass =
  "border-b-2 border-green-blue pb-1 lg:pb-0 lg:border-none lg:after:absolute lg:after:-bottom-2 lg:after:w-[140%] lg:after:h-[3px] lg:after:bg-green-blue ";

const Header = ({ white = false, fixed = true }) => {
  const { lg } = useWindowSize();

  const ref = useRef();
  const btnRef = useRef();
  const [showHamburgeMenu, setShowHambergurMenu] = useState(false);
  useOnClickOutside(ref, () => setShowHambergurMenu(false), btnRef);

  const scrollY = useScrollY();

  const router = useRouter();

  return (
    <>
      {lg ? (
        <header
          className={`flex items-center w-full pt-8 default-container fixed top-0 right-0 z-50 ${clsx(
            scrollY && fixed && "custom-backdrop-blur py-6 lg:py-8"
          )}`}
        >
          <div className="relative cursor-pointer w-[92px] 3xl:w-[140px]">
            <Image
              src={white ? whiteLogo : logo}
              alt="logo"
              layout="responsive"
              priority
            />
          </div>

          <ul className="grid grid-flow-col items-center mr-auto gap-6 xl:gap-10">
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              } `}
            >
              <Link href="/">
                <a
                  className={`flex flex-col items-center relative ${
                    router.pathname === "/" && activeClass
                  } ${white && "border-very-light-blue border-2 "}`}
                >
                  خانه
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              } `}
            >
              <Link href="/services">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    router.pathname === "/services" && activeClass
                  )}`}
                >
                  خدمات
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              } `}
            >
              <Link href="/projects">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    (router.pathname === "/projects" && activeClass) ||
                      (router.pathname === "/projects/[id]" && activeClass)
                  )}`}
                >
                  پروژه‌ها
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              }`}
            >
              <Link href="/articles">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    (router.pathname === "/articles" && activeClass) ||
                      (router.pathname === "/articles/[id]" && activeClass)
                  )}`}
                >
                  بلاگ
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              }`}
            >
              <Link href="/consulting">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    router.pathname === "/consulting" && activeClass
                  )}`}
                >
                  مشاوره
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              }`}
            >
              <Link href="/about-us">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    router.pathname === "/about-us" && activeClass
                  )}`}
                >
                  درباره ما
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              }`}
            >
              <Link href="/contact-us">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    router.pathname === "/contact-us" && activeClass
                  )}`}
                >
                  تماس با ما
                </a>
              </Link>
            </li>
            <li
              className={`text-sm xl:text-base font-Medium text-dark-slate-blue whitespace-nowrap ${
                white && "text-white"
              } `}
            >
              <Link href="/jobs">
                <a
                  className={`flex flex-col items-center relative ${clsx(
                    (router.pathname === "/jobs" && activeClass) ||
                      (router.pathname === "/jobs/[id]" && activeClass)
                  )}`}
                >
                  فرصت شغلی
                </a>
              </Link>
            </li>
            <li>
              <Button
                bg={white ? "white" : "green"}
                size="small"
                radius="full"
                className={`text-sm  font-medium whitespace-nowrap px-6 shadow-md ${
                  white ? "text-green-blue" : "text-white"
                }`}
              >
                پنل مشتریان
              </Button>
            </li>
          </ul>
        </header>
      ) : (
        <>
          <header
            className={`flex items-center justify-between px-8 w-full h-16 fixed top-0 right-0 z-50 ${clsx(
              scrollY && fixed && "custom-backdrop-blur py-6"
            )}`}
          >
            <button className="flex items-center justify-center " ref={btnRef}>
              <Hamburger
                className={`${
                  white ? "text-white" : "text-dark-slate-blue"
                } text-2xl z-1500`}
                onClick={() => {
                  setShowHambergurMenu(state => !state);
                }}
              />
            </button>
            <Link href="/">
              <a className="relative w-16 sm:w-20">
                <Image
                  src={white ? whiteLogo : logo}
                  alt="logo"
                  layout="responsive"
                  priority
                />
              </a>
            </Link>
          </header>
          {fixed && <div className="w-full h-16 flex-shrink-0 "></div>}
          <div
            ref={ref}
            className={`w-1/2  max-h-full hide-scrollbar z-1000 overflow-y-scroll fixed  shadow-articlesShadow custom-backdrop-blur px-8 pt-20 pb-8 opacity-100 transition-all duration-500 top-0 right-0  ${clsx(
              !showHamburgeMenu && "-right-full"
            )}`}
          >
            <button
              className="flex items-center justify-center absolute top-4 "
              ref={btnRef}
            >
              <Hamburger
                className={`${
                  white ? "text-white" : "text-dark-slate-blue"
                } text-2xl z-1500`}
                onClick={() => {
                  setShowHambergurMenu(state => !state);
                }}
              />
            </button>
            <ul className="grid gap-4">
              <li
                className={`text-sm xl:text-base font-SemiBold font-semibold text-dark-slate-blue whitespace-nowrap w-8`}
              >
                <Link href="/">
                  <a
                    className={`flex flex-col relative ${clsx(
                      router.pathname === "/" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    خانه
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-11">
                <Link href="/projects">
                  <a
                    className={`flex flex-col  relative ${clsx(
                      router.pathname === "/projects" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    پروژه‌ها
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-11">
                <Link href="/services">
                  <a
                    className={`flex flex-col  relative ${clsx(
                      router.pathname === "/services" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    خدمات
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-7">
                <Link href="/articles ">
                  <a
                    className={`flex flex-col  relative ${clsx(
                      router.pathname === "/articles" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    بلاگ
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-11">
                <Link href="/consulting">
                  <a
                    className={`flex flex-col relative ${clsx(
                      router.pathname === "/consulting" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    مشاوره
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-12">
                <Link href="/about-us">
                  <a
                    className={`flex flex-col relative ${clsx(
                      router.pathname === "/about-us" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    درباره ما
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-14">
                <Link href="/contact-us">
                  <a
                    className={`flex flex-col relative ${clsx(
                      router.pathname === "/contact-us" && activeClass
                    )} ${white && "after:bg-white"}`}
                  >
                    تماس با ما
                  </a>
                </Link>
              </li>
              <li className="text-sm xl:text-base font-Medium  text-dark-slate-blue whitespace-nowrap w-[5rem]">
                <Link href="/jobs">
                  <a
                    className={`flex flex-col relative ${clsx(
                      (router.pathname === "/jobs" && activeClass) ||
                        (router.pathname === "/jobs/[id]" && activeClass)
                    )} ${white && "after:bg-white"}`}
                  >
                    فرصت شغلی
                  </a>
                </Link>
              </li>
            </ul>
            <div className="mt-8 w-full border-t-2 border-t-dark-slate-blue pt-5">
              <div className="w-full p-1 rounded-full shadow-md flex justify-center items-center bg-green-blue">
                <Text className="text-white text-sm font-Medium">
                  پنل مشتریان
                </Text>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
