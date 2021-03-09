import { DYNAMIC_CURRENT_ENV, init, getWXContext } from "wx-server-sdk";

// 初始化 cloud
init({
  env: (DYNAMIC_CURRENT_ENV as unknown) as string,
});

interface LoginResult {
  openid: string | undefined;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const main = async (): Promise<LoginResult> => {
  const { OPENID } = getWXContext();

  return {
    openid: OPENID,
  };
};
