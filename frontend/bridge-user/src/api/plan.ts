import { Plan } from "@/types/plan";
import { api } from "./config";

export function getPlanList() {
  const planList = api(
    "/plan/getPlanList",
    "GET",
    { t1: 1, t2: 2 },
    "no-store"
  );
  return planList;
}

export function getPlanById(planId: string):Promise<{
  title: string
  message: string
  data: Plan
}> {
  const planList = api(
    "/plan/getPlanById",
    "GET",
    { planId: planId },
    "no-store"
  );
  return planList;
}

export function getPlannedPlan(mbrId: string):Promise<{
  message: string
  data: Plan[]
}> {
  const planList = api(
    "/plan/getPlannedPlan",
    "GET",
    { mbrId: mbrId },
    "no-store"
  );
  return planList;
}

export function insertPlan(plan: Plan):Promise<{
  message: string
  data: Plan
  status: number
}> {
  const insertPlan = api(
    "/plan/insertPlan",
    "POST",
    {
      id: plan.id,
      plnNm: plan.plnNm,
      plnDsc: plan.plnDsc,
      plnRule: plan.plnRule,
      plnLctnNm: plan.plnLctnNm,
      fileGrpId: plan.fileGrpId,
      plnRoadAddr: plan.plnRoadAddr,
      plnAddrDtl: plan.plnAddrDtl,
      plnEntrFee: plan.plnEntrFee,
      plnJoinFee: plan.plnJoinFee,
      plnRwrd: plan.plnRwrd,
      plnMaxCrwd: plan.plnMaxCrwd,
      plnTypeCd: plan.plnTypeCd,
      plnDt: plan.plnDt,
      plnStTm: plan.plnStTm,
      plnEndTm: plan.plnEndTm,
      rRatedYn: plan.rRatedYn,
      sort: plan.sort,
      createMbrId: plan.createMbrId,
      updateMbrId: plan.updateMbrId,
    },
    "no-store"
  );
  return insertPlan;
}
