import adapter from "@cloudbase/adapter-node";
import { init, useAdapters } from "@cloudbase/js-sdk";

useAdapters(adapter);

const app = init({ env: "test" });

interface LoginResult {
  openid: string | undefined;
}

export const main = async (): Promise<LoginResult> => {
  const { data } = await app.auth.signInWithOpenId();

  return {
    openid: data.user?.id as string | undefined,
  };
};
