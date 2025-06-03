import type { Config } from "tailwindcss";

//  shadcn/ui 專案在 2024 年 5 月左右釋出的 CLI 工具，
//  在這次更新後，shadcn/ui 的 CLI 預設不再將某些檔案（如 tailwind.config.ts 或樣式相關設定）放在 public 資料夾中
//  如果你沒有使用 CLI 產生的 public 檔案，必須手動確認你的 tailwind.config.ts 檔案裡的 theme 設定有包含 container 這個屬性

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    //  https://v3.tailwindcss.com/docs/container
    //  這是因為 shadcn/ui 的元件設計仰賴 Tailwind CSS 的 container 工具類別來正確顯示和排版元件。
    //  總結來說，這是 shadcn/ui 為了讓 CLI 更加靈活、減少不必要檔案而進行的更新。開發者如果跳過了自動產生的 public 檔案，需特別注意 tailwind 設定，否則可能會導致元件樣式顯示異常
    container: {
      // 這樣就會覆蓋預設的 container 行為。
      center: true, // 設置容器為置中對齊
      padding: "2rem", // rem 代表「root em」，即「根元素」的字體大小（通常是 html 元素的 font-size，預設為 16px），若 html 的 font-size 是 16px，則 2rem 就是 32px
      screens: {
        "2xl": "1400px",
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primaryPurple: {
          DEFAULT: "hsl(var(--primaryPurple))",
          foreground: "hsl(var(--primaryPurple-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config; // 這個 export 出去的物件必須要符合 Config 這個型別的結構。」如果你漏寫了必要欄位或格式錯誤，TypeScript 編譯器會直接報錯，幫助你在開發階段就發現問題
export default config;

// 調用案例
// 有時候你會希望在自己的 JavaScript 程式碼中直接存取 Tailwind CSS 的設定值，例如主題顏色、間距，
// resolveConfig 的輔助函式。這個函式可以幫你把所有的 Tailwind 設定（包括你自己在 tailwind.config.js 裡自訂的設定，還有 Tailwind 的預設設定）合併成一個完整的設定物件
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from './tailwind.config.js'
// const fullConfig = resolveConfig(tailwindConfig)
// fullConfig.theme.screens.2xl

/* 這是 Tailwind 預設的 container 配置（簡化版） */
// .container { // 上面自定義的container配置會覆蓋掉下方預設值 tailwindcss v3
//   width: 100%;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 1rem;  /* 預設 padding, 可自訂 */
//   padding-right: 1rem;
//   max-width: 100%;     /* 會根據螢幕尺寸自動變換 */
// }
// @media (min-width: 640px) { .container { max-width: 640px; } }
// @media (min-width: 768px) { .container { max-width: 768px; } }
// @media (min-width: 1024px) { .container { max-width: 1024px; } }
// @media (min-width: 1280px) { .container { max-width: 1280px; } }
// @media (min-width: 1536px) { .container { max-width: 1536px; } }
