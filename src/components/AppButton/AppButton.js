import React from 'react';
import { ButtonSize, ButtonType, FontFamily } from '../../utils/theme';

export default function AppButton ({size, type, disabled, font, children}) {

  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size] + " " + FontFamily[font] + " disabled:cursor-no-drop disabled:opacity-50 disabled:shadow-none";
  return (
    <div className='inline-flex outline-none justify-center font-inter bg-clip-padding items-center rounded-lg text-base px-4.5 py-2.5 active:shadow-none hover:cursor-pointer'>
    <button disabled={disabled} className={classNames}>{children}</button></div>
  )
}

