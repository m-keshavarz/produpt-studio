import React from "react";
import Text from "../components/specific/text";
import Input from "../components/specific/input";
import Textarea from "../components/specific/textarea";
import { useForm } from "react-hook-form";
import Button from "../components/specific/button";
import Layout from "./layout";
const Consulting = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = value => {
    console.log(value);
  };

  return (
    <Layout containerClassName="bg-consulting-page bg-cover bg-consulting-mobile-position bg-no-repeat">
      <div className="h-screen pt-[1.812rem]  lg:bg-cover lg:bg-center lg:pt-[9.5rem]">
        <div className=" w-full  pr-8 mb-8 lg:mb-[3.25rem]  lg:pr-28 ">
          <div className="bg-seafoam w-[4.125rem] h-4  relative lg:w-[7.125rem]  lg:h-8">
            <Text className="text-xl font-Bold  text-dark-slate-blue absolute -top-3.5 lg:text-4xl lg:-top-4">
              مشاوره
            </Text>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full px-8 py-[3.812rem] backdrop-filter backdrop-blur-lg grid grid-row-1 gap-4 lg:px-28 shadow-articlesShadow"
        >
          <div className="grid grid-row-1 gap-3 lg:grid-cols-2">
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
              className="text-white w-32 shadow-md text-3 lg:text-4"
            >
              ارسال فرم
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Consulting;
