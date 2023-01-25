import React, { useState, useEffect } from "react";
import Text from "../../components/specific/text";
import { ChevronLeft } from "../../components/icons";
import Layout from "../layout";
import useWindowSize from "../../hooks/useWindowSize";
import Link from "next/link";
import Image from "next/image";
import articleImg from "../../public/images/mvmnt_web_post_hero@2x.png";
import articleImg2 from "../../public/images/test1.jpg";
import articleImg3 from "../../public/images/test2.jpg";
import { useRouter } from "next/router";
const Articles = () => {
  const { query } = useRouter();

  const { lg } = useWindowSize();

  const [active, setActive] = useState(query.name || "همه");
  const [showImage, setShowImage] = React.useState(fakeHeadeArticles[0]);

  const [fakeData, setFakeData] = useState(FakeArticles);
  const [fakeDatavisited, setFakeDataVisited] = useState(FakeVisitedArticle);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    if (active === "همه") {
      setFakeData(FakeArticles);
      setFakeDataVisited(FakeVisitedArticle);
    } else {
      setFakeData(FakeArticles?.filter(it => it.tag === active));
      setFakeDataVisited(FakeVisitedArticle?.filter(it => it.tag === active));
    }
  }, [active]);
  if (1 === 2) {
    setPage(2);
  }

  useEffect(() => {
    if (query.name) {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: "smooth"
      });
    }
  }, []);

  return (
    <Layout>
      <div className="bg-pale-grey default-container pt-[4.812rem] lg:pt-[9.5rem]">
        {/* <Header /> */}
        <div className="service-header w-full mb-[1.875rem] lg:mb-[3.25rem]  ">
          <div className="bg-seafoam w-[4.125rem] h-4  relative lg:w-[7.125rem]  lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4">
              بلاگ
            </Text>
          </div>
        </div>
        <div className="flex flex-col mt-8 sm:w-1/2 sm:h-full sm:pr-0 sm:pl-0 lg:mt-0 lg:flex-row lg:w-full">
          <div className="flex flex-col lg:flex-row w-full">
            {lg && (
              <div className="relative w-1/2 flex-shrink-0 min-h-[42vh] custom-h-full:min-h-[50vh]">
                <Image src={showImage.image} alt="project" layout="fill" />
              </div>
            )}

            <div className="grid gap-6 lg:gap-0 lg:flex-grow">
              {articlesMaker(fakeHeadeArticles, { page, per_page: 3 }).map(
                article => (
                  <HeaderArticles
                    key={article.id}
                    header={article.header}
                    image={article.image}
                    tag={article.tag}
                    createdAt={article.createdAt}
                    link={article.link}
                    onMouseEnter={() => {
                      setShowImage(article);
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-full mt-[4.5rem] z-10 lg:mt-32 hide-scrollbar lg:px-28  lg:pb-3  overflow-scroll flex flex-row justify-between whitespace-nowrap relative ">
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue  leading-7 lg:pb-3 pb-2.5 ${
              active === "همه" && " border-b-2 border-dusky-blue "
            }`}
            onClick={() => {
              setActive("همه");
            }}
          >
            همه
          </button>
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue leading-7 mr-12 border-0 lg:pb-3  pb-2.5 ${
              active === "کسب و کار" && " border-b-2 border-dusky-blue "
            }`}
            onClick={() => {
              setActive("کسب و کار");
            }}
          >
            کسب و کار
          </button>
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue  leading-7 mr-12 lg:pb-3  pb-2.5 ${
              active === "دیزاین" && " border-b-2 border-dusky-blue"
            }`}
            onClick={() => {
              setActive("دیزاین");
            }}
          >
            دیزاین
          </button>
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue  leading-7 mr-12 lg:pb-3  pb-2.5 ${
              active === "برنامه نویسی" && " border-b-2 border-dusky-blue"
            }`}
            onClick={() => {
              setActive("برنامه نویسی");
            }}
          >
            برنامه نویسی
          </button>
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue  leading-7 mr-12 lg:pb-3  pb-2.5 ${
              active === "2همه" && " border-b-2 border-dusky-blue"
            }`}
            onClick={() => {
              setActive("2همه");
            }}
          >
            همه
          </button>
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue  leading-7 mr-12 lg:pb-3  pb-2.5 ${
              active === "2کسب و کار" && " border-b-2 border-dusky-blue"
            }`}
            onClick={() => {
              setActive("2کسب و کار");
            }}
          >
            کسب و کار
          </button>
          <button
            className={`font-Bold text-base lg:text-5 text-dark-slate-blue  leading-7 mr-12 lg:pb-3  pb-2.5 ${
              active === "2دیزاین" && "border-b-2 border-dusky-blue "
            }`}
            onClick={() => {
              setActive("2دیزاین");
            }}
          >
            دیزاین
          </button>
        </div>
        <div className="w-full h-0.5 bg-cloudy-blue relative lg:-translate-y-3.5 -translate-y-0.5 "></div>

        <div>{<TabContent fakeData={fakeData} />}</div>
        <div>
          <Text className="font-Bold text-5 lg:text-8 text-dusky-blue mb-8 lg:mb-6 mt-24">
            پربازدیدترین مقالات
          </Text>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-[3.125rem] lg:gap-y-14">
            {fakeDatavisited?.map((item, index) => (
              <VisitedArticle
                hasBorder={lg ? index < FakeVisitedArticle.length - 2 : true}
                key={item.id}
                image={item?.image}
                header={item.header}
                createdAt={item.createdAt}
                tag={item.tag}
                href={`/articles/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;

////Home Single Article for header compopnent

const HeaderArticles = ({
  header,
  image,
  tag,
  createdAt,
  link,
  onMouseEnter
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="flex flex-col shadow-articlesShadow h-[16.25vh] lg:h-auto lg:pr-8 lg:py-4 relative transition duration-250 group lg:hover:bg-very-light-blue"
    >
      <Link href={link}>
        <a className="relative flex w-full h-full lg:hidden">
          <Image src={image} alt="article" layout="fill" priority />
        </a>
      </Link>
      <div className="absolute lg:static bottom-0 right-0 w-[86%] iphone5:w-full bg-white lg:bg-transparent h-7.5 lg:h-8 overflow-hidden flex pr-4 pl-2 lg:p-0 lg:mb-4">
        <Link href={link}>
          <a className="text-dusky-blue font-Bold text-sm lg:text-4.5 leading-loose lg:leading-relaxed">
            {header}
          </a>
        </Link>
      </div>
      <div className="lg:flex lg:w-4/5 lg:justify-between hidden">
        <div className="flex items-center justify-center">
          <Text className="bg-projects py-[6px] px-4 text-dark-slate-blue text-sm shadow-md rounded-full ml-5">
            {tag}
          </Text>
          <Text className="font-Medium text-grey-blue text-sm">
            {createdAt}
          </Text>
        </div>
        <Link href={link}>
          <a className="text-dusky-blue flex items-center font-Medium font-medium text-sm transition duration-250 group-hover:text-green-blue-light">
            مشاهده
            <ChevronLeft className="text-2xl" />
          </a>
        </Link>
      </div>
    </div>
  );
};

//// single Article

const SingleArticle = ({ header, image, tag, createdAt, href }) => {
  return (
    <div className="w-full pb-2 lg:pb-3.5  mb-8 border-b-2 border-light-grey-blue lg:mb-0 ">
      <div className="w-full h-44 lg:h-[19.187rem] relative">
        <Image src={image} layout="fill" alt="image" />
      </div>
      <div className="mt-3 lg:mt-5">
        <Text className="font-SemiBold text-3.5 text-dusky-blue lg:text-[22px]">
          {header}
        </Text>
      </div>
      <div className="flex flex-row justify-between items-center mt-2 lg:mt-4">
        <div className="flex flex-row justify-start items-center">
          <Text className="bg-white rounded-full shadow-md px-4 py-1 text-dark-slate-blue text-2.5 lg:text-3.5">
            {tag}
          </Text>
          <Text className="font-Medium text-2.5 lg:text-3.5 text-grey-blue mr-3 lg:mr-5">
            {createdAt}
          </Text>
        </div>
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

// the most visited Article

const VisitedArticle = ({
  header,
  image,
  createdAt,
  tag,
  href,
  hasBorder = true
}) => {
  const { lg } = useWindowSize();

  return (
    <div
      className={`w-full flex flex-row mb-10 lg:mb-0 pb-5 lg:pb-8 lg:w-auto ${
        hasBorder && "border-b-2 border-light-grey-blue"
      } `}
    >
      <div className="w-[94px] lg:w-[187px] h-[57px] lg:h-[113px] relative">
        <Image
          src={image}
          width={lg ? "187 " : "94"}
          height={lg ? "113" : "57"}
          layout="fixed"
          alt="image"
        />
      </div>
      <div className="w-full mr-4 lg:mr-6 flex flex-col justify-between ">
        <Link href={href}>
          <a className="font-SemiBold  text-dusky-blue text-3 lg:text-4">
            {header}
          </a>
        </Link>

        {lg ? (
          <div className="flex w-full justify-between items-end">
            <div className="w-full flex items-center  sm:mt-[1.125rem]">
              <Text className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-sm shadow-md rounded-full ml-5">
                {tag}
              </Text>
              <Text className="font-Medium text-grey-blue text-sm font-medium">
                {createdAt}
              </Text>
            </div>
            <Link href={href}>
              <a className="text-dusky-blue flex items-center font-Medium font-medium text-sm">
                مشاهده
                <ChevronLeft className="text-2xl" />
              </a>
            </Link>
          </div>
        ) : (
          <div className="w-full flex justify-end self-end">
            <Text className="font-medium text-2.5  text-grey-blue ">
              {createdAt}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

///tab Containet

const TabContent = ({ fakeData }) => {
  return (
    <div className="my-8 lg:my-[4.562rem]  lg:grid lg:grid-cols-2 lg:gap-x-[3.125rem] lg:gap-y-14">
      {fakeData?.map(item => (
        <SingleArticle
          key={item.id}
          image={item.image}
          header={item.header}
          tag={item.tag}
          createdAt={item.createdAt}
          href={`/articles/${item.id}`}
        />
      ))}
    </div>
  );
};

//feake data

export const FakeArticles = [
  {
    id: 1,
    image: "/images/design-rush-awards-purple@2x.png",
    header: "چطور  UX رو سریع یاد بگیرم؟ ",
    tag: "کسب و کار",
    createdAt: "30 شهریور ۱۴۰۰",
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیمغالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 2,
    image: "/images/graphic-design@2x.png",
    header: "چطور  دیزاین رو سریع یاد بگیرم؟ ",
    tag: "برنامه نویسی",
    createdAt: "8 ادریبهشت 1388",
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 3,
    image: "/images/articles-home-second.png",
    header: "تفاوت react و next در جاوااسکریپت!!!!",
    tag: "دیزاین",
    createdAt: "16 آذر ۱۴۰۰",
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  },
  {
    id: 4,
    image: "/images/home-second-mob.png",
    header: "چطور برنامه نویسی رو سریع یاد بگیرم؟ ",
    tag: "کسب و کار",
    createdAt: "۲ مهر ۱۴۰۰",
    description:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم."
  }
];

const FakeVisitedArticle = [
  {
    id: 1,
    image: "/images/design-rush-awards-purple@2x.png",
    header: "چطور برنامه نویسی رو سریع یاد بگیرم؟ ",
    tag: "کسب و کار",
    createdAt: "25 بهمن ۱۴۰۰"
  },
  {
    id: 2,
    image: "/images/graphic-design@2x.png",
    header:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .",
    tag: "برنامه نویسی",
    createdAt: "19 آبان 1399"
  },
  {
    id: 3,
    image: "/images/articles-home-second.png",
    header: "چطور برنامه نویسی رو سریع یاد بگیرم؟ ",
    tag: "دیزاین",
    createdAt: "۲ مهر ۱۴۰۰"
  },
  {
    id: 4,
    image: "/images/home-second-mob.png",
    header:
      "غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .",
    tag: "کسب و کار",
    createdAt: "12 فروردین ۱۴۰۰"
  }
];

//for headerarticles

function articlesMaker(data, params) {
  if (!data || data.length === 0) return [];
  const { page = 1, per_page = 3 } = params;
  return data.slice((page - 1) * per_page, page * per_page);
}

const fakeHeadeArticles = [
  {
    id: 1,
    header: "غالبا یک شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته",
    image: articleImg,
    tag: "کسب و کار",
    createdAt: "1 مهر ۱۴۰۰",
    link: "/"
  },
  {
    id: 2,
    header: "غالبا دو شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته",
    image: articleImg2,
    tag: "دیزاین",
    createdAt: "2 مهر ۱۴۰۰",
    link: "/"
  },
  {
    id: 3,
    header: "غالبا سه شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته",
    image: articleImg3,
    tag: "برنامه نویسی",
    createdAt: "3 مهر ۱۴۰۰",
    link: "/"
  },
  {
    id: 4,
    header: "غالبا چهار شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته",
    image: articleImg,
    tag: "کسب و کار",
    createdAt: "4 مهر ۱۴۰۰",
    link: "/"
  },
  {
    id: 5,
    header: "غالبا پنج شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته",
    image: articleImg2,
    tag: "فرانت اند",
    createdAt: "5 مهر ۱۴۰۰",
    link: "/"
  },
  {
    id: 6,
    header: "غالبا شش شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته",
    image: articleImg3,
    tag: "طراحی",
    createdAt: "6 مهر ۱۴۰۰",
    link: "/"
  }
];
