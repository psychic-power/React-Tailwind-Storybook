import React from "react";
import { TextColor } from "../../../utils/theme";

export default function Typography({ type, children, color, ...rest }) {
  switch (type) {
    case "h1":
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
    case "h2":
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
    case "h3":
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
    case "p-semibold":
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
    case "p-medium":
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
    case "p-regular":
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
    case "caption":
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
    case "caption2":
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
    default:
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
  }
}
