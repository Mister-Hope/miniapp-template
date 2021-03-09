import { startup } from "./utils/app";
import { version } from "./config";

export interface GlobalData {
  /** 版本号 */
  version: string;
  /** 用户的 openid */
  openid: string;
  /** 夜间模式开启状态 */
  darkmode: boolean;
  /** 设备信息 */
  info: WechatMiniprogram.SystemInfo;
}

export interface AppOption {
  globalData: GlobalData;
}

App({
  globalData: ({
    version,
    openid: "",
  } as unknown) as GlobalData,

  onLaunch() {
    startup(this.globalData);
  },
});
