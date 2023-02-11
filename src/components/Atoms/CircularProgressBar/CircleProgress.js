import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function CircleProgress({ percentage }) {
  if (percentage >= 100) {
    return (
      <div className="text-success-light dark:text-success-dark">
        <CheckCircleIcon className="w-4 h-4" />
      </div>
    );
  } else {
    return (
      <div className="w-3.5 h-3.5">
        <CircularProgressbar
          value={percentage}
          strokeWidth={16}
          styles={buildStyles({
            pathColor: "#057A55",
            strokeLinecap: "round",
          })}
        >
          {percentage}
        </CircularProgressbar>
      </div>
    );
  }
}
