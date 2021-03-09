import { appName } from "../../config";
import { message } from "../../utils/message";

import type { AppOption } from "../../app";

const { globalData } = getApp<AppOption>();

Page({
  data: {
    appName,

    loaded: false,

    showPopup: false,
  },

  state: {
    openid: "",
  },

  onLoad() {
    // 写入基本信息
    this.setData({
      darkmode: globalData.darkmode,
      info: globalData.info,
    });

    if (globalData.openid) this.setOpenID(globalData.openid);
    else message.on("openid", this.setOpenID);

    if (wx.canIUse("onThemeChange")) wx.onThemeChange(this.themeChange);
  },

  onShareAppMessage: () => ({ title: appName, path: "/pages/main/main" }),

  onShareTimeline: () => ({ title: appName }),

  onAddToFavorites: () => ({ title: appName }),

  onUnload() {
    message.off("openid", this.setOpenID);

    if (wx.canIUse("onThemeChange")) wx.offThemeChange(this.themeChange);
  },

  /** 切换主题 */
  themeChange({ theme }: WechatMiniprogram.OnThemeChangeCallbackResult) {
    this.setData({ darkmode: theme === "dark" });
  },

  /** 设置 openid */
  setOpenID(openid: string) {
    this.state.openid = openid;
    this.setData({ loaded: true });
  },

  /** 关于 */
  about() {
    this.setData({ showPopup: true });
  },

  hidePopup() {
    this.setData({ showPopup: false });
  },
});
