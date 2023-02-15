import CircleProgress from "../../Atoms/CircularProgressBar/CircleProgress";
import IconButton from "../../Atoms/IconButton/IconButton";
import Typography, { Caption, H1, H3, PSemibold } from "../../Atoms/Typography/Typography";
import Sidebar from "../../Compounds/SidebarMenu/Sidebar";

export default function ActiveBoard({ ...rest }) {
  return (
    <div className="flex h-full bg-surface-alt-light dark:bg-surface-alt-dark">
      <Sidebar />
      <div className="flex flex-col w-80 bg-surface-base-light dark:bg-surface-base-dark" id="drawed">
        <div className="flex justify-between px-6 py-4 h-14 w-80 items-center border-b" id="header">
          <H3 type="h3">Eng Sprint 12</H3>
          <IconButton iconName="EllipsisHorizontalIcon" size="5" color="primary" />
        </div>
        <div className="flex flex-1 flex-col" id="body">
          <div className="flex flex-col p-6">
            <div className="flex flex-col">
              <div className="flex justify-between w-80">
                <div className="flex items-end space-x-2">
                  <H1>46%</H1>
                  <Caption color="secondary">19/44 points</Caption>
                </div>
                <div className="flex items-end space-x-2">
                  <CircleProgress percentage="100" />
                  <PSemibold>On track</PSemibold>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
