export interface ConfigINF {
  id?: string;
  sort?: number;
  createMbrId?: string;
  updateMbrId?: string;
  createStmp?: number;
  updateStmp?: number;
}
export abstract class VoConfig {
  id?: string;
  sort?: number;
  createMbrId?: string;
  updateMbrId?: string;
  createStmp?: number;
  updateStmp?: number;

  constructor(configInfo: ConfigINF) {
    Object.assign(this, configInfo);
  }
}
