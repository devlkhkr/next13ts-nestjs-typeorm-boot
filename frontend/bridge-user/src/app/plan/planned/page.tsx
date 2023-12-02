import { Auth } from "@/components/atoms/Auth";
import Empty from "@/components/templates/Empty";
import { Button } from "@mui/material";
import Link from "next/link";
import PlannedPlanList from "@/components/templates/PlannedPlanList";

export default async function PlannedPlan() {
  return (
    <>
      <Auth
        component={
          <Empty
            title={"로그인 하여 플랜을 기획해보세요!"}
            message={`배틀, 레슨, 세션 등 다양한 플랜을 기획하고 간편하게 관리할 수 있습니다.`}
            btnTitle="로그인하기"
            btnLinkHref="/api/auth/signin"
          />
        }
      >
        <Link href={"/plan/regist"}>
          <Button>플랜 등록</Button>
        </Link>
        <PlannedPlanList />
      </Auth>
    </>
  );
}
