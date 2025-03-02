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
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

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
  | "send"
  | "menu-open"
  | "menu-close";

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
  "menu-open": <FiMenu />,
  "menu-close": <IoMdClose />,
} as const;
