import CircleProgress from "../CircularProgressBar/CircleProgress";
import CustomIcon from "../CustomIcon/CustomIcon";
import Typography, { Caption, PMedium } from "../Typography/Typography";

export default function ListItem({ itemname, iconname, percent, ...rest }) {
  return (
    <div
      className="w-40 h-8 flex justify-between rounded cursor-pointer items-center pl-3.5 pr-2 bg-surface-base-light hover:bg-action-hover-light active:bg-action-select-light dark:bg-surface-base-dark dark:hover:bg-action-hover-dark dark:active:bg-action-select-dark"
      {...rest}
    >
      <div className="flex space-x-2 items-center">
        <CustomIcon icon={iconname} size="14" />
        <PMedium>{itemname}</PMedium>
      </div>
      <div className="flex space-x-1 items-center">
        <Caption>{percent}%</Caption>
        <CircleProgress percentage={percent} />
      </div>
    </div>
  );
}
