import clsx from "clsx";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Text from "../components/base/text";
import { ChevronLeft } from "../components/icons";
import Collaps from "../components/specific/collapse";
import useWindowSize from "../hooks/useWindowSize";
import Layout from "./layout";

const Services = () => {
  const [active, setActive] = useState(1);
  const { lg } = useWindowSize();

  const serviceHeader = useRef();
  useEffect(() => {
    let s = gsap.from(serviceHeader.current, {
      duration: 0.75,
      x: 100,
      opacity: 0,
      delay: 0.2
    });

    return () => {
      s.kill();
    };
  }, []);

  return (
    <Layout
      containerClassName={`bg-white bg-no-repeat bg-pos-services-mob lg:bg-pos-services-desk lg:bg-services-Descktop-size lg:[background-attachment:fixed] ${clsx(
        {
          "bg-services-mob-1 lg:bg-services-desk-1": active === 1,
          "bg-services-mob-2 lg:bg-services-desk-2": active === 2,
          "bg-services-mob-3 lg:bg-services-desk-3": active === 3
        }
      )}`}
      footer={false}
    >
      <div className="px-8 pt-[1.812rem] lg:px-28 lg:pt-[9.5rem]">
        <div
          ref={serviceHeader}
          className="w-full mb-[1.875rem] lg:mb-[2rem] lg:fixed"
        >
          <div className="bg-seafoam w-[4.125rem] h-4 relative lg:w-[7.125rem] lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4">
              خدمات
            </Text>
          </div>
        </div>
        {lg ? (
          <div className="pr-[30%] pl-[9%] mt-8">
            <TabDesktop data={fakeData[0]} active={1} setActive={setActive} />
            <TabDesktop
              className="mt-40"
              data={fakeData[1]}
              active={2}
              setActive={setActive}
            />
            <TabDesktop
              className="mt-40 mb-20"
              data={fakeData[2]}
              active={3}
              setActive={setActive}
            />
          </div>
        ) : (
          <>
            <div className="w-full hide-scrollbar overflow-scroll flex flex-row whitespace-nowrap relative">
              <div className="w-[32.5rem] h-0.5 bg-cloudy-blue absolute bottom-0 opacity-60 "></div>

              <button
                className={`font-Bold text-base text-dark-slate-blue leading-7 ${clsx(
                  active === 1 && "border-b-2 border-dusky-blue"
                )}`}
                onClick={() => {
                  setActive(1);
                }}
              >
                مشاوره
              </button>
              <button
                className={`font-Bold text-base text-dark-slate-blue leading-7 mr-8 border-0 ${clsx(
                  active === 2 && "border-b-2 border-dusky-blue transition-all"
                )}`}
                onClick={() => {
                  setActive(2);
                }}
              >
                طراحی رابط و تجربه کاربری
              </button>
              <button
                className={`font-Bold text-base text-dark-slate-blue leading-7 mr-8 ${clsx(
                  active === 3 && "border-b-2 border-dusky-blue"
                )}`}
                onClick={() => {
                  setActive(3);
                }}
              >
                طراحی و توسعه وبسایت و اپلیکیشن
              </button>
            </div>
            <div className="mt-10 mb-8">
              <Tab data={fakeData[active - 1]} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Services;

const Tab = ({ className, data }) => {
  const [expanded, setExpanded] = useState(null);
  const buttons = useRef();

  useEffect(() => {
    let a = gsap.from(buttons.current, {
      duration: 0.75,
      y: 100,
      opacity: 0,
      delay: 0.2
    });

    return () => {
      a.kill();
    };
  }, [data]);

  return (
    <div className={clsx("w-full flex flex-col", className)}>
      <Text className="text-dark-slate-blue font-SemiBold leading-7 lg:font-Medium lg:text-lg">
        تیم پروداپت همواره آماده ارایه مشاوره تخصصی در زمینه‌های مختلف کسب و کار
        دیجیتال (تقویت تجربه کاربری و افزایش جذب کاربر، باز طراحی سایت و همینطور
        ابعاد فنی و برنامه‌نویسی) می‌باشد.
      </Text>

      <div
        ref={buttons}
        className="w-3/4 mt-[9.75rem] flex-col items-end justify-end self-end lg:self-auto lg:w-full"
      >
        {data.map(item => (
          <div className="w-full mb-7" key={item.id}>
            <button
              className={`w-full flex flex-row justify-between whitespace-nowrap lg:h-full`}
              onClick={() =>
                expanded === item.id ? setExpanded(null) : setExpanded(item.id)
              }
            >
              <Text
                className={`font-Bold text-sm text-dark-slate-blue lg:text-xl ${clsx(
                  expanded === item.id &&
                    "text-green-blue-light lg:text-dark-slate-blue"
                )} `}
              >
                {item.title}
              </Text>

              <div className="flex flex-row items-center">
                <ChevronLeft
                  className={`text-dark-slate-blue text-xl duration-300 ${clsx(
                    expanded === item.id &&
                      "-rotate-90 duration-300 text-green-blue-light"
                  )}`}
                />
              </div>
            </button>
            <Collaps
              open={expanded === item.id}
              duration={400}
              className="mt-4 font-Medium text-dusky-blue text-xs leading-6 lg:text-sm lg:font-Regular lg:leading-8"
            >
              {item.description}
            </Collaps>
          </div>
        ))}
      </div>
    </div>
  );
};

const TabDesktop = ({ className, data, active, setActive }) => {
  const [expanded, setExpanded] = useState(null);
  const serviceTitle = useRef();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setActive(active);
  }, [inView, setActive, active]);

  useEffect(() => {
    let a = gsap.from(serviceTitle.current, {
      duration: 0.75,
      y: 100,
      opacity: 0,
      delay: 0.2
    });

    return () => {
      a.kill();
    };
  }, [data]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className={clsx("w-full flex flex-col", className)}
    >
      <Text
        ref={serviceTitle}
        className="w-full font-SemiBold text-dark-slate-blue text-8 mb-5"
      >
        {clsx({
          مشاوره: active === 1,
          "طراحی رابط و تجربه کاربری": active === 2,
          "طراحی و توسعه وبسایت و اپلیکیشن": active === 3
        })}
      </Text>

      <Text className="text-dark-slate-blue font-SemiBold leading-7 lg:font-Medium lg:text-lg">
        تیم پروداپت همواره آماده ارایه مشاوره تخصصی در زمینه‌های مختلف کسب و کار
        دیجیتال (تقویت تجربه کاربری و افزایش جذب کاربر، باز طراحی سایت و همینطور
        ابعاد فنی و برنامه‌نویسی) می‌باشد.
      </Text>

      <div className="w-3/4 mt-[9.75rem] flex-col items-end justify-end self-end lg:self-auto lg:w-full">
        {data.map(item => (
          <div className="w-full mb-7" key={item.id}>
            <button
              className={`w-full flex flex-row justify-between whitespace-nowrap lg:h-full`}
              onClick={() =>
                expanded === item.id ? setExpanded(null) : setExpanded(item.id)
              }
            >
              <Text
                className={`font-Bold text-sm text-dark-slate-blue lg:text-xl ${clsx(
                  expanded === item.id &&
                    "text-green-blue-light lg:text-dark-slate-blue"
                )} `}
              >
                {item.title}
              </Text>

              <div className="flex flex-row items-center">
                <Text
                  className={`font-Medium text-sm text-dark-slate-blue ${clsx(
                    expanded === item.id && "lg:text-green-blue-light"
                  )}`}
                >
                  مشاهده
                </Text>

                <ChevronLeft
                  className={`text-dark-slate-blue text-xl duration-300 ${clsx(
                    expanded === item.id &&
                      "-rotate-90 duration-300 text-green-blue-light"
                  )}`}
                />
              </div>
            </button>
            <Collaps
              open={expanded === item.id}
              duration={400}
              className="mt-4 font-Medium text-dusky-blue text-xs leading-6 lg:text-sm lg:font-Regular lg:leading-8"
            >
              {item.description}
            </Collaps>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const fakeData = [
  [
    {
      id: 1,
      title: "مشاوره محصول",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    },
    {
      id: 2,
      title: "طراحی و مشاوره استراتژی دیجیتال",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    },
    {
      id: 3,
      title: "مشاوره کسب وکار آنلاین",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    }
  ],
  [
    {
      id: 4,
      title: "تحقیق تجربه کاربری",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    },
    {
      id: 5,
      title: "طراحی تجربه کاربری",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    },
    {
      id: 6,
      title: "طراحی رابط کاربری",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    }
  ],
  [
    {
      id: 7,
      title: "خدمات سرور",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    },
    {
      id: 8,
      title: "توسعه و برنامه نویسی فرانت اند",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    },
    {
      id: 9,
      title: "توسعه و برنامه نویسی بک اند",
      description:
        "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
    }
  ]
];
