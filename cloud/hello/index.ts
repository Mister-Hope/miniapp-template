import adapter from "@cloudbase/adapter-node";
import { init, useAdapters } from "@cloudbase/js-sdk";

useAdapters(adapter);

init({ env: "test" });

export const main = (): string => "hello world";
