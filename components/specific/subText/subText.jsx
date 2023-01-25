import React from "react";
import SubTextBase from "../../base/subText";

const SubText = ({ children, className }) => {
  return <SubTextBase className={className}>{children}</SubTextBase>;
};

export default SubText;
