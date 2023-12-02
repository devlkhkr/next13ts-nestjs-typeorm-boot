export function getPathName(path: string) {
  switch (path) {
    case "/":
      return "Bridge";
    case "/plan/list":
      return "플랜 리스트";
    case "/plan/calendar":
      return "플랜 캘린더";
    case "/magazine":
      return "매거진";
    case "/plan/regist":
      return "플랜 등록";
    case "/plan/booked":
      return "마이 티켓";
    case "/plan/planned":
      return "기획한 플랜";
    case "/plan/interested":
      return "관심있는 플랜";
    case "/review/list":
      return "마이 리뷰";
    case "/faq":
      return "자주묻는 질문";
    case "/inquiry/list":
    case "/inquiry/regist":
      return "1:1 문의";
    case "/privacy-policy":
      return "개인정보수집안내";
    default:
      if (path.startsWith("/plan/regist/")) {
        return "플랜 수정";
      }
      return path;
  }
}

export function getTodayYMD() {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, "/");
  return formattedDate;
}
