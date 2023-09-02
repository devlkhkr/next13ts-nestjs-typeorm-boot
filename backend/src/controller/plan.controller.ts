import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { planList } from '@src/types/plan';
import { response } from '@src/types/response';
import { PlnEntity } from 'src/entities/plan.entity';
import { PlanService } from 'src/service/plan.service';

@Controller('/plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get('/getPlanList')
  @ApiOperation({
    summary: '테스트 플랜 리스트',
    description: '테스트 플랜 리스트를 가져온다.',
  })
  @ApiCreatedResponse({
    description: '테스트 플랜 리스트를 가져온다.',
    type: PlnEntity,
  })
  getData() {
    const res: response<planList[]> = {
      message: '플랜 리스트',
      data: this.planService.getPlan(),
      status: 200,
    };

    return res;
  }

  @Get('/getAllPlan')
  @ApiOperation({
    summary: '모든 플랜 리스트',
    description: '모든 플랜을 가져온다.',
  })
  @ApiCreatedResponse({
    description: '모든 플랜을 가져온다.',
    type: PlnEntity,
  })
  getAllPlan() {
    return this.planService.getAllPlan();
  }

  @Get('/getTest/:id/:ctg')
  @ApiParam({
    name: 'testParam',
    required: false,
    description: '파라미터에 대한 설명입니다.',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  getTest(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.ctg);
    const sampleData = {
      message: '파라미터 테스트 API',
      data: '123abc',
      timestamp: new Date().toISOString(),
    };
    return sampleData;
  }
}
