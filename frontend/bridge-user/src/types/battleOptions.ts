import { ConfigINF, VoConfig } from "./config";

export interface BttlOptsINF extends ConfigINF {
  planId?: string;
  bttlGnrCd?: string;
  bttlMbrCnt?: number;
  bttlRsvFee?: number;
  otdYn?: "Y" | "N";
  bttlOtdFee?: number;
  mxdYn?: "Y" | "N";
  maxTeamCnt?: "Y" | "N";
}

export class BttlOpts extends VoConfig implements BttlOptsINF {
  planId?: string;
  bttlGnrCd?: string;
  bttlMbrCnt?: number;
  bttlRsvFee?: number;
  otdYn?: "Y" | "N";
  bttlOtdFee?: number;
  mxdYn?: "Y" | "N";
  maxTeamCnt?: "Y" | "N";
  constructor(bttlOpts: BttlOptsINF) {
    super(bttlOpts);
    Object.assign(this, bttlOpts);
  }
}
