import React from "react";
import { TextColor } from "../../../utils/theme";

/**
 * This component represents typography.
 *
 * @param {string} children - The content of text
 * @param {string} color - Text color. Default is primary.
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 * There are 8 types H1, H2, H3, PSemobold, P-Medium, P-Regular, Caption, Caption2 
*/

export const H1 = ({ children, color, ...rest }) => {
  return (
    <h1
      className={`text-h1 font-semibold ${
        TextColor[color ? color : "primary"]
      }`}
      {...rest}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, color, ...rest }) => {
  return (
    <h2
    className={`text-h2 font-semibold ${
      TextColor[color ? color : "primary"]
    }`}
    {...rest}
  >
    {children}
  </h2>
  );
};

export const H3 = ({ children, color, ...rest }) => {
  return (
    <h3
    className={`text-h3 font-semibold ${
      TextColor[color ? color : "primary"]
    }`}
    {...rest}
  >
    {children}
  </h3>
  );
};

export const PSemibold = ({ children, color, ...rest }) => {
  return (
    <p
    className={`text-p font-semibold ${
      TextColor[color ? color : "primary"]
    }`}
    {...rest}
  >
    {children}
  </p>
  );
};

export const PMedium = ({ children, color, ...rest }) => {
  return (
    <p
          className={`text-p font-medium ${
            TextColor[color ? color : "primary"]
          }`}
          {...rest}
        >
          {children}
        </p>
  );
};

export const PRegular = ({ children, color, ...rest }) => {
  return (
    <p
          className={`text-p font-normal ${
            TextColor[color ? color : "primary"]
          }`}
          {...rest}
        >
          {children}
        </p>
  );
};

export const Caption = ({ children, color, ...rest }) => {
  return (
    <p
          className={`text-caption font-normal ${
            TextColor[color ? color : "primary"]
          }`}
          {...rest}
        >
          {children}
        </p>
  );
};

export const Caption2 = ({ children, color, ...rest }) => {
  return (
    <p
    className={`text-caption2 font-normal ${
      TextColor[color ? color : "primary"]
    }`}
    {...rest}
  >
    {children}
  </p>
  );
};

export default {
  H1, 
  H2,
  H3,
  PSemibold,
  PRegular,
  PMedium,
  Caption,
  Caption2,
}

// export default function Typography({ type, children, color, ...rest }) {
//   switch (type) {
//     case "h1":
//       return (
//         <h1
//           className={`text-h1 font-semibold ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </h1>
//       );
//     case "h2":
//       return (
//         <h2
//           className={`text-h2 font-semibold ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </h2>
//       );
//     case "h3":
//       return (
//         <h3
//           className={`text-h3 font-semibold ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </h3>
//       );
//     case "p-semibold":
//       return (
//         <p
//           className={`text-p font-semibold ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </p>
//       );
//     case "p-medium":
//       return (
//         <p
//           className={`text-p font-medium ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </p>
//       );
//     case "p-regular":
//       return (
//         <p
//           className={`text-p font-normal ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </p>
//       );
//     case "caption":
//       return (
//         <p
//           className={`text-caption font-normal ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </p>
//       );
//     case "caption2":
//       return (
//         <p
//           className={`text-caption2 font-normal ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </p>
//       );
//     default:
//       return (
//         <p
//           className={`text-p font-normal ${
//             TextColor[color ? color : "primary"]
//           }`}
//           {...rest}
//         >
//           {children}
//         </p>
//       );
//   }
// }
