import { FaUserGroup, FaStar, FaLaptop } from "react-icons/fa6";
import {
  MdSchedule,
  MdLocationOn,
  MdOutlineHtml,
  MdOutlineCss,
  MdOutlineJavascript,
  MdSchool,
  MdOutlineConstruction,
  MdCloudUpload,
  MdSend,
} from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";

type IconType =
  | "construction"
  | "css"
  | "group"
  | "html"
  | "javascript"
  | "laptop"
  | "location"
  | "schedule"
  | "school"
  | "star"
  | "upload"
  | "done"
  | "send";

export const APP_ICONS: Record<IconType, React.ReactNode> = {
  construction: <MdOutlineConstruction />,
  css: <MdOutlineCss />,
  done: <BsFillPatchCheckFill />,
  group: <FaUserGroup />,
  html: <MdOutlineHtml />,
  javascript: <MdOutlineJavascript />,
  laptop: <FaLaptop />,
  location: <MdLocationOn />,
  schedule: <MdSchedule />,
  school: <MdSchool />,
  send: <MdSend />,
  star: <FaStar />,
  upload: <MdCloudUpload />,
} as const;
