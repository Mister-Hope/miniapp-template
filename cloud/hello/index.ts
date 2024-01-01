import { DYNAMIC_CURRENT_ENV, init } from "wx-server-sdk";

// 初始化 cloud
init({
  env: DYNAMIC_CURRENT_ENV as unknown as string,
});

export const main = (): string => "hello world";
