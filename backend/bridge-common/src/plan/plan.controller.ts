import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam } from "@nestjs/swagger";
import { planList } from "@src/types/plan";
import { response } from "@src/types/response";
import { Request, Response } from "express";
import { PlnEntity } from "@src/plan/entities/plan.entity";
import { PlanService } from "@src/plan/plan.service";

@Controller("/plan")
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  // S : getPlanList
  @Get("/getPlanList")
  @ApiOperation({
    summary: "테스트 플랜 리스트",
    description: "테스트 플랜 리스트를 가져온다.",
  })
  @ApiCreatedResponse({
    description: "테스트 플랜 리스트를 가져온다.",
    type: PlnEntity,
  })
  getData() {
    const res: response<planList[]> = {
      message: "플랜 리스트",
      data: this.planService.getPlan(),
      status: 200,
    };

    return res;
  }
  // E : getPlanList

  // S : getPlanList
  @Get("/getPlanById")
  @ApiOperation({
    summary: "플랜 ID로 플랜 상세 조회",
    description: "플랜 ID로 플랜 상세를 가져온다.",
  })
  @ApiCreatedResponse({
    description: "플랜 ID로 플랜 상세를 가져온다.",
    type: PlnEntity,
  })
  async getPlanById(@Query('planId') planId) {
    const plan = await this.planService.getPlanById(planId);
    let res: response<PlnEntity>;
    let title: string = '';
    let message: string;
    if(plan) {
      message = '검색 성공'
    } else {
      title = '해당 플랜이 없습니다.'
      message = '새로운 플랜을 등록해보시는건 어떨까요?'
    }
    res = {
      title: title,
      message: message,
      data: plan,
      status: 200
    }

    return res;
  }
  // E : getPlanList

  // S : getPlannedPlan
  @Get("/getPlannedPlan")
  @ApiOperation({
    summary: "내가 기획한 플랜 조회",
    description: "User Id로 기획한 플랜 리스트를 가져온다.",
  })
  @ApiCreatedResponse({
    description: "User Id로 기획한 플랜 리스트를 가져온다.",
    type: PlnEntity,
  })
  async getPlannedPlan(@Query('mbrId') mbrId) {
    const plan = await this.planService.getPlannedPlan(mbrId);
    let res: response<PlnEntity[]>;
    let message: string;
    if(plan.length) {
      message = '검색 성공'
    } else {
      message = '기획한 플랜이 없습니다.'
    }
    res = {
      message: message,
      data: plan,
      status: 200
    }

    return res;
  }
  // E : getPlannedPlan

  // S : insertPlan
  @Post("/insertPlan")
  @ApiOperation({
    summary: "플랜 생성/수정",
    description:
      "플랜을 생성 혹은 수정 하여 upsert 한다. (id가 conflict날 때 update)",
  })
  @ApiCreatedResponse({
    description: "새로운 플랜을 생성 한다.",
    type: null,
  })
  insertPlan(@Body() plan: PlnEntity) {
    try {
      this.planService.insertPlan(plan);
      const response: response<planList[]> = {
        message: "플랜을 성공적으로 등록하였습니다.",
        data: void 0,
        status: 200,
      };
      return response;
    } catch (e) {
      console.error(e);
    }
  }
  // E : insertPlan

  // S : getAllPlan
  @Get("/getAllPlan")
  @ApiOperation({
    summary: "모든 플랜 리스트",
    description: "모든 플랜을 가져온다.",
  })
  @ApiCreatedResponse({
    description: "모든 플랜을 가져온다.",
    type: PlnEntity,
  })
  getAllPlan() {
    return this.planService.getAllPlan();
  }
  // E : getAllPlan

  @Get("/getTest/:id/:ctg")
  @ApiParam({
    name: "testParam",
    required: false,
    description: "파라미터에 대한 설명입니다.",
    schema: { oneOf: [{ type: "string" }, { type: "integer" }] },
  })
  getTest(@Query() query, @Param() param) {
    const sampleData = {
      message: "파라미터 테스트 API",
      data: "123abc",
      timestamp: new Date().toISOString(),
    };
    return sampleData;
  }
}
