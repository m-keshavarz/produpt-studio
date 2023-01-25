import React from "react";
import Layout from "../layout";
import Text from "../../components/specific/text";
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/specific/input";
import { useForm } from "react-hook-form";
import Button from "../../components/specific/button";
import FileInput from "../../components/specific/fileInput";
import useWindowSize from "../../hooks/useWindowSize";

const Jobs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = value => {
    console.log(value);
  };

  const { lg } = useWindowSize();

  return (
    <Layout>
      <div className="w-full   pt-[1.812rem]  lg:pt-[9.5rem]  ">
        <div className=" w-full mb-8 lg:mb-[3.25rem] default-container">
          <div className="bg-seafoam w-[9.225rem] h-4 relative lg:w-[16.525rem] lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4 whitespace-nowrap">
              فرصت های شغلی
            </Text>
          </div>
        </div>

        <div className="w-full  hide-scrollbar overflow-x-scroll flex flex-row whitespace-nowrap  gap-x-10 relative lg:justify-between lg:overflow-auto">
          <div className="w-64 h-40 lg:w-[32%] lg:h-[18rem] relative  after:absolute after:bg-dusky-blue after:opacity-30 after::w-full after:h-full ">
            <Image
              src="/images/proj2.png"
              width={255}
              height={143}
              layout={!lg ? "fixed" : "responsive"}
              alt="image"
            />
          </div>
          <div className="w-64 h-36 lg:w-[32%] lg:h-[15.437rem] relative ">
            <Image
              src="/images/proj3.png"
              width={255}
              height={143}
              layout={!lg ? "fixed" : "responsive"}
              alt="image"
            />
          </div>
          <div className="w-64 h-36 lg:w-[32%] lg:h-[15.437rem] relative">
            <Image
              src="/images/proj4.png"
              width={255}
              height={143}
              layout={!lg ? "fixed" : "responsive"}
              alt="image"
            />
          </div>
        </div>

        <div className="mt-20  default-container">
          <Text className="font-Bold text-5 text-dusky-blue mb-6 lg:w-full lg:text-center lg:mt-[6.187rem] lg:text-8">
            فرصت های شغلی{" "}
          </Text>
          <div className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-12 lg:mt-16">
            {FakeJobs.map(item => (
              <JobRequest
                key={item.id}
                title={item.title}
                status={item.status}
                href={`/jobs/${item.id}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-[4.5rem] mb-14 default-container lg:mb-[5.5rem]">
          <Text className="font-Bold text-5 text-dusky-blue mb-6  lg:mt-[6.187rem] lg:text-8">
            اطلاعات رزومه
          </Text>
          <Text className="font-SemiBold text-dark-slate-blue  text-3.5 lg:font-Medium lg:text-4.5">
            شاید یکی از عناصر کلیدی در تعریف کسب و کارهای کوچک جمع و جور بودن و
            ترجیح دادن یک درآمد ثابت به رشد بیشتر باشد. این مساله تفاوت عمده ای
            بین مدیریت این دست کسب و کارها با استارت آپ ها ایجاد می کند.
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
                  {...register("    ", {
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
                  name="dad"
                  hasLabel
                />
              </div>
            </div>

            <div className="w-full flex justify-end items-end">
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

export default Jobs;

const JobRequest = ({ title, status, href }) => {
  return (
    <div className="w-full flex flex-col border-b-2 border-light-grey-blue pb-3 lg:pb-4">
      <Text className="font-Bold text-4 text-dark-slate-blue lg:text-5.5 ">
        {title}
      </Text>
      <div className="w-full flex flex-row justify-between items-center mt-2 lg:mt-1">
        <Text className="font-Medium text-3.5 text-dusky-blue lg:text-4.5">
          {status}
        </Text>
        <Link href={href}>
          <a className="bg-dusky-blue py-1.5 w-[5.625rem] lg:w-[7.5rem] lg:h-[2.125rem]  text-center rounded-full text-white font-Medium text-2.5 lg:text-3.5   ">
            ارسال درخواست
          </a>
        </Link>
      </div>
    </div>
  );
};

export const FakeJobs = [
  {
    id: 1,
    title: "توسعه دهنده فرانت",
    status: "دورکاری ",
    href: "/"
  },
  {
    id: 2,

    title: "سرپرست طراحی تجربه کاربری",
    status: "حضوری ",
    href: "/"
  },
  {
    id: 3,

    title: "توسعه دهنده  بک",
    status: "دورکاری ",
    href: "/"
  },
  {
    id: 4,

    title: "طراح تجربه کاربری",
    status: "حضوری ",
    href: "/"
  }
];
