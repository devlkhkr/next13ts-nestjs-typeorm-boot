import PlanSlider from "@/components/templates/PlanSlider";
import { plan } from "@/types/plan";
import { Typography } from "@mui/material";
import { getPlanList } from "@/api/plan";
import theme from "@/theme/theme";

interface defaultApiResponse<T> {
  message: string;
  timestamp: Date;
  data: T;
}
export default async function HomePage({ mbrId }: { mbrId: string }) {
  const planList: defaultApiResponse<plan[]> = await getPlanList();
  console.log(planList);

  return (
    <div>
      <div>
        <Typography style={{ marginBottom: "16px", fontWeight: "600" }}>
          지금 뜨고있는 플랜
        </Typography>
        <PlanSlider planList={planList.data} />
      </div>
    </div>
  );
}
