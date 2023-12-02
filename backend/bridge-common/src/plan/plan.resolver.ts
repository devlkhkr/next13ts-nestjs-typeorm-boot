import { UseGuards } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { PlnEntity } from "@src/plan/entities/plan.entity";
import { PlanService } from "@src/plan/plan.service";

@Resolver()
export class PlanResolver {
  constructor(private readonly planService: PlanService) {}

  @Query(() => PlnEntity, { description: "모든 플랜을 가져온다" })
  async getAllPlan(): Promise<PlnEntity[]> {
    return this.planService.getAllPlan();
  }
}
