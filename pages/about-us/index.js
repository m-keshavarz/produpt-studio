import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout";
import Text from "../../components/specific/text";
import Image from "next/image";
import { ChevronLeft } from "../../components/icons";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-pale-grey default-container pt-[1.8rem] lg:pt-[9.5rem]">
        <div className="service-header w-full mb-[1.875rem] lg:mb-[3.25rem]  ">
          <div className="bg-seafoam w-[4.525rem] h-4  relative lg:w-[8.125rem]  lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4 whitespace-nowrap">
              درباره ما
            </Text>
          </div>
        </div>

        <Text className="font-Medium text-4.5 lg:text-5.5 text-dark-slate-blue ">
          غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود .
          اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با سایر
          کسب و کارها کاملا متفاوت است. شروع کسب و کار ها و ایده های کوچک ساده
          نیست، حتی وقتی که نمونه های مشابه بسیاری برای یادگیری وجود دارند. اما
          شروع یک استارتاپ از آن هم سخت تر است! در این مقاله سعی بر این است که
          شما را با تفاوت های استارتاپ ها با سایر کسب و ها آشنا کنیم و چالش ها و
          اهداف پیش روی هرکدام از آن ها را به شما نشان دهیم. در بسیاری از موارد،
          استارت آپ ها روی رشد سریع و درآمد بالا تمرکز می کنند. استارت آپ ها
          غالبا با استفاده زیاد از تکنولوژی به منظور توسعه سرویس هایشان شناخته
          می شوند، و در بیشتر موارد بر افزایش سرمایه به کمک سرمایه گذاران و
          اسپانسرها در مراحل مختلف رشدشان تکیه دارند. این مساله مدیریت استارتاپ
          را در بخش مالی نسبت به سایر کار ها کاملا متفاوت می سازد. به دلیل این
          نوع از تامین سرمایه و سرمایه گذاری، استارتاپ ها همواره به دنبال جذب
          افراد با استعداد و خلاق هستد که بتوانند با محصولات تولیدی آن ها
          تغییرات بزرگی ایجاد کنند. چیزی که مدیریت استارت آپ شاید یکی از عناصر
          کلیدی در تعریف کسب و کارهای کوچک جمع و جور بودن و ترجیح دادن یک درآمد
          ثابت به رشد بیشتر باشد. این مساله تفاوت عمده ای بین مدیریت این دست کسب
          و کارها با استارت آپ ها ایجاد می کند.با این حال، بسته به نوع فعالیت،
          تعریف کوچکی این نوع کار قابل تغییر است. یک شرکت مهندسی که هزاران کارگر
          را استخدام می کند می تواند یک کار کوچک باشد و در شرایطی مشابه یک شرکت
          بازاریابی با ۵ کارمند هم کاری کوچک است. با این مقدمه به سراغ تفاوت کسب
          و کاره
        </Text>

        <div className="mt-16 lg:flex flex-col lg:justify-center lg:items-center">
          <div className="flex mb-6 lg:mt-20 lg:mb-14">
            <Text className="font-SemiBold text-4 lg:text-8 text-dark-slate-blue">
              اعضای تیم
            </Text>
          </div>

          <div className="w-full flex flex-col gap-y-8 lg:grid lg:grid-cols-3 lg:gap-y-14 lg:gap-x-6 ">
            {fakeUsers.map((item, idx) => (
              <Member
                key={item.name}
                index={idx}
                image={item.image}
                imageHver={item.imageHver}
                name={item.name}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </div>
        <div className="mt-[72px]">
          <Text className="font-Bold text-5 lg:text-8 text-dark-slate-blue">
            شرکت هایی که با ما همکاری داشتن
          </Text>
          <div className="w-full justify-between flex flex-row flex-wrap gap-x-24 gap-y-12 my-14 lg:mb-[5.5rem]">
            {FakeLogo.map(item => (
              <ProjectLogo
                key={item.image}
                image={item.image}
                hoverImage={item.imageHover}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;

const Member = ({ image, imageHver, name, title, href, index }) => {
  return (
    <div className="w-full  border-b-2 border-light-grey-blue pb-1.5">
      <div
        className={`group w-full h-[53vh] lg:w-full lg:h-[60vh] transition-all duration-500 after:absolute after:bg-dusky-blue after:opacity-30 after:w-full after:h-full relative`}
      >
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          alt="avatar"
          className="group-hover:!opacity-0 transition-all duration-500"
          priority={index < 3}
        />
        <Image
          src={imageHver}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          alt="avatar"
          className="!opacity-0 group-hover:!opacity-100 transition-all duration-500"
          priority
        />
      </div>
      <div className="w-full flex-col mt-3 lg:mt-5">
        <Text className="font-Bold text-dark-slate-blue text-4 lg:text-6.5">
          {name}
        </Text>
        <div className="flex flex-row justify-between items-center">
          <Text className="font-Medium text-3.5 text-dusky-blue mt-1.5 lg:text-4.5">
            {title}
          </Text>
          <Link href={href}>
            <a className="font-Medium text-3 lg:text-3.5 text-grey-blue flex flex-row justify-center items-center">
              مشاهده
              <ChevronLeft className="text-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectLogo = ({ image, hoverImage }) => {
  return (
    <div className={`group w-[20%] h-[53px] lg:w-[4%] lg:h-[5.75rem] relative`}>
      <Image
        src={image}
        layout="fill"
        objectFit="contain"
        objectPosition="top center"
        alt="avatar"
        className="group-hover:!opacity-0 transition-all duration-75"
      />
      <Image
        src={hoverImage}
        layout="fill"
        objectFit="contain"
        objectPosition="top center"
        alt="avatar"
        className="!opacity-0 group-hover:!opacity-100 transition-all duration-75"
        priority
      />
    </div>
  );
};

const fakeUsers = [
  {
    image: "/images/users/darabi1.jpg",
    imageHver: "/images/users/darabi2.jpg",
    name: "دانيال دارابی",
    title: "مدیر عامل",
    href: "/"
  },
  {
    image: "/images/users/entesari1.jpg",
    imageHver: "/images/users/entsari2.jpg",
    name: "سمیرا انتصاری ",
    title: "مدير ارشد دیزاین",
    href: "/"
  },
  {
    image: "/images/users/jafari1.jpg",
    imageHver: "/images/users/jafarii2.jpg",
    name: "احسان جعفری",
    title: "     توسعه دهنده فرانت اند",
    href: "/"
  },
  {
    image: "/images/users/javidnia1.jpg",
    imageHver: "/images/users/javidnia2.jpg",
    name: "غزاله جاویدنیا",
    title: " پروداکت دیزاینر",
    href: "/"
  },

  {
    image: "/images/users/keshavarz1.jpg",
    imageHver: "/images/users/keshavarz2.jpg",
    name: "محمد کشاورز",
    title: "توسعه دهنده فرانت اند",
    href: "/"
  },
  {
    image: "/images/users/kordestani1.jpg",
    imageHver: "/images/users/kordstani2.jpg",
    name: "رسول کردستانی",
    title: "توسعه دهنده فرانت اند",
    href: "/"
  },
  {
    image: "/images/users/mohamadi1.jpg",
    imageHver: "/images/users/mohamadi2.jpg",
    name: "حامد محمدی ",
    title: "رئيس هيئت مدیره ",
    href: "/"
  },
  {
    image: "/images/users/nazari1.jpg",
    imageHver: "/images/users/nazari2.jpg",
    name: "فاطمه نظری",
    title: "پروداکت دیزاینر",
    href: "/"
  },
  {
    image: "/images/users/afrasiabi1.jpg",
    imageHver: "/images/users/pedram2.jpg",
    name: "پدرام افراسیابی",
    title: "راهبر تکنیکال",
    href: "/"
  },
  {
    image: "/images/users/qivechan1.jpg",
    imageHver: "/images/users/qivechan2.jpg",
    name: "پگاه گیوه چیان",
    title: "توسعه دهنده بک اند",
    href: "/"
  },
  {
    image: "/images/users/rezaii1.jpg",
    imageHver: "/images/users/rezaii2.jpg",
    name: "برهان رضایی",
    title: "توسعه دهنده بک اند",
    href: "/"
  },
  {
    image: "/images/users/shabazi1.jpg",
    imageHver: "/images/users/shahbazi2.jpg",
    name: "فاطمه شهبازی",
    title: "مدير ارشد اجرایی",
    href: "/"
  }
];

const FakeLogo = [
  {
    image: "/images/saderatDark.png",
    imageHover: "/images/saderat-logo.png"
  },
  {
    image: "/images/dayDark.png",
    imageHover: "/images/day-logo.png"
  },
  {
    image: "/images/hotelDark.png",
    imageHover: "/images/hotel-logo.png"
  },
  {
    image: "/images/barekatDark.png",
    imageHover: "/images/barkat-logo.png"
  }
];
