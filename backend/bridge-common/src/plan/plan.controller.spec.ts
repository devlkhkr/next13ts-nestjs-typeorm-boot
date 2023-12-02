import { Test, TestingModule } from "@nestjs/testing";
import { PlanController } from "@src/plan/plan.controller";
import { PlanService } from "@src/plan/plan.service";

describe("PlanController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PlanController],
      providers: [PlanService],
    }).compile();
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(PlanController);
      expect(appController.getData()).toBe("Hello World!");
    });
  });
});
