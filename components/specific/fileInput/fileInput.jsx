import React, { useState } from "react";
import { Check, File, CloseSquared } from "../../icons";
import Image from "next/image";
import clsx from "clsx";

// images
import rolling from "../../../public/images/Rolling-1.3s-203px.svg";

const FileInput = ({ e, className, name, onChange, ...props }) => {
  const [nameFileUpload, setNameFileUpload] = useState("");
  const [loadingFile, setLoadingFile] = useState(false);
  const [hasProgressFile, setHasProgressFile] = useState(false);
  const handelFileUpload = e => {
    setLoadingFile(true);
    setNameFileUpload(
      e.target.value.split("\\")[e.target.value.split("\\").length - 1]
    );

    // onChange && onChange();

    setTimeout(() => {
      setLoadingFile(false);
      setHasProgressFile(true);
    }, 5000);
  };

  return (
    <div className="flex-col flex ">
      <label className="text-3 mr-3 mb-2 lg:mb-3 font-Medium text-grey-blue lg:text-base  lg:mr-5">
        فایل رزومه:
      </label>
      <label
        htmlFor={name}
        className={` cursor-pointer border border-dashed border-dusky-blue h-[2.187rem] lg:h-[3.125rem] px-5 flex flex-row justify-center items-center rounded-lg relative ${className} ${
          nameFileUpload ? "justify-between transition-all duration-700" : ""
        }`}
      >
        <input
          name={name}
          id={name}
          type="file"
          className="hidden"
          onChange={handelFileUpload}
          {...props}
        />
        <div
          className={`flex flex-row  absolute right-1/2 transform translate-x-1/2 transition-all duration-500 items-center   ${
            nameFileUpload ? "right-4 translate-x-0" : ""
          }`}
        >
          <File className="text-4 ml-2 text-dusky-blue lg:text-xl" />
          {nameFileUpload ? (
            <>
              {nameFileUpload && (
                <CloseSquared
                  className={`text-dusky-blue text-3xl z-9999 h-6 ${
                    loadingFile
                      ? "text-green-blue-light text-3xl transition-colors duration-700"
                      : ""
                  }`}
                  onClick={e => {
                    e.preventDefault();
                    setLoadingFile(false);
                    setNameFileUpload("");
                    setHasProgressFile(false);
                  }}
                />
              )}
              <span
                className={`text-dusky-blue text-base overflow-ellipsis overflow-hidden whitespace-nowrap w-3/5 ${clsx(
                  loadingFile &&
                    "text-green-blue-light transition-colors duration-700"
                )}`}
              >
                {nameFileUpload}
              </span>
            </>
          ) : (
            <span className="font-Medium text-3 text-dusky-blue lg:text-base">
              آپلود فایل
            </span>
          )}
        </div>
        {loadingFile && (
          <div className="absolute left-1 lg:left-1  lg:top-2">
            <div className="w-8 h-8 relative">
              <Image
                src={rolling}
                alt="rolling"
                layout="fill"
                // width={32}
                // height={32}
                // className="w-5 lg:w-7 absolute left-3 "
              />
            </div>
          </div>
        )}
        {hasProgressFile && (
          <Check
            className={`text-green-blue-light text-xs absolute left-3 transition-all`}
          />
        )}
      </label>
    </div>
  );
};

export default FileInput;
