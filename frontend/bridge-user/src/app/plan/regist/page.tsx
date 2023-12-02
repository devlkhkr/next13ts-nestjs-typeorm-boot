import { Plan } from "@/types/plan";
import RegistPlan from "@/components/pages/RegistPlan";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function PlanRegist() {
  const plan: Plan = {};

  return <RegistPlan plan={plan} />;
}
