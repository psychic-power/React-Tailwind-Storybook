export const ButtonType = {
  primary:
    "middle none center mr-4 rounded-lg bg-purple-500 font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 active:opacity-[0.85] active:shadow-none",
  secondary:
    "middle none center mr-4 rounded-lg bg-blue-500 font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] active:shadow-none",
  basic:
    "middle none center mr-4 rounded-lg bg-gray-500 font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85] active:shadow-none",
  danger:
    "middle none center mr-4 rounded-lg bg-red-500 font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] active:shadow-none",
};

export const ButtonSize = {
  sm: "py-2 px-4 text-xs",
  md: "py-2.5 px-5 text-base",
  lg: "py-3 px-6 text-xl",
};

export const PaginateColor = {
  basic: "bg-gray-200 hover:bg-gray-300",
  primary: "bg-purple-700 hover:bg-purple-900 text-white",
  secondary: "bg-blue-700 hover:bg-blue-900 text-white",
}

export const FontFamily = {
  Inter: "font-inter",
  Default: "font-sans",
  Bodoni: "font-bodoni",
  Garamond: "font-garamond",
  Helvetica: "font-helvetica",
  Verdana: "font-verdana",
  Poppins: "font-poppins",
};

const textColors = ["text-white", "text-black", 
"text-gray-50", "text-gray-100", "text-gray-200", "text-gray-300", "text-gray-400", "text-gray-500", "text-gray-600", "text-gray-700", "text-gray-800", "text-gray-900",
"text-primary-50", "text-primary-100", "text-primary-200", "text-primary-300", "text-primary-400", "text-primary-500", "text-primary-600", "text-primary-700", "text-primary-800", "text-primary-900",
"text-green-50", "text-green-100", "text-green-200", "text-green-300", "text-green-400", "text-green-500", "text-green-600", "text-green-700", "text-green-800", "text-green-900",
"text-red-50", "text-red-100", "text-red-200", "text-red-300", "text-red-400", "text-red-500", "text-red-600", "text-red-700", "text-red-800", "text-red-900",
"text-yellow-50", "text-yellow-100", "text-yellow-200", "text-yellow-300", "text-yellow-400", "text-yellow-500", "text-yellow-600", "text-yellow-700", "text-yellow-800", "text-yellow-900",
"text-teal-50", "text-teal-100", "text-teal-200", "text-teal-300", "text-teal-400", "text-teal-500", "text-teal-600", "text-teal-700", "text-teal-800", "text-teal-900",
"text-blue-50", "text-blue-100", "text-blue-200", "text-blue-300", "text-blue-400", "text-blue-500", "text-blue-600", "text-blue-700", "text-blue-800", "text-blue-900",
"text-indigo-50", "text-indigo-100", "text-indigo-200", "text-indigo-300", "text-indigo-400", "text-indigo-500", "text-indigo-600", "text-indigo-700", "text-indigo-800", "text-indigo-900",
"text-purple-50", "text-purple-100", "text-purple-200", "text-purple-300", "text-purple-400", "text-purple-500", "text-purple-600", "text-purple-700", "text-purple-800", "text-purple-900",
"text-pink-50", "text-pink-100", "text-pink-200", "text-pink-300", "text-pink-400", "text-pink-500", "text-pink-600", "text-pink-700", "text-pink-800", "text-pink-900",
"text-social-facebook", "text-social-twitter", "text-social-google", "text-social-dribble", "text-social-github",
]

const darkTextColors = ["dark:text-white", "dark:text-black", 
"dark:text-gray-50", "dark:text-gray-100", "dark:text-gray-200", "dark:text-gray-300", "dark:text-gray-400", "dark:text-gray-500", "dark:text-gray-600", "dark:text-gray-700", "dark:text-gray-800", "dark:text-gray-900",
"dark:text-primary-50", "dark:text-primary-100", "dark:text-primary-200", "dark:text-primary-300", "dark:text-primary-400", "dark:text-primary-500", "dark:text-primary-600", "dark:text-primary-700", "dark:text-primary-800", "dark:text-primary-900",
"dark:text-green-50", "dark:text-green-100", "dark:text-green-200", "dark:text-green-300", "dark:text-green-400", "dark:text-green-500", "dark:text-green-600", "dark:text-green-700", "dark:text-green-800", "dark:text-green-900",
"dark:text-red-50", "dark:text-red-100", "dark:text-red-200", "dark:text-red-300", "dark:text-red-400", "dark:text-red-500", "dark:text-red-600", "dark:text-red-700", "dark:text-red-800", "dark:text-red-900",
"dark:text-yellow-50", "dark:text-yellow-100", "dark:text-yellow-200", "dark:text-yellow-300", "dark:text-yellow-400", "dark:text-yellow-500", "dark:text-yellow-600", "dark:text-yellow-700", "dark:text-yellow-800", "dark:text-yellow-900",
"dark:text-teal-50", "dark:text-teal-100", "dark:text-teal-200", "dark:text-teal-300", "dark:text-teal-400", "dark:text-teal-500", "dark:text-teal-600", "dark:text-teal-700", "dark:text-teal-800", "dark:text-teal-900",
"dark:text-blue-50", "dark:text-blue-100", "dark:text-blue-200", "dark:text-blue-300", "dark:text-blue-400", "dark:text-blue-500", "dark:text-blue-600", "dark:text-blue-700", "dark:text-blue-800", "dark:text-blue-900",
"dark:text-indigo-50", "dark:text-indigo-100", "dark:text-indigo-200", "dark:text-indigo-300", "dark:text-indigo-400", "dark:text-indigo-500", "dark:text-indigo-600", "dark:text-indigo-700", "dark:text-indigo-800", "dark:text-indigo-900",
"dark:text-purple-50", "dark:text-purple-100", "dark:text-purple-200", "dark:text-purple-300", "dark:text-purple-400", "dark:text-purple-500", "dark:text-purple-600", "dark:text-purple-700", "dark:text-purple-800", "dark:text-purple-900",
"dark:text-pink-50", "dark:text-pink-100", "dark:text-pink-200", "dark:text-pink-300", "dark:text-pink-400", "dark:text-pink-500", "dark:text-pink-600", "dark:text-pink-700", "dark:text-pink-800", "dark:text-pink-900",
"dark:text-social-facebook", "dark:text-social-twitter", "dark:text-social-google", "dark:text-social-dribble", "dark:text-social-github",
]

const bgColors = ["bg-white", "bg-black", 
"bg-gray-50", "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900",
"bg-primary-50", "bg-primary-100", "bg-primary-200", "bg-primary-300", "bg-primary-400", "bg-primary-500", "bg-primary-600", "bg-primary-700", "bg-primary-800", "bg-primary-900",
"bg-green-50", "bg-green-100", "bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700", "bg-green-800", "bg-green-900",
"bg-red-50", "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
"bg-yellow-50", "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900",
"bg-teal-50", "bg-teal-100", "bg-teal-200", "bg-teal-300", "bg-teal-400", "bg-teal-500", "bg-teal-600", "bg-teal-700", "bg-teal-800", "bg-teal-900",
"bg-blue-50", "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900",
"bg-indigo-50", "bg-indigo-100", "bg-indigo-200", "bg-indigo-300", "bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-indigo-700", "bg-indigo-800", "bg-indigo-900",
"bg-purple-50", "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900",
"bg-pink-50", "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500", "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900",
"bg-social-facebook", "bg-social-twitter", "bg-social-google", "bg-social-dribble", "bg-social-github",
]

const darkBgColors = ["dark:bg-white", "dark:bg-black", 
"dark:bg-gray-50", "dark:bg-gray-100", "dark:bg-gray-200", "dark:bg-gray-300", "dark:bg-gray-400", "dark:bg-gray-500", "dark:bg-gray-600", "dark:bg-gray-700", "dark:bg-gray-800", "dark:bg-gray-900",
"dark:bg-primary-50", "dark:bg-primary-100", "dark:bg-primary-200", "dark:bg-primary-300", "dark:bg-primary-400", "dark:bg-primary-500", "dark:bg-primary-600", "dark:bg-primary-700", "dark:bg-primary-800", "dark:bg-primary-900",
"dark:bg-green-50", "dark:bg-green-100", "dark:bg-green-200", "dark:bg-green-300", "dark:bg-green-400", "dark:bg-green-500", "dark:bg-green-600", "dark:bg-green-700", "dark:bg-green-800", "dark:bg-green-900",
"dark:bg-red-50", "dark:bg-red-100", "dark:bg-red-200", "dark:bg-red-300", "dark:bg-red-400", "dark:bg-red-500", "dark:bg-red-600", "dark:bg-red-700", "dark:bg-red-800", "dark:bg-red-900",
"dark:bg-yellow-50", "dark:bg-yellow-100", "dark:bg-yellow-200", "dark:bg-yellow-300", "dark:bg-yellow-400", "dark:bg-yellow-500", "dark:bg-yellow-600", "dark:bg-yellow-700", "dark:bg-yellow-800", "dark:bg-yellow-900",
"dark:bg-teal-50", "dark:bg-teal-100", "dark:bg-teal-200", "dark:bg-teal-300", "dark:bg-teal-400", "dark:bg-teal-500", "dark:bg-teal-600", "dark:bg-teal-700", "dark:bg-teal-800", "dark:bg-teal-900",
"dark:bg-blue-50", "dark:bg-blue-100", "dark:bg-blue-200", "dark:bg-blue-300", "dark:bg-blue-400", "dark:bg-blue-500", "dark:bg-blue-600", "dark:bg-blue-700", "dark:bg-blue-800", "dark:bg-blue-900",
"dark:bg-indigo-50", "dark:bg-indigo-100", "dark:bg-indigo-200", "dark:bg-indigo-300", "dark:bg-indigo-400", "dark:bg-indigo-500", "dark:bg-indigo-600", "dark:bg-indigo-700", "dark:bg-indigo-800", "dark:bg-indigo-900",
"dark:bg-purple-50", "dark:bg-purple-100", "dark:bg-purple-200", "dark:bg-purple-300", "dark:bg-purple-400", "dark:bg-purple-500", "dark:bg-purple-600", "dark:bg-purple-700", "dark:bg-purple-800", "dark:bg-purple-900",
"dark:bg-pink-50", "dark:bg-pink-100", "dark:bg-pink-200", "dark:bg-pink-300", "dark:bg-pink-400", "dark:bg-pink-500", "dark:bg-pink-600", "dark:bg-pink-700", "dark:bg-pink-800", "dark:bg-pink-900",
"dark:bg-social-facebook", "dark:bg-social-twitter", "dark:bg-social-google", "dark:bg-social-dribble", "dark:bg-social-github",
]

const size = [
  "w-1", "w-2", "w-3", "w-4", "w-5", "w-6", "w-7", "w-8", "w-9", "w-10",
  "w-11", "w-12", "w-13", "w-14", "w-15", "w-16", "w-17", "w-18", "w-19", "w-20",
  "h-1", "h-2", "h-3", "h-4", "h-5", "h-6", "h-7", "h-8", "h-9", "h-10",
  "h-11", "h-12", "h-13", "h-14", "h-15", "h-16", "h-17", "h-18", "h-19", "h-20",
]
