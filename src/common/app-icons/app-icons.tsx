import { FaUserGroup, FaStar, FaLaptop } from "react-icons/fa6";
import { FaClipboardList, FaHome } from "react-icons/fa";
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
import { IoPerson } from "react-icons/io5";

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
  | "menu-close"
  | "person"
  | "program"
  | "home";

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
  person: <IoPerson />,
  program: <FaClipboardList />,
  home: <FaHome />,
} as const;
