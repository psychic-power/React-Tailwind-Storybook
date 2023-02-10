import React from "react";
import { BgColor } from "../../../utils/theme";
import Typography from "../Typography/Typography";

export default function Counter({ children, textColor, bgColor }) {
  return (
    <div
      className={`flex justify-center items-center px-1 rounded w-fit ${BgColor[bgColor]}`}
    >
      <Typography type={"caption"} color={textColor} >{children}</Typography>
    </div>
  );
}
