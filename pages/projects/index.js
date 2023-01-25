import React, { useState } from "react";
import Layout from "../layout";
import Text from "../../components/specific/text";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "../../components/icons";
import clsx from "clsx";
const Projects = () => {
  const [fakeData, setFakeData] = useState(FakeProjects);
  const [fakeDataOngoingProjects, setFakeDataOngoingProjects] =
    useState(FakeOngoingProjects);

  if (1 === 2) {
    setFakeData("sda");
    setFakeDataOngoingProjects("ds  ");
  }

  return (
    <Layout>
      <div className="bg-pale-grey default-container pt-[1.812rem] lg:pt-[9.5rem]">
        <div className="service-header w-full mb-8 lg:mb-[3.25rem]">
          <div className="bg-seafoam w-[4.125rem] h-4  relative lg:w-[7.125rem]  lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4 whitespace-nowrap">
              پروژه ها
            </Text>
          </div>
        </div>

        <div>{<TabContent fakeData={fakeData} />}</div>
        <div>
          <Text className="font-Bold text-5 lg:text-8 text-dusky-blue mb-8 lg:mb-9 mt-24">
            پروژه های در حال انجام
          </Text>
          <div className="mb-[3.5rem]  lg:gap-x-[2.5rem] lg:flex lg:flex-row  lg:overflow-scroll hide-scrollbar lg:whitespace-nowrap lg:relative lg:mb-[5.812rem] ">
            {fakeDataOngoingProjects?.map(item => (
              <OngoingProjects
                key={item.id}
                image={item?.image}
                header={item.header}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

const SingleProject = ({ header, image, tag, href, width }) => {
  return (
    <div className=" pb-2 lg:pb-3.5  mb-8 border-b-2 border-light-grey-blue lg:mb-0 ">
      <div
        className={`h-[21.25rem] lg:h-[29.5rem] relative ${clsx(
          width === "small" ? "lg:w-[24.75rem] w-full" : "lg:w-[43.5rem] w-full"
        )}`}
      >
        <Image
          src={image}
          layout="fill"
          alt="image"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <div className="mt-3 lg:mt-5">
        <Text className="font-Bold text-4 text-dark-slate-blue lg:text-[22px]">
          {header}
        </Text>
      </div>
      <div className="flex flex-row justify-between items-center mt-1.5 lg:mt-4">
        <Text className=" text-dusky-blue text-3.5 lg:text-3.5">{tag}</Text>
        <Link href={href}>
          <a className="font-Medium text-3 lg:text-3.5 text-grey-blue flex flex-row justify-center items-center">
            مشاهده
            <ChevronLeft className="text-6" />
          </a>
        </Link>
      </div>
    </div>
  );
};

const TabContent = ({ fakeData }) => {
  return (
    <div className="my-8 lg:flex lg:flex-row lg:justify-between flex-wrap lg:gap-y-14">
      {fakeData?.map(item => (
        <SingleProject
          key={item.id}
          width={item.width}
          image={item.image}
          header={item.header}
          tag={item.tag}
          href={`/projects/${item.id}`}
        />
      ))}
    </div>
  );
};

export const FakeProjects = [
  {
    id: 1,
    width: "small",
    image: "/images/projec1.png",
    header: "پروژه شمس صادرات  ",
    tag: "U I /UX designer",
    projecTime: "3 ماه",
    servicesRendered: ["front  - end", "Back - end", "DewOps"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 2,
    width: "big",
    image: "/images/proj2.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "6 ماه ",
    servicesRendered: ["front  - end", "Back - end", "devops", "ui"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 3,
    width: "big",

    image: "/images/proj3.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "10 ماه",
    servicesRendered: ["front  - end", "Back - end", "devops", "ui"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 4,
    width: "small",

    image: "/images/proj4.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "4 ماه",
    servicesRendered: ["front  - end", "Back - end", "devops", "ui"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 5,
    width: "small",

    image: "/images/projec1.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "1 سال",
    servicesRendered: ["front  - end", "Back - end", "devops", "ui"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],

    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 6,
    width: "big",
    image: "/images/proj3.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "23 روز",
    servicesRendered: ["front  - end", "Back - end", "devops", "ui"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],

    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 7,
    width: "big",

    image: "/images/proj2.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "4 هفته",
    servicesRendered: ["front  - end", "Back - end", "DewOps", "DewOps"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],

    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 8,
    width: "small",

    image: "/images/proj4.png",
    header: "پروژه شمس صادرات ",
    tag: "U I /UX designer",
    projecTime: "3.5 ماه ",
    servicesRendered: ["front  - end", "Back - end", "DewOps", "DewOps"],
    TechnologiesProvided: [
      {
        name: "Html",
        logo: "/images/images.jfif"
      },
      {
        name: "css",
        logo: "/images/csslogo.png"
      },
      {
        name: "Javascript",
        logo: "/images/javascriplogo.jpg"
      },
      {
        name: "React",
        logo: "/images/react logo.jpg"
      },
      {
        name: "Query",
        logo: "/images/jquerylogo.png"
      }
    ],

    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  }
];

// the Ongoing projects

const OngoingProjects = ({ header, image, tag }) => {
  return (
    <div
      className={`w-full flex flex-row mb-5 lg:mb-0  lg:w-[30.75rem] border-b-2 border-light-grey-blue lg:border-none `}
    >
      <div className="w-[3.125rem] lg:w-[296px] h-[3.125rem] lg:h-[7.125rem] relative">
        <Image src={image} layout="fill" alt="image" />
      </div>
      <div className="w-full mr-3 lg:mr-6 flex flex-col justify-end lg:border-b-2 lg:border-light-grey-blue pb-3 ">
        <Text className="font-Bold text-4.5 text-dark-slate-blue lg:text-5.5">
          {header}
        </Text>

        <div className="w-full flex items-center mt-2 ">
          <Text className="text-dusky-blue text-3 lg:text-3.5">{tag}</Text>
        </div>
      </div>
    </div>
  );
};

const FakeOngoingProjects = [
  {
    id: 1,
    image: "/images/proj2.png",
    header: "پروژه شمس صادرات  ",
    tag: "U I /UX designer موبایل"
  },

  {
    id: 2,
    image: "/images/projec1.png",
    header: "پروژه برکت",
    tag: "U I /UX designer موبایل"
  },
  {
    id: 3,
    image: "/images/proj3.png",
    header: "پروژه کاردان",
    tag: "U I /UX designer موبایل"
  },
  {
    id: 4,
    image: "/images/proj4.png",
    header: "پروژه کاردان",
    tag: "U I /UX designer موبایل"
  }
];
