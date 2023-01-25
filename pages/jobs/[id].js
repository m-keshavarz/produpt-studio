import React from "react";
import Layout from "../layout";
import { FakeJobs } from "./index";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../../components/specific/button";
import Text from "../../components/specific/text";
import FileInput from "../../components/specific/fileInput";
import Input from "../../components/specific/input";
import { useForm } from "react-hook-form";

import { Forward, Telegram, Whatsapp, Attach } from "../../components/icons";
export async function getStaticProps({ params }) {
  const { id } = params;
  const job = FakeJobs.find(item => item.id === +id) || {};
  return {
    props: { job }
  };
}

export async function getStaticPaths() {
  const paths = FakeJobs.map(job => ({
    params: { id: job.id + "" }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
const SingleJob = ({ job }) => {
  const { lg } = useWindowSize();
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

  const scroll = () => {
    window.scrollTo({
      top: lg ? 600 : 1000,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <Layout>
      <div className="default-container pt-10 lg:pt-[9.5rem] relative mb-20 bg-pale-grey lg:flex lg:flex-col ">
        <div className="lg:flex lg:flex-row justify-between">
          <div>
            <div className="w-full flex flex-row justify-between items-center pb-3 lg:pb-4 border-b-2 border-light-grey-blue ">
              <Text className="font-SemiBold text-4.5 text-dark-slate-blue lg:text-6.5">
                {job.title}
              </Text>
              <Text className="font-Medium text-grey-blue text-2.5 lg:text-4.5">
                {job.status}
              </Text>
            </div>

            <div className="mt-[2.375rem]">
              <Text className="font-Bold text-4 text-dark-slate-blue lg:text-5.5">
                شرح شغل
              </Text>
              <Text className="text-3.5 text-dark-slate-blue mt-2">
                مدیریت و تفویض مسئولیت ها به طراحان دیگر و ارائه دستورالعمل ها
                ابتکارات بازاریابی ، موقعیت استراتژیک و مخاطبان هدف را درک کنید
                رهبری توسعه هنری قطعات بازاریابی و تبلیغاتی ، از جمله چاپی ،
                آنلاین ، رسانه های اجتماعی ؛ مواد وثیقه نظارت بر تیمی از طراحان
                گرافیک ، عکاسان ، تصویرگران ، هنرمندان تولید و آزادکاران خلاق با
                اعضای تیم بازاریابی برای توسعه استراتژی های کمپین های تبلیغاتی
                همکاری کنید ایجاد و طراحی مواد مختلف برای وثیقه چاپی و دیجیتال
                اطمینان حاصل کنید که پروژه ها با کیفیت بالا و طبق برنامه انجام
                می شوند جهت گیری خلاق برای شرکت و همچنین دستورالعمل های تجاری
                ایجاد کنید اولویت بندی و مدیریت چندین پروژه در محدوده مشخصات
                طراحی و محدودیت های بودجه روتوش و دستکاری تصاویر را انجام دهید
                کار با طیف گسترده ای از رسانه ها و استفاده از نرم افزارهای طراحی
                گرافیکی (Adobe Photoshop ، Illustrator ، InDesign و سایر نرم
                افزارهای طراحی گرافیکی) جهت گیری خلاق برای شرکت و همچنین
                دستورالعمل های تجاری ایجاد کنید اولویت بندی و مدیریت چندین پروژه
                در محدوده مشخصات طراحی و محدودیت های بودجه روتوش و دستکاری
                تصاویر را انجام دهید کار با طیف گسترده ای از رسانه ها و استفاده
                از نرم افزارهای طراحی گرافیکی (Adobe Photoshop ، Illustrator ،
                InDesign و سایر نرم افزارهای طراحی گرافیکی)
              </Text>
              <Text className="font-Bold text-4 text-dark-slate-blue mt-10 lg:text-5.5 lg:mt-8">
                الزامات
              </Text>
              <Text className="text-3.5 text-dark-slate-blue mt-2">
                مدیریت و تفویض مسئولیت ها به طراحان دیگر و ارائه دستورالعمل ها
                ابتکارات بازاریابی ، موقعیت استراتژیک و مخاطبان هدف را درک کنید
                رهبری توسعه هنری قطعات بازاریابی و تبلیغاتی ، از جمله چاپی ،
                آنلاین ، رسانه های اجتماعی ؛ مواد وثیقه نظارت بر تیمی از طراحان
                گرافیک ، عکاسان ، تصویرگران ، هنرمندان تولید و آزادکاران خلاق با
                اعضای تیم بازاریابی برای توسعه استراتژی های کمپین های تبلیغاتی
                همکاری کنید ایجاد و طراحی مواد مختلف برای وثیقه چاپی و دیجیتال
                اطمینان حاصل کنید که پروژه ها با کیفیت بالا و طبق برنامه انجام
                می شوند جهت گیری خلاق برای شرکت و همچنین دستورالعمل های تجاری
                ایجاد کنید اولویت بندی و مدیریت چندین پروژه در محدوده مشخصات
                طراحی و محدودیت های بودجه روتوش و دستکاری تصاویر را انجام دهید
                کار با طیف گسترده ای از رسانه ها و استفاده از نرم افزارهای طراحی
                گرافیکی (Adobe Photoshop ، Illustrator ، InDesign و سایر نرم
                افزارهای طراحی گرافیکی) جهت گیری خلاق برای شرکت و همچنین
                دستورالعمل های تجاری ایجاد کنید اولویت بندی و مدیریت چندین پروژه
                در محدوده مشخصات طراحی و محدودیت های بودجه روتوش و دستکاری
                تصاویر را انجام دهید کار با طیف گسترده ای از رسانه ها و استفاده
                از نرم افزارهای طراحی گرافیکی (Adobe Photoshop ، Illustrator ،
                InDesign و سایر نرم افزارهای طراحی گرافیکی)
              </Text>
            </div>
          </div>
          {/* menu link and tag */}
          <div className="w-full shadow-shsh fixed   bottom-0 right-0 z-1500 px-8 bg-pale-grey lg:mr-[4.5rem]  py-5 lg:sticky lg:w-[16rem] lg:flex lg:flex-col lg:items-end lg:shadow-none lg:top-[9.5rem] lg:left-0 lg:z-0 lg:h-px ">
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
                <div className="flex flex-row ">
                  <button
                    className="w-8 h-8 bg-white shadow-pin rounded-full flex justify-center items-center "
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
                onClick={() => scroll()}
              >
                ارسال درخواست
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-[4.5rem] lg:w-full lg:mt-[6.25rem]">
          <Text className="font-Bold text-5 text-dusky-blue mb-6  lg:mt-[6.187rem] lg:text-8">
            اطلاعات رزومه
          </Text>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full   grid grid-row-1 gap-3 lg:gap-y-6 lg:gap-x-[3.125rem] mt-6 "
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
                  {...register("phone", {
                    minLength: {
                      value: 3,
                      message: "بیشتر از سه کاراکتر باشد"
                    }
                  })}
                  error={errors.phone}
                  errorText={errors?.phone?.message}
                  success={watch("phone")?.length >= 3 && !errors.phone}
                  className="w-full"
                  label="تلفن همراه: "
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
              <div>
                <FileInput
                  {...register("file", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "فرمت ایمیل نادرست است"
                    }
                  })}
                  className="w-full"
                  error={errors.file}
                  errorText={errors?.file?.message}
                  label="ایمیل :"
                  name="file"
                  hasLabel
                />
              </div>
            </div>

            <div className="w-full flex justify-end items-end ">
              <Button
                bg="purple"
                size="small"
                className="text-white w-32  lg:w-[11.75rem] shadow-md text-3 lg:text-4 lg:h-10"
              >
                {lg ? "ارسال اطلاعات رزومه" : "ارسال فرم"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SingleJob;
