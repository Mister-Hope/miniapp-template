import { globals, hope } from "eslint-config-mister-hope";

export default hope(
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".wxs"],
      },
    },

    wxapp: true,
  },

  {
    files: ["app/**/*.ts"],
    rules: {
      // $this.on this.off can not bind $this
      "@typescript-eslint/unbound-method": "off",
    },
  },

  {
    files: ["gulpfile.cjs"],
    languageOptions: {
      globals: globals.node,
    },
  },
);
