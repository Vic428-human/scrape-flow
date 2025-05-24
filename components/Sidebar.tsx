// The 'use client' functionality within Next.js serves as a crucial tool for defining a component as a client-side rendering entity. It facilitates the explicit declaration of a Next.js component that should be rendered and executed within the user's browser environment, rather than on the server.
"use client";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  Shield,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";

const routes = [
  {
    href: "",
    label: "Home",
    icom: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icom: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icom: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icom: CoinsIcon,
  },
];
const DesktopSidebar = () => {
  return (
    // min-w-[] 這種寫法會讓元素的寬度被鎖定在 280px，不論內容多少或父容器多寬，元素都只會是 280p
    // w-full => 自動填滿父容器剩餘的寬度，寬度會隨父容器變化而自動調整。
    // 最終寬度仍會被鎖定在 280px，因為 min/max 會覆蓋 width 的彈性。
    // min-w-[280px] max-w-[280px]
    <div className="relative hidden md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground border-r-2 border-separate">
      DesktopSidebar
    </div>
  );
};

export default DesktopSidebar;
