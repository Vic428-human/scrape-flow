## Getting Started

```bash
nvm use 18
npm run dev

# 分隔線=======
關於版本選用AI說明：
shadcn 2.1.0 目前是 shadcn/ui 的主流版本，官方文档和社区教程都围绕此版本展开，确保了组件库与最新的 Tailwind CSS 4.x 以及现代 React/Next.js 项目的兼容性。
Next.js 14.2 是 Next.js 14 系列的稳定版本之一，支持 App Router、服务器组件、并发特性等现代特性。shadcn/ui 官方推荐与 Next.js 14.x 搭配使用，因为这能充分发挥两者的优势，比如更好的服务端渲染和组件复用

# 分隔線=======
npm 版本 => 10.7.0
"next": "14.2.5"
shadcn 版本 => version 2.1.0
```

### shadcn 版本說明

package.json 無法直接得知 shadcn 版本，因為 shadcn 不是以 npm 套件依賴安裝的。
若要查詢 CLI 版本，需用 CLI 指令（如 npx shadcn --version）或檢查全域安裝。
若要確保元件一致，建議固定使用同一個 CLI 版本安裝元件，或記錄安裝時的 CLI 版本號。

自動為你生成組件目錄、配置 Tailwind，並添加必要依賴

```
npx shadcn@2.1.0 init
```

### 添加组件範本

```
npx shadcn@2.1.0 add button // 可加可不加，如果不指定ui，可以點a全部都下載
```

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### 其他說明(暫時用不到，但可能會有幫助的情報)

1. npx shadcn@latest init (node 版本更新到 21.6.0 的時候，似乎就能正常搭配 shadcn 跟 nextjs 一起使用)，但這個專案用的是 node 18 的版本，shadcn 用的是 2.1.0

```

```
