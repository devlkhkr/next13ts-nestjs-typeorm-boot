"use client";
import { useEffect, useState } from "react";
import PlanTable, { PlanTableSktn } from "../organisms/PlanTable";
import { getPlannedPlan } from "@/api/plan";
import { Plan } from "@/types/plan";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const PlannedPlanList = () => {
  const { data: session } = useSession();
  const [plannedPlanList, setPlannedPlanList] = useState<Plan[] | null>(null);

  const fetchPlannedPlan = async () => {
    if (session?.user.id) {
      const result = await getPlannedPlan(session.user.id);
      setPlannedPlanList(result.data);
    }
  };

  useEffect(() => {
    fetchPlannedPlan();
  }, [session]);

  if (plannedPlanList != null) {
    return <PlanTable plans={plannedPlanList} />;
  }
  return <></>;
};

export default dynamic(() => Promise.resolve(PlannedPlanList), {
  ssr: false,
  loading: () => <PlanTableSktn />,
});
