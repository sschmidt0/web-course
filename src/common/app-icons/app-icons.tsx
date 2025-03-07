import { FaUserGroup, FaStar, FaLaptop, FaCode } from "react-icons/fa6";
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
import { TbPigMoney, TbSeo } from "react-icons/tb";

type IconType =
  | "code"
  | "construction"
  | "css"
  | "done"
  | "group"
  | "home"
  | "html"
  | "javascript"
  | "laptop"
  | "location"
  | "menu-close"
  | "menu-open"
  | "person"
  | "price"
  | "program"
  | "schedule"
  | "school"
  | "send"
  | "seo"
  | "star"
  | "upload";

export const APP_ICONS: Record<IconType, React.ReactNode> = {
  code: <FaCode />,
  construction: <MdOutlineConstruction />,
  css: <MdOutlineCss />,
  done: <BsFillPatchCheckFill />,
  group: <FaUserGroup />,
  home: <FaHome />,
  html: <MdOutlineHtml />,
  javascript: <MdOutlineJavascript />,
  laptop: <FaLaptop />,
  location: <MdLocationOn />,
  "menu-close": <IoMdClose />,
  "menu-open": <FiMenu />,
  person: <IoPerson />,
  price: <TbPigMoney />,
  program: <FaClipboardList />,
  schedule: <MdSchedule />,
  school: <MdSchool />,
  send: <MdSend />,
  seo: <TbSeo />,
  star: <FaStar />,
  upload: <MdCloudUpload />,
} as const;
