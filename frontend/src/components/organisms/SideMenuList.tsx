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

const PUBLIC_PLAN = [
  {
    text: "플랜 리스트",
    href: "/plan/list",
    icon: FormatListBulletedOutlinedIcon,
  },
  {
    text: "플랜 캘린더",
    href: "/plan/calendar",
    icon: CalendarMonthOutlinedIcon,
  },
  { text: "매거진", href: "/magazine", icon: NewspaperOutlinedIcon },
];

const MY_PLAN = [
  { text: "구매한 플랜", href: "/plan/list", icon: ShoppingBagOutlinedIcon },
  {
    text: "기획한 플랜",
    href: "/plan/calendar",
    icon: BorderColorOutlinedIcon,
  },
  {
    text: "관심있는 플랜",
    href: "/magazine",
    icon: FavoriteBorderOutlinedIcon,
  },
];

const PLACEHOLDER_LINKS = [
  { text: "작성한 리뷰", icon: RateReviewOutlinedIcon },
  { text: "자주묻는 질문", icon: QuizOutlinedIcon },
  { text: "1:1 문의", icon: QuestionAnswerOutlinedIcon },
  { text: "개인정보수집안내", icon: CategoryOutlinedIcon },
];

export default function SideMenuList() {
  return (
    <>
      <MenuBundle menu={PUBLIC_PLAN} />
      <MenuBundle menu={MY_PLAN} />
      <MenuBundle menu={PLACEHOLDER_LINKS} sx={{ mt: "auto", fontSize: 12 }} />
    </>
  );
}
