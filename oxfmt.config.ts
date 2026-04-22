import { defineHopeConfig } from "oxc-config-hope/oxfmt";

export default defineHopeConfig({
  ignorePatterns: [".temp/**", "project.config.json", "project.private.config.json"],
});
