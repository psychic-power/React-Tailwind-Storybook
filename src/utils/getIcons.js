import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const GetIcons = ({ iconName, ...props }) => {
  switch (iconName) {
    case "ArrowPathIcon":
      return <ArrowPathIcon {...props} />;
    case "Bars3Icon":
      return <Bars3Icon {...props} />;
    case "BookmarkSquareIcon":
      return <BookmarkSquareIcon {...props} />;
    case "CalendarIcon":
      return <CalendarIcon {...props} />;
    case "ChartBarIcon":
      return <ChartBarIcon {...props} />;
    case "CursorArrowRaysIcon":
      return <CursorArrowRaysIcon {...props} />;
    case "LifebuoyIcon":
      return <LifebuoyIcon {...props} />;
    case "PhoneIcon":
      return <PhoneIcon {...props} />;
    case "PlayIcon":
      return <PlayIcon {...props} />;
    case "ShieldCheckIcon":
      return <ShieldCheckIcon {...props} />;
    case "Squares2X2Icon":
      return <Squares2X2Icon {...props} />;
    default:
      return <XMarkIcon {...props} />;
  }
};

export default GetIcons;
