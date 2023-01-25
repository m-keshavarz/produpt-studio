import React, { useState } from "react";
import { FakeProjects } from "./index";
import Text from "../../components/specific/text";
import Image from "next/image";
import Layout from "../layout";
import Collaps from "../../components/specific/collapse";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../../components/specific/button";
import Link from "next/link";

import {
  Dots,
  Forward,
  Telegram,
  Whatsapp,
  Attach,
  ChevronLeft
} from "../../components/icons";
export async function getStaticProps({ params }) {
  const { id } = params;
  const project = FakeProjects.find(item => item.id === +id) || {};
  return {
    props: { project }
  };
}

export async function getStaticPaths() {
  const paths = FakeProjects.map(project => ({
    params: { id: project.id + "" }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const SingleProject = ({ project }) => {
  const { lg } = useWindowSize();
  const [openColl, setOpenColl] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: project.header,
          text: project.header,
          url: window.location.href
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      console.log("share api is not supported in this device!");
    }
  };

  return (
    <Layout>
      <div className="default-container pt-10 lg:pt-[9.5rem] relative mb-20 bg-pale-grey">
        <div className="lg:flex lg:flex-row justify-between">
          <div className="lg:w-[98%]">
            <div className="h-[40vh] lg:h-[30.187rem]  relative">
              <Image src={project.image} layout="fill" alt="image" priority />
            </div>
            <div className="w-full border-b-2 border-light-grey-blue mt-3 lg:mt-8 pb-2 lg:pb-3">
              <Text className="font-Bold text-4 lg:text-6.5 text-dark-slate-blue ">
                {project.header}
              </Text>
              <div className="w-full flex flex-row justify-between mt-1.5 lg:mt-4">
                <Text className=" font-Medium text-dusky-blue text-3.5 lg:text-3.5 ">
                  {project.tag}
                </Text>
                <Text className="font-Medium text-grey-blue text-3 lg:text-3">
                  زمان انجام پروژه :{project.projecTime}
                </Text>
              </div>
            </div>
            <div className="mt-9 lg:mt-14">
              <Text className="text-3.5 text-dark-slate-blue leading-6 lg:text-4 lg:leading-8">
                {project.description}
              </Text>
            </div>
          </div>

          {/* menu link and tag */}
          <div className="w-full shadow-shsh fixed bottom-0 right-0 z-1500 px-8 pt-0 bg-pale-grey lg:mr-[4.5rem]  py-5 lg:sticky lg:w-[16rem] lg:flex lg:flex-col lg:items-end lg:shadow-none lg:top-[9.5rem] lg:left-0 lg:z-0 lg:h-96 ">
            <div className="  lg:w-full flex flex-row justify-between items-center lg:flex-col lg:items-end ">
              {lg ? (
                <div className=" lg:w-full flex flex-row pb-4 border-b-2 border-cloudy-blue justify-center">
                  <a
                    className="w-8 h-8 lg:w-[2.125rem] lg:h-[2.125rem] bg-white shadow-pin rounded-full flex justify-center items-center"
                    href={`https://t.me/share/url?url=${window.location.href}`}
                  >
                    <Telegram className="text-green-blue-light  text-5" />
                  </a>
                  <a
                    className="w-8 h-8 lg:w-[2.125rem] lg:h-[2.125rem] bg-white shadow-pin rounded-full flex justify-center items-center mr-3"
                    href={`whatsapp://send?text=${window.location.href + ""}`}
                  >
                    <Whatsapp className="text-green-blue-light  text-6" />
                  </a>
                  <button
                    className="whitespace-nowrap px-2 py-1 bg-white shadow-pin rounded-full flex justify-center items-center mr-3 font-Medium text-dark-slate-blue text-3.5 "
                    onClick={copy()}
                  >
                    <Attach className="text-green-blue-light  text-6 ml-1" />
                    کپی لینک
                  </button>
                </div>
              ) : (
                <div className="flex flex-row">
                  <button
                    className="w-8 h-8 bg-white shadow-pin rounded-full flex justify-center items-center"
                    onClick={() => setOpenColl(state => !state)}
                  >
                    <Dots className="text-green-blue-light  text-6" />
                  </button>
                  <button
                    className="w-8 h-8 bg-white shadow-pin rounded-full flex justify-center items-center mr-3"
                    onClick={() => window.location.href}
                  >
                    <Forward
                      className="text-green-blue-light  text-4"
                      onClick={() => handleShare()}
                    />
                  </button>
                </div>
              )}

              <Button
                size={lg ? "big" : "small"}
                radius="full"
                className="text-white font-Medium text-3 lg:w-full lg:mt-4 lg:text-4.5"
              >
                مشاهده سایت
              </Button>
            </div>

            {lg ? (
              <div className="border-t-2  flex flex-row flex-wrap  lg:border-none lg:w-full mt-3.5 ">
                <div className="w-full ">
                  <Text className="font-SemiBold text-5.5    text-dark-slate-blue  mb-4">
                    خدمات ارائه شده{" "}
                  </Text>
                  <div className="flex flex-col justify-between items-end gap-y-3 mt-4.5">
                    {project.servicesRendered.map(item => (
                      <div
                        className="flex flex-row-reverse items-center "
                        key={item}
                      >
                        <div className="bg-very-light-blue rounded-sm w-4 h-4"></div>
                        <Text className=" text-grey-blue text-4 ml-1 border-b-2 border-grey-blue ">
                          {item}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Text className="font-SemiBold text-5.5    text-dark-slate-blue  mb-4 whitespace-nowrap">
                    تکنولوژی های ارائه شده
                  </Text>
                  <div className="grid grid-cols-2 gap-y-3 mt-4">
                    {project.TechnologiesProvided.map(item => (
                      <div
                        className="flex flex-row-reverse items-center "
                        key={item}
                      >
                        <div className="rounded-md w-5 h-5 relative">
                          <Image src={item.logo} layout="fill" alt="logo" />
                        </div>
                        <Text className="font-Bold text-grey-blue text-4 ml-1   border-b-2 border-grey-blue ">
                          {item.name}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Collaps open={lg ? true : openColl} className="">
                <div className="border-t-2 mt-4 pt-4 lg:border-none lg:w-full lg:mt-10 ">
                  <div>
                    <Text className="font-SemiBold text-4 text-dark-slate-blue  mb-4">
                      خدمات ارائه شده
                    </Text>
                    <div className="flex flex-row justify-between flex-wrap gap-x-12  gap-y-2">
                      {project.servicesRendered.map(item => (
                        <div
                          className="flex flex-row-reverse items-center "
                          key={item}
                        >
                          <div className="bg-very-light-blue rounded-sm w-3.5 h-3.5"></div>
                          <Text className=" text-grey-blue text-2.5 lg:text-3.5  m-1 border-b-2 border-grey-blue ">
                            {item}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <Text className="font-SemiBold text-4 text-dark-slate-blue  mb-4">
                      تکنولوژی های ارائه شده
                    </Text>
                    <div className="flex flex-row justify-between flex-wrap gap-x-12 gap-y-2">
                      {project.TechnologiesProvided.map(item => (
                        <div
                          className="flex flex-row-reverse items-center "
                          key={item?.name}
                        >
                          <div className="rounded-md w-3.5 h-3.5 relative">
                            <Image src={item.logo} layout="fill" alt="logo" />
                          </div>
                          <Text className=" text-grey-blue text-2.5 lg:text-3.5  m-1 border-b-2 border-grey-blue ">
                            {item.name}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Collaps>
            )}
          </div>
        </div>
        {/* related articles */}
        <div>
          <Text className="font-Bold text-5 lg:text-8 text-dusky-blue mb-8 lg:mb-6 mt-24 ">
            پروژه‌های دیگر
          </Text>
          <div className="lg:flex lg:flex-row lg:overflow-scroll hide-scrollbar lg:whitespace-nowrap lg:gap-x-[2.5rem]">
            {FakeVisitedArticle?.map(item => (
              <RelatedArticle
                key={item.id}
                image={item?.image}
                header={item.header}
                createdAt={item.createdAt}
                tag={item.tag}
                href={`/projects/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProject;
const RelatedArticle = ({ header, image, createdAt, tag, href }) => {
  const { lg } = useWindowSize();

  return (
    <div
      className={`w-full flex flex-row mb-5 lg:mb-0 pb-5  lg:pb-8 lg:w-auto border-b-2 border-light-grey-blue lg:border-none `}
    >
      <div className="w-[3.125rem] h-[3.125rem] lg:w-[20.25rem] lg:h-[7.125rem] relative">
        <Image src={image} layout="fill" alt="image" />
      </div>
      <div className="w-full mr-3 lg:mr-6 flex flex-col justify-end  lg:border-b-2 lg:border-light-grey-blue lg:pb-3">
        <Text className="font-Bold  text-dark-slate-blue text-4.5 lg:text-5.5">
          {header}
        </Text>
        <div className="flex flex-row justify-between items-center-center">
          <div className="w-full flex items-center mt-2">
            <Text className="font-Medium  text-dusky-blue text-3  ml-5">
              {tag}
            </Text>
          </div>
          <Link href={href}>
            <a className="font-Medium text-3.5 text-dusky-blue flex justify-center items-center">
              {lg ? "مشاهده" : ""}
              <ChevronLeft className="text-5 " />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FakeVisitedArticle = [
  {
    id: 1,
    image: "/images/projec1.png",
    header: "پروژه شمس صادرات  ",
    tag: "U I /UX designer موبایل",
    createdAt: "25 بهمن ۱۴۰۰"
  },
  {
    id: 2,
    image: "/images/proj2.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer موبایل",
    createdAt: "19 آبان 1399"
  },
  {
    id: 3,
    image: "/images/proj3.png",
    header: "پروژه شمس صادرات  ",
    tag: "U I /UX designer موبایل",
    createdAt: "۲ مهر ۱۴۰۰"
  },
  {
    id: 4,
    image: "/images/proj4.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer موبایل",
    createdAt: "12 فروردین ۱۴۰۰"
  }
];
