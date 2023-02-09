import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { PaginateColor } from "../../utils/theme";

export default function AppPaginate({ count, disabled, size, color }) {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            disabled={disabled}
            onClick={() => (selected > 1 ? setSelected(selected - 1): null)}
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:opacity-70"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon
              className={`${
                size === "sm"
                  ? "h-3 w-3"
                  : size === "md"
                  ? "h-5 w-5"
                  : "h-7 w-7"
              }`}
              aria-hidden="true"
            />
          </button>

          {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
          {[...Array(count)].map((item, key) => (
            <button
              disabled={disabled}
              onClick={() => setSelected(key + 1)}
              key={key}
              className={`relative inline-flex items-center border font-medium focus:z-20 disabled:opacity-70  ${
                key + 1 === selected
                  ? "z-10 border-indigo-700 text-indigo-900"
                  : "border-gray-300 text-gray-500"
              } ${
                size === "sm"
                  ? "px-3 py-1 text-xs"
                  : size === "md"
                  ? "px-4 py-2 text-base"
                  : "px-5 py-3 text-lg"
              } ${PaginateColor[color]}`}
            >
              {key + 1}
            </button>
          ))}
          <button
            disabled={disabled}
            onClick={() => (selected < count ? setSelected(selected + 1): null)}
            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:opacity-70"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon
              className={`${
                size === "sm"
                  ? "h-3 w-3"
                  : size === "md"
                  ? "h-5 w-5"
                  : "h-7 w-7"
              }`}
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>
    </div>
  );
}
