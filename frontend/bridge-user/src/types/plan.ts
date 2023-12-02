import { ConfigINF, VoConfig } from "./config";

export type PlnTypeCd = "BTTL" | "LSSN" | "WRKSP" | "SHOW" | "SSSN";

export interface PlanINF extends ConfigINF {
  plnNm?: string;
  plnDsc?: string;
  plnRule?: string;
  plnLctnNm?: string;
  fileGrpId?: string;
  plnRoadAddr?: string;
  plnAddrDtl?: string;
  plnEntrFee?: number;
  plnJoinFee?: number;
  plnRwrd?: number;
  plnMaxCrwd?: number;
  plnTypeCd?: PlnTypeCd;
  plnDt?: string;
  plnStTm?: string;
  plnEndTm?: string;
  rRatedYn?: "Y" | "N";
}

export class Plan extends VoConfig implements PlanINF {
  plnNm?: string;
  plnDsc?: string;
  plnRule?: string;
  plnLctnNm?: string;
  fileGrpId?: string;
  plnRoadAddr?: string;
  plnAddrDtl?: string;
  plnEntrFee?: number;
  plnJoinFee?: number;
  plnRwrd?: number;
  plnMaxCrwd?: number;
  plnTypeCd?: PlnTypeCd;
  plnDt?: string;
  plnStTm?: string;
  plnEndTm?: string;
  rRatedYn?: "Y" | "N";
  constructor(planInfo: PlanINF) {
    super(planInfo);
    this.plnTypeCd = planInfo.plnTypeCd || "BTTL";
    this.plnStTm = planInfo.plnStTm || "2020/01/01 00:00:00";
    this.plnEndTm = planInfo.plnEndTm || "2020/01/01 00:00:00";
    this.rRatedYn = planInfo.rRatedYn || "Y";
    Object.assign(this, planInfo);
  }
}
