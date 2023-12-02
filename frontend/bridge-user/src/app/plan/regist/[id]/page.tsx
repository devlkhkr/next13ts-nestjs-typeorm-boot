"use client";
import { useEffect, useState } from "react";
import RegistPlan from "@/components/pages/RegistPlan";
import Empty from "@/components/templates/Empty";
import { getPlanById } from "@/api/plan";
import { Plan } from "@/types/plan";
import dynamic from "next/dynamic";

const PlanEdit = ({ params }: { params: { id: string } }) => {
  const [planResponse, setPlanResponse] = useState<{
    data: Plan;
    message: string;
    title: string;
  } | null>(null);

  async function fetchPlanData() {
    try {
      const response = await getPlanById(params.id);
      setPlanResponse(response);
    } catch (error) {
      console.error("Error fetching plan data:", error);
    }
  }

  useEffect(() => {
    fetchPlanData();
  }, [params.id]);

  if (planResponse?.data === null) {
    return (
      <Empty
        title={planResponse.title || ""}
        message={planResponse.message || ""}
        btnTitle="플랜 등록하기"
        btnLinkHref="/plan/regist"
      />
    );
  } else if (planResponse) {
    return <RegistPlan plan={planResponse.data} />;
  } else {
    return <></>;
  }
};

export default dynamic(() => Promise.resolve(PlanEdit), {
  ssr: false,
  loading: () => <div>RegistPlan Skeleton</div>,
});
