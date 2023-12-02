import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MenuBundle from "../molecules/MenuBundle";
import { getPathName } from "@/util/util";

const LOGO = [
  {
    text: getPathName("/"),
    href: "/",
  },
];
const PUBLIC_PLAN = [
  {
    text: getPathName("/plan/list"),
    href: "/plan/list",
    icon: FormatListBulletedOutlinedIcon,
  },
  {
    text: getPathName("/plan/calendar"),
    href: "/plan/calendar",
    icon: CalendarMonthOutlinedIcon,
  },
  {
    text: getPathName("/magazine"),
    href: "/magazine",
    icon: NewspaperOutlinedIcon,
  },
];

const MY_PLAN = [
  {
    text: getPathName("/plan/planned"),
    href: "/plan/planned",
    icon: BorderColorOutlinedIcon,
  },
];

const MY_CONTENTS = [
  {
    text: getPathName("/plan/booked"),
    href: "/plan/booked",
    icon: ShoppingBagOutlinedIcon,
  },
  {
    text: getPathName("/plan/interested"),
    href: "/plan/interested",
    icon: FavoriteBorderOutlinedIcon,
  },
  {
    text: getPathName("/review/list"),
    href: "/review/list",
    icon: RateReviewOutlinedIcon,
  },
];

const PLACEHOLDER_LINKS = [
  { text: getPathName("/faq"), href: "/faq", icon: QuizOutlinedIcon },
  {
    text: getPathName("/inquiry/list"),
    href: "/inquiry/list",
    icon: QuestionAnswerOutlinedIcon,
  },
  {
    text: getPathName("/privacy-policy"),
    href: "/privacy-policy",
    icon: CategoryOutlinedIcon,
  },
];

export default function SideMenuList({}: {}) {
  return (
    <>
      <MenuBundle menu={LOGO} />
      <MenuBundle menu={PUBLIC_PLAN} />
      <MenuBundle menu={MY_CONTENTS} />
      <MenuBundle menu={MY_PLAN} />
      <MenuBundle menu={PLACEHOLDER_LINKS} sx={{ mt: "auto" }} />
    </>
  );
}
