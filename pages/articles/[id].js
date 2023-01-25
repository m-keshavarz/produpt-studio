import React, { useState } from "react";
import { FakeArticles } from "./index";
import Image from "next/image";
import Collaps from "../../components/specific/collapse";
import Text from "../../components/specific/text";
import useWindowSize from "../../hooks/useWindowSize";
import Input from "../../components/specific/input";
import Textarea from "../../components/specific/textarea";
import { useForm } from "react-hook-form";
import Button from "../../components/specific/button";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../layout";

import {
  Dots,
  Forward,
  Clock,
  Chat,
  Eye,
  ChevronLeft,
  Telegram,
  Whatsapp,
  Attach
} from "../../components/icons";
export async function getStaticProps({ params }) {
  const { id } = params;
  const article = FakeArticles.find(item => item.id === +id) || {};
  return {
    props: { article }
  };
}

export async function getStaticPaths() {
  const paths = FakeArticles.map(article => ({
    params: { id: article.id + "" }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const Article = ({ article }) => {
  const { lg } = useWindowSize();
  const [openColl, setOpenColl] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = value => {
    console.log(value);
  };

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
          title: article.header,
          text: article.header,
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
      <div className="default-container pt-[5.562rem] lg:pt-[9.5rem] relative mb-20 bg-pale-grey">
        <div className="lg:flex lg:flex-row justify-between">
          <div className="lg:w-[98%]">
            <div className="h-[26vh] lg:h-[30.187rem]  relative">
              <Image src={article.image} layout="fill" alt="image" />
            </div>
            <div className="w-full border-b-2 border-light-grey-blue mt-3 lg:mt-8 pb-2 lg:pb-3">
              <Text className="font-SemiBold text-3.5 lg:text-6.5 text-dark-slate-blue ">
                {article.header}
              </Text>
              <div className="w-full flex flex-row justify-between items-center mt-3 lg:mt-4">
                <Text className="bg-#f7f7f7 py-[6px] px-4 text-dusky-blue text-2.5 lg:text-3.5 shadow-md rounded-full ">
                  {article.tag}
                </Text>
                <Text className="font-Medium text-grey-blue text-2.5 lg:text-3">
                  {article.createdAt}
                </Text>
              </div>
            </div>
            <div className="mt-10 lg:mt-14">
              <Text className="text-3.5 text-dark-slate-blue leading-6 lg:text-4 lg:leading-8">
                {article.description}
              </Text>
            </div>
          </div>

          {/* menu link and tag */}
          <div className="w-full shadow-shsh fixed bottom-0 right-0 z-1500 px-8 bg-pale-grey lg:mr-[4.5rem]  py-5 lg:sticky lg:w-[16rem] lg:flex lg:flex-col lg:items-end lg:shadow-none lg:top-[9.5rem] lg:left-0 lg:z-0 lg:h-48 ">
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

              <div className="  grid grid-cols-3 gap-4 lg:mt-4 lg:gap-7 lg:w-full lg:flex lg:justify-center lg:items-center ">
                <div className="flex flex-row justify-center items-center">
                  <Clock className="text-dusky-blue text-6 ml-1" />
                  <Text className="text-dusky-blue text-3">`۵</Text>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Chat className="text-dusky-blue text-6 ml-1" />
                  <Text className="text-dusky-blue text-3">1۰0</Text>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Eye className="text-dusky-blue text-6 ml-1" />
                  <Text className="text-dusky-blue text-3">۱۰</Text>
                </div>
              </div>
            </div>

            {lg ? (
              <div className="border-t-2 mt-4 pt-4  flex flex-row flex-wrap  lg:border-none lg:w-full lg:mt-10 ">
                {FakeTags?.map(item => (
                  <button
                    key={item}
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1 "
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: item }
                      });
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : (
              <Collaps open={lg ? true : openColl} className="">
                <div className="border-t-2 mt-4 pt-4 flex flex-row flex-wrap lg:border-none lg:w-full lg:mt-10 ">
                  <button
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1 "
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: "کسب و کار" }
                      });
                    }}
                  >
                    کسب و کار
                  </button>
                  <button
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1 "
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: "دیزاین" }
                      });
                    }}
                  >
                    دیزاین
                  </button>
                  <button
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1"
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: "برنامه نویسی" }
                      });
                    }}
                  >
                    برنامه نویسی
                  </button>
                  <button
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1"
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: "کسب و کار" }
                      });
                    }}
                  >
                    کسب و کار
                  </button>
                  <button
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1"
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: "دیزاین" }
                      });
                    }}
                  >
                    دیزاین
                  </button>
                  <button
                    className="bg-#f7f7f7 py-[6px] px-4 text-dark-slate-blue text-2.5 lg:text-3.5 shadow-md rounded-full m-1"
                    onClick={() => {
                      router.push({
                        pathname: "/articles",
                        query: { name: "برنامه نویسی" }
                      });
                    }}
                  >
                    برنامه نویسی
                  </button>
                </div>
              </Collaps>
            )}
          </div>
        </div>
        {/* related articles */}
        <div>
          <Text className="font-Bold text-5 lg:text-8 text-dusky-blue mb-8 lg:mb-6 mt-24 ">
            مقالات مرتبط
          </Text>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-[3.125rem] lg:gap-y-14">
            {FakeVisitedArticle?.map((item, index) => (
              <RelatedArticle
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
        {/* Your point of view */}
        <div>
          <Text className="font-Bold text-5 lg:text-8 text-dusky-blue mb-8 lg:mb-6 mt-24">
            دیدگاه شما
          </Text>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full   grid grid-row-1 gap-3 lg:gap-8  "
          >
            <div className="grid grid-row-1 gap-3 lg:gap-12 lg:grid-cols-2">
              <div className="w-full ">
                <Input
                  {...register("firstName", {
                    minLength: {
                      value: 3,
                      message: "بیشتر از سه کاراکتر باشد"
                    }
                  })}
                  error={errors.firstName}
                  errorText={errors?.firstName?.message}
                  success={watch("firstName")?.length >= 3 && !errors.firstName}
                  className="w-full"
                  label="نام و نام خانوادگی :"
                  hasLabel
                />
              </div>
              <div className="w-full ">
                <Input
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "فرمت ایمیل نادرست است"
                    }
                  })}
                  className="w-full"
                  error={errors.email}
                  errorText={errors?.email?.message}
                  type="email"
                  label="ایمیل :"
                  hasLabel
                />
              </div>
            </div>

            <div className="w-full">
              <Textarea
                {...register("subject", {
                  minLength: 3
                })}
                error={errors.subject}
                errorText={errors?.subject?.message}
                className="w-full"
                labelClassName="text-xs"
                label="موضوع مشاوره :"
                hasLabel
              />
            </div>
            <div className="w-full flex justify-end items-end">
              <Button
                bg="purple"
                size="small"
                className="text-white w-32  lg:w-[11.75rem] shadow-md text-3 lg:text-4"
              >
                ارسال فرم
              </Button>
            </div>
          </form>
        </div>
        {/* comment */}
        <div>
          <Text className="font-Bold text-5 lg:text-8 text-dusky-blue mb-8 lg:mb-6 mt-10">
            نظرات
          </Text>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-[3.125rem] lg:gap-y-14">
            {FakeComments?.map(item => (
              <div
                key={item.id}
                className="mb-5 pb-5 border-b-2 border-light-grey-blue"
              >
                <Text className="font-Bold text-3.5 lg:text-4.5 text-dark-slate-blue">
                  {item?.name}
                </Text>
                <Text className="font-Bold text-2.5 lg:text-3.5 text-grey-blue mt-1.5 lg:mt-2">
                  {item?.createdAt}
                </Text>
                <Text className="font-Medium lg:font-Regular text-3 lg:text-4.5 text-dusky-blue mt-1.5 leading-5 lg:mt-2 lg:leading-7">
                  {item.comment}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;

/* related articles */

const RelatedArticle = ({
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
      className={`w-full flex flex-row mb-5 lg:mb-0 pb-5  lg:pb-8 lg:w-auto  ${
        hasBorder && "border-b-2 border-light-grey-blue"
      }  `}
    >
      <div>
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

const FakeComments = [
  {
    id: 1,
    name: "  فاطمه نظری",
    createdAt: "13 بهمن ۱۴۰۰",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
  },
  {
    id: 2,
    name: "احسان جعفری ",
    createdAt: "18 آذر ۱۴۰۰",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
  },
  {
    id: 3,
    name: "غزاله جاویدنیا",
    createdAt: "۲ دی ۱۴۰۰",
    comment:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."
  }
];

//tags

const FakeTags = [
  "برنامه نویسی",
  "دیزاین",

  "کسب و کار",
  "استارتاپ",
  "استراتژی ",
  "مدیریت"
];
