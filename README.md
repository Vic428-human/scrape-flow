## Getting Started

```bash
nvm use 18
npm run dev

# 分隔線=======
關於版本選用AI說明：
shadcn 2.1.0 目前是 shadcn/ui 的主流版本，官方文档和社区教程都围绕此版本展开，确保了组件库与最新的 Tailwind CSS 4.x 以及现代 React/Next.js 项目的兼容性。 (目前該專案用的是tailwind v3)
Next.js 14.2 是 Next.js 14 系列的稳定版本之一，支持 App Router、服务器组件、并发特性等现代特性。shadcn/ui 官方推荐与 Next.js 14.x 搭配使用，因为这能充分发挥两者的优势，比如更好的服务端渲染和组件复用

# 分隔線=======
npm 版本 => 10.7.0
"next": "14.2.5"
shadcn 版本 => version 2.1.0
```

### next-themes

- [next-themes](https://ui.shadcn.com/docs/dark-mode/next)
  是一個用於 Next.js 專案的套件，其主要用途是提供簡單且易於使用的 API 來切換應用程式的主題，
  例如深色模式(dark mode) 和淺色模式(light mode)。

```
"next-themes": "^0.4.6",
```

### 客製化 styling for tailwind

```
components\ui\button.tsx => hover:bg-muted-foreground
tailwind.config.ts 都來自於這裡
```

### Route Group

- create route group，It's just a way to group files together

```
app/(dashboard)/(home)/page.tsx
```

### tailwindcss 方面的情報須知

- TailwindCSS v4, the use of tailwind.config.ts will be removed (這個專案用的是 v3 的，所以還有保留)
- 有完整的關於此專案的設定檔的註解說明

```
tailwind.config.ts
```

### shadcn 版本說明

package.json 無法直接得知 shadcn 版本，因為 shadcn 不是以 npm 套件依賴安裝的。
若要查詢 CLI 版本，需用 CLI 指令（如 npx shadcn --version）或檢查全域安裝。
若要確保元件一致，建議固定使用同一個 CLI 版本安裝元件，或記錄安裝時的 CLI 版本號。

自動為你生成組件目錄、配置 Tailwind，並添加必要依賴

```
npx shadcn@2.1.0 init
```

#### shadcn theme 引用

- [shadcn theme](https://ui.shadcn.com/themes) - 改成綠色，copy 代碼

### 添加组件範本

```
npx shadcn@2.1.0 add button // 可加可不加，如果不指定ui，可以點a全部都下載
```

### 其他說明(暫時用不到，但可能會有幫助的情報)

1. npx shadcn@latest init (node 版本更新到 21.6.0 的時候，似乎就能正常搭配 shadcn 跟 nextjs 一起使用)，但這個專案用的是 node 18 的版本，shadcn 用的是 2.1.0

```

```
