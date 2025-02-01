# generator-2lines-react-h5

> 一个用于快速创建 React 移动端应用的 Yeoman 生成器

## 功能特性

- ⚡️ 基于 Vite 4.x + React 18 + TypeScript 5
- 🎨 使用 TailwindCSS 3.x 进行样式开发
- 📱 移动端优先的响应式设计
- 🔧 集成 PostCSS + pxtorem 移动端适配
- 📦 Redux Toolkit + Redux Persist 状态管理
- 🛠️ ESLint + Prettier 代码规范配置
- 🌐 封装 Axios 请求
- 🔍 MSW 接口模拟
- 🎁 集成 ahooks React Hooks 工具库
- 🔒 安全且优化的构建配置

## 安装

首先，确保你已经安装了 [Node.js](https://nodejs.org/) (版本 >= 18)。

然后全局安装 [Yeoman](https://yeoman.io) 和 generator-2lines-react-h5：

```bash
npm install -g yo
npm install -g generator-2lines-react-h5
```

或者使用 pnpm：

```bash
pnpm add -g yo
pnpm add -g generator-2lines-react-h5
```

## 使用方法

创建一个新的目录，并在其中运行：

```bash
yo 2lines-react-h5
```

这将引导你完成项目的创建过程，包括：

1. 输入项目名称
2. 输入项目描述
3. 输入作者信息

生成器会自动：

1. 创建项目目录结构
2. 安装所需依赖
3. 配置开发环境
4. 设置基本的项目文件

## 项目结构

生成器会创建以下目录结构：

```
src/
  ├── api/             # API 接口定义
  ├── assets/          # 静态资源
  ├── components/      # 公共组件
  ├── hooks/           # 自定义 Hooks
  ├── mocks/           # MSW 接口模拟
  ├── pages/           # 页面组件
  ├── router/          # 路由配置
  ├── services/        # 接口服务
  ├── store/           # Redux 状态管理
  ├── types/           # TypeScript 类型定义
  ├── utils/           # 工具函数
  ├── App.tsx          # 应用根组件
  └── main.tsx         # 入口文件
```

## 命令

生成的项目包含以下 npm 脚本：

```bash
# 开发
pnpm dev

# 构建
pnpm build

# 预览
pnpm preview

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 运行测试
pnpm test
```

## 配置

生成的项目包含以下配置文件：

- `.eslintrc.cjs` - ESLint 配置
- `.prettierrc` - Prettier 配置
- `postcss.config.js` - PostCSS 配置
- `tailwind.config.js` - TailwindCSS 配置
- `tsconfig.json` - TypeScript 配置
- `vite.config.ts` - Vite 配置

## 开发

1. Fork 本仓库
2. 克隆你的 fork 到本地
3. 安装依赖：`pnpm install`
4. 创建新分支：`git checkout -b feature/your-feature`
5. 提交改动：`git commit -am 'feat: add some feature'`
6. 推送到分支：`git push origin feature/your-feature`
7. 提交 Pull Request

## 许可证

[MIT](LICENSE) © 2LinesCraft
