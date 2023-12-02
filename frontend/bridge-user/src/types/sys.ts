import { ConfigINF, VoConfig } from "./config";

export interface DictINF extends ConfigINF {
  dictNm?: string;
  dictCd?: string;
  dictDesc?: string;
}

export class Dict extends VoConfig implements DictINF {
  dictNm?: string;
  dictCd?: string;
  dictDesc?: string;
  constructor(dictInfo: DictINF) {
    super(dictInfo);
    Object.assign(this, dictInfo);
  }
}

export interface DictItemINF extends ConfigINF {
  dictId?: string;
  dictItemCd?: string;
  dictItemTxt?: string;
  dictItemDesc?: string;
}

export class DictItem extends VoConfig implements DictItemINF {
  dictId?: string;
  dictItemCd?: string;
  dictItemTxt?: string;
  dictItemDesc?: string;
  constructor(dictItemInfo: DictItemINF) {
    super(dictItemInfo);
    Object.assign(this, dictItemInfo);
  }
}
