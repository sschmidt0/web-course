import { FaUserGroup, FaStar, FaLaptop } from "react-icons/fa6";
import {
  MdSchedule,
  MdLocationOn,
  MdOutlineHtml,
  MdOutlineCss,
  MdOutlineJavascript,
} from "react-icons/md";

type IconType =
  | "schedule"
  | "group"
  | "location"
  | "star"
  | "laptop"
  | "html"
  | "css"
  | "javascript";

export const APP_ICONS: Record<IconType, React.ReactNode> = {
  css: <MdOutlineCss />,
  group: <FaUserGroup />,
  html: <MdOutlineHtml />,
  javascript: <MdOutlineJavascript />,
  laptop: <FaLaptop />,
  location: <MdLocationOn />,
  schedule: <MdSchedule />,
  star: <FaStar />,
} as const;
