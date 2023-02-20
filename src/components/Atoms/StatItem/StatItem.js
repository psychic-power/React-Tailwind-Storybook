import { Color, Size } from "../../../utils/theme";
import CircleProgress from "../CircularProgressBar/CircleProgress";

/**
 * This component represents List items.
 *
 * @param {string} itemName - Title of item
 * @param {string} icon - Icon located on the left side of itemName
 * @param {number} percent - The percent of progress
 * @param rest - The rest of other props. It can include custom style, key, id, alt etc
 */

export default function StatItem({ itemName, icon, percent, ...rest }) {
  return (
    <button
      className="w-40 h-8 flex items-center pl-3.5 pr-2 justify-between rounded bg-surface-base-light hover:bg-action-hover-light focus:bg-action-select-light dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:focus:bg-action-select-dark"
      {...rest}
    >
      <div className="flex space-x-2 items-center">
        <div className={Size.icon.xs}>{icon}</div>
        <p className={`medium ${Color.text.primary}`}>{itemName}</p>
      </div>
      <div className="flex space-x-1 items-center">
        <caption className={Color.text.primary}>{percent}%</caption>
        <CircleProgress percentage={percent} />
      </div>
    </button>
  );
}
