import React from "react";
import { BgColor } from "../../../utils/theme";
import { Caption } from "../Typography/Typography";

export default function Counter({ children, textColor, bgColor, ...rest }) {
  return (
    <div
      className={`flex justify-center items-center px-1 rounded w-fit ${BgColor[bgColor]}`}
      {...rest}
    >
      <Caption color={textColor}>
        {children}
      </Caption>
    </div>
  );
}
