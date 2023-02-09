import React from 'react';
import { ButtonSize, ButtonType } from '../../utils/theme';

// export const AppButton_1 = ({ size, bgColor, textColor, font, disabled, children }) => {
//   return (
//     <button
//       disabled={disabled}
//       className={`bg-${bgColor} text-${textColor} text-${size} font-${font.value} font-bold py-2 px-4 rounded disabled:cursor-no-drop`}
//     >
//       {children}
//     </button>
//   );
// }

export const AppButton_2 = ({size, type, disabled, children}) => {

  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size] + " disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
  return (
    <button disabled={disabled} className={classNames}>{children}</button>
  )
}

