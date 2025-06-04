import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import React from "react";

// 傳進layout 的 children 來自 app/(dashboard)/(home)裡的 page 內容
function layout({ children }: { children: React.ReactNode }) {
  // h-screen => height: 100vh; => 瀏覽器可視區域高度的全部，如果你的瀏覽器視窗高度是 800px，設定 height: 100vh 就會讓該元素高度為 800px，無論內容多少，都會撐滿整個視窗
  // min-h-screen => 設定元素的最小高度為瀏覽器可視區域（viewport）的 100% 高度」
  return (
    <div className="flex h-screen">
      {/* side bar 在左半邊 */}
      <DesktopSidebar />
      {/* 又半邊  */}
      <div className="flex flex-col flex-1 min-h-sreen">
        {/* items-center = align-items，記「項目（item）在副軸上居中」，預設是「垂直居中」。 */}
        {/* 把 flex 方向換成 flex-col，兩者的作用方向也會交換（justify 變成垂直，items 變成水平） */}
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
        </header>
        {/* 預設值的線沒有出來，所以直接覆蓋ㄋ => https://github.com/shadcn-ui/ui/issues/4818 */}
        <Separator className="border border-gray-300/40" />
        <div className="overflow-auto">
          {/* 只要引用 container 都會有一個因為 tailwind.config.ts 客製化的 styling，像是此處的 padding 已經是 32px，除非想要覆蓋它不然不用另外設定 */}
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
