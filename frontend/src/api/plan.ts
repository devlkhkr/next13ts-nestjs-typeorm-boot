import { api } from "./config";

export async function getPlanList() {
  const planList = api(
    "/plan/getPlanList",
    "GET",
    { t1: 1, t2: 2 },
    "no-store"
  );
  return planList;
}
