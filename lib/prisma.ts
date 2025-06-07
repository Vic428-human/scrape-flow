// lib/prisma.ts
// 避免多次創建 PrismaClient 實例的目的 => https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


// 在開發中使用 Prisma 客戶端的最佳實踐
// 避免建立多個 Prisma 用戶端實例
// 在開發 Next.js 應用程式時，一個常見問題是意外建立多個 Prisma 客戶端實例。這通常是由於 Next.js 在開發過程中啟用了熱重載功能而導致的。

// 為什麼會發生這種情況
// Next.js 的熱重載功能會頻繁地重新載入模組以立即反映程式碼變更。然而，這可能會導致創建多個 Prisma 用戶端實例，從而消耗資源並可能導致意外行為。

// 推薦解決方案
// 為避免這種情況，請使用全域變數建立單一 Prisma 用戶端實例：

// 跟下面這種寫法類似
// https://github.com/Shopify/shopify-app-template-remix/blob/main/app/db.server.ts
