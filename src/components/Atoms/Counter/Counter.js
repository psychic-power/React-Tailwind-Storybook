import React from "react";
import { BgColor } from "../../../utils/theme";
import { Caption } from "../Typography/Typography";

/**
 * This component counter.
 *
 * @param {number} children - The content of the text, viz number of counter
 * @param {string} textColor - The color of counter text - it includes primary, secondary, tetriary and default is primary
 * @param {string} bgColor - The background color of counter - selected is default
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

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
