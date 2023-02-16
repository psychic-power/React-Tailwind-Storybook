import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

/**
 * This component is circle progress icon.
 *
 * @param {number} percentage - Percent of progress. So if the it equals 100, it shows complete icon. Or else it fills the ring accoring to the percent.
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function CircleProgress({ percentage, ...rest }) {
  if (percentage >= 100) {
    return (
      <div className="text-success-light dark:text-success-dark" {...rest}>
        <CheckCircleIcon className="w-4 h-4" />
      </div>
    );
  } else {
    return (
      <div className="w-3.5 h-3.5" {...rest}>
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
