# miniapp template

微信小程序，模板，使用 TypeScript 和 Sass。

## 构建代码

小程序使用 gulp 进行构建，请在克隆本项目后通过 yarn 或 npm 安装依赖。

- 使用 `yarn run build` 或 `npm run build` 编译小程序输出

- 使用 `yarn run watch` 或 `npm run watch` 在开发过程中监听小程序更改

- 使用 `yarn run lint` 或 `npm run lint` 格式化小程序代码

## 提交

模板使用 husky 配合 lint-stage 保证代码在提交时通过校验。你需要使用 `yarn cz` 或 `yarn commit` 命令进行提交。

## 配置

小程序的配置文件在 `app/config.ts` 下，你可以修改该文件配置小程序的基础信息。

## 云开发

小程序后端使用云开发。为了让小程序正常工作，你需要:

1. 创建云开发环境

1. 在构建小程序后，将 `dist/cloud` 下的文件夹依次上传至云开发 (在文件夹上右键选择 `上传并部署: 云端安装依赖`)
