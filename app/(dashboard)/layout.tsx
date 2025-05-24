import { Separator } from "@/components/ui/separator";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  // h-screen => height: 100vh; => 瀏覽器可視區域高度的全部，如果你的瀏覽器視窗高度是 800px，設定 height: 100vh 就會讓該元素高度為 800px，無論內容多少，都會撐滿整個視窗
  // min-h-screen => 設定元素的最小高度為瀏覽器可視區域（viewport）的 100% 高度」
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 min-h-sreen">
        {/* items-center = align-items，記「項目（item）在副軸上居中」，預設是「垂直居中」。 */}
        {/* 把 flex 方向換成 flex-col，兩者的作用方向也會交換（justify 變成垂直，items 變成水平） */}
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          ScrapeFlow
        </header>
        {/* 預設值的線沒有出來，所以直接覆蓋ㄋ => https://github.com/shadcn-ui/ui/issues/4818 */}
        <Separator className="border border-gray-300/40" />
      </div>
    </div>
  );
}

export default layout;
