import Link from "next/link";
import React from "react";
import Checkbox from "../components/specific/checkbox";
import Collapse from "../components/specific/collapse";
import Modal from "../components/specific/modal";
import Radio from "../components/specific/radio";
import ToggleSwitch from "../components/specific/toggleSwitch";
import useToggle from "../hooks/useToggle";
import Button from "../components/specific/button";
import Input from "../components/specific/input";
import FileInput from "../components/specific/fileInput";
import Text from "../components/specific/text";
import SubText from "../components/specific/subText";
import {
  ArrowLeft,
  ArrowRight,
  Attach,
  Chat,
  Check,
  ChevronDown,
  ChevronLeft,
  Clock,
  CloseSquared,
  Envelop,
  EnvelopRounded,
  File,
  Instagram,
  Linkedin,
  Phone,
  PhoneRounded,
  PinRounded,
  Telegram,
  Whatsapp
} from "../components/icons/index";

const Components = () => {
  const [expand, toggleExpand] = useToggle();
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <ul className="p-8 flex flex-col gap-6 min-h-[800px]">
        <li>
          <p className="text-sm text-blue-400">1. Checkbox</p>
          <Checkbox label="ch label" />
        </li>
        <li>
          <p className="text-sm text-blue-400">2. Collapse</p>
          <button onClick={toggleExpand} className="px-4 border border-red-400">
            toggle collapse
          </button>
          <Collapse open={expand}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui
            pariatur veritatis id aliquid similique perspiciatis architecto
            quasi, blanditiis excepturi doloribus, ullam consequatur labore
            voluptate fugiat possimus laborum velit voluptas.
          </Collapse>
        </li>
        <li>
          <p className="text-sm text-blue-400">4. Modal and Portal</p>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="px-4 border border-red-400"
          >
            open modal
          </button>
          <Modal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
            }}
            className="bg-white flex justify-center p-12"
          >
            <div className="text-center">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full text-right font-SemiBold transform mb-20 text-lg"
              >
                +
              </button>
              <p className="text-red-500">
                شاید یکی از عناصر کلیدی در تعریف کسب و کارهای کوچک جمع و جور
                بودن و ترجیح دادن یک درآمد ثابت به رشد بیشتر باشد.
                <br /> این مساله تفاوت عمده ای بین مدیریت این دست کسب و کارها با
                استارت آپ ها ایجاد می کند.
              </p>
            </div>
          </Modal>
        </li>
        <li>
          <p className="text-sm text-blue-400">5. radio</p>
          <Radio label="lable1" className="ml-10" name="esi" />
          <Radio className="ml-10" name="esi" />
          <Radio className="ml-10" name="esi" />
          <Radio label="lable1" className="ml-10" name="esi" />
        </li>
        <li>
          <p className="text-sm text-blue-400">6. toggle Switch</p>
          <ToggleSwitch />
        </li>
        <li>
          <p className="text-sm text-blue-400">7. button</p>

          <Button className="w-52">ارسال فرم</Button>
        </li>
        <li className="flex flex-row">
          <p className="text-sm text-blue-400 ">8.input</p>
          <div className="w-full mt-12">
            <Input
              name="bb"
              className="w-5/6"
              hasLabel
              label="نام و نام خانوادگی :"
              defaultValue="produpt"
              labelClassName="mt-24"
              success
            />
          </div>

          <div className="w-full mt-12">
            <Input
              className="w-5/6"
              hasLabel
              label="تلفن همراه:"
              onlyNumber
              labelClassName="mt-24"
              error
              errorText="شماره اشتباهه"
            />
          </div>
        </li>

        <li>
          <p className="text-sm text-blue-400">9.Text</p>

          <Text className="text-base text-dark-slate-blue">
            غالبا شرایط استارتاپ ها با سایر کسب کارها یکسان در نظر گرفته می شود
            . اما حقیقت این است که وضعیت یک استارت آپ و متعاقبا مدیریت آن با
            سایر کسب و کارها کاملا متفاوت است.
          </Text>
        </li>

        <li>
          <p className="text-sm text-blue-400">10.SubText</p>

          <SubText>
            مشاوره محصول طراحی و مشاوره استراتژی دیجیتال مشاوره کسب وکار آنلاین
          </SubText>
        </li>
        <li>
          <p className="text-sm text-blue-400">11.File Upload</p>

          <FileInput
            className="w-[50%]"
            onChange={() => {
              console.log("asdfghgfds");
            }}
          />
        </li>

        <li>
          <p className="text-sm text-blue-400">12.icons</p>

          <ArrowLeft className="text-dark-slate-blue text-4xl mr-4 hover:text-6xl transition-all " />
          <ArrowRight className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Attach className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Chat className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Check className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <ChevronDown className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <ChevronLeft className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Clock className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <CloseSquared className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Envelop className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <EnvelopRounded className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <File className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Instagram className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Linkedin className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Phone className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <PhoneRounded className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <PinRounded className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Telegram className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
          <Whatsapp className="text-dark-slate-blue text-4xl mr-4  hover:text-6xl transition-all" />
        </li>
        <li>
          <p className="text-sm text-blue-400">
            test translateX and position absolute
          </p>
          <div className="relative flex items-center h-12 border border-red-100 group cursor-pointer">
            <span className="text-blue-500 absolute right-1/2 transform translate-x-1/2 transition-all duration-500 group-hover:right-4 group-hover:translate-x-0">
              absolute
            </span>
          </div>
        </li>
      </ul>

      <Link href="/">
        <a className="hover:text-blue-500">بازگشت به خانه</a>
      </Link>
    </>
  );
};

export default Components;
