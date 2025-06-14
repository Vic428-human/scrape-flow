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

### prisma 遇到的錯誤資訊回顧

- 問題： [Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again](https://github.com/prisma/prisma/discussions/19669)
- 解法： 我後來 `output   = "../node_modules/.prisma/client"` 然後再 `npx prisma generate` 就突然成功了

### visual editor for the data in your database

```
npx prisma studio
```

### prisma migration

Prisma Migrate 是 Prisma ORM 提供的數據庫遷移（Database Migration）工具，用於管理數據庫架構（schema）的變更。
它允許你通過定義 數據模型（Prisma Schema） 自動生成並執行 SQL 遷移腳本，確保數據庫結構與你的應用程序模型保持同步

功能：

- 根據 schema.prisma 的變更生成新的遷移文件（SQL 腳本）。
- 自動應用遷移到開發數據庫。
- 在 prisma/migrations 目錄下記錄遷移歷史。

適用場景：

- 修改 schema.prisma 後，需要更新數據庫結構時（如新增表、修改字段）。
- 本地開發時，數據庫需要與模型保持同步。

- [Development and production](hhttps://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production)

### Quickstart with SQLite

- [sqlite + prisma ](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

```
npx prisma init --datasource-provider sqlite // prisma 資料夾生成 schema.prisma 檔，並指定資料庫
```

- 指令會把 prisma 初始化檔案產生在你指定的資料夾（相對於目前目錄）

```
// npx prisma init --datasource-provider sqlite --output ../generated/prisma
// 由於我並非使用 --output ../generated/prisma ，所以之後 generate 或是 migrate 的時候不用另外輸入下方指令
npx prisma generate --schema=../generated/prisma/schema.prisma
```

### Clerk 三方登入

- [Clerk 文檔](https://clerk.com/docs/components/clerk-provider)

### 路由不存在

- [not-found.tsx](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

```
app/not-found.tsx
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
