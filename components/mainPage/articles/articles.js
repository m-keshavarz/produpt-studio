import React from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "../../icons";
import Image from "next/image";
import Link from "next/link";
import Text from "../../specific/text";
import useWindowSize from "../../../hooks/useWindowSize";

// images
import articleImg from "../../../public/images/mvmnt_web_post_hero@2x.png";
import articleImg2 from "../../../public/images/test1.jpg";
import articleImg3 from "../../../public/images/test2.jpg";

const Artcles = () => {
  const { lg } = useWindowSize();
  const [page, setPage] = React.useState(1);
  const [active, setActive] = React.useState(fakeArticles[0]);

  return (
    <div className="panel panel-4 shadow-panel h-screen w-full default-container flex flex-col bg-white lg:bg-projects">
      <Text className="mt-auto font-UltraBold text-dusky-blue text-6.5 lg:text-6 iphone5:text-5 mb-6">
        با مطالعه مقالات <br />
        در حوزه تخصصی خود، به روز بمانید
      </Text>
      <div className="flex flex-col lg:flex-row">
        {lg && (
          <div className="relative w-1/2 flex-shrink-0 min-h-[42vh] custom-h-full:min-h-[50vh]">
            <Image src={active.image} alt="project" layout="fill" />
          </div>
        )}

        <div className="grid gap-6 lg:gap-0 lg:flex-grow">
          {articlesMaker(fakeArticles, { page, per_page: 3 }).map(article => (
            <HomeSingleArticle
              key={article.id}
              header={article.header}
              image={article.image}
              tag={article.tag}
              createdAt={article.createdAt}
              link={article.link}
              onMouseEnter={() => {
                setActive(article);
              }}
            />
          ))}
        </div>
      </div>

      <div className="my-4 custom-h-full:mb-16 flex">
        <button
          className="flex justify-center items-center ml-2"
          onClick={() => {
            setPage(1);
          }}
        >
          <ArrowRight className="text-6 lg:text-10 !font-black text-dark-slate-blue cursor-pointer" />
        </button>
        <button
          className="flex justify-center items-center"
          onClick={() => {
            setPage(2);
          }}
        >
          <ArrowLeft className="text-6 lg:text-10 !font-black text-green-blue-light cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Artcles;

const HomeSingleArticle = ({
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

function articlesMaker(data, params) {
  if (!data || data.length === 0) return [];
  const { page = 1, per_page = 3 } = params;
  return data.slice((page - 1) * per_page, page * per_page);
}

const fakeArticles = [
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
