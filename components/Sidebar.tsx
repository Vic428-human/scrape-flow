// The 'use client' functionality within Next.js serves as a crucial tool for defining a component as a client-side rendering entity. It facilitates the explicit declaration of a Next.js component that should be rendered and executed within the user's browser environment, rather than on the server.
"use client";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  Shield,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

const DesktopSidebar = () => {
  const pathName = usePathname();
  // 確認當前路由是否激活
  const isActiveRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName?.includes(route.href)
    ) || routes[0];

  return (
    // min-w-[] 這種寫法會讓元素的寬度被鎖定在 280px，不論內容多少或父容器多寬，元素都只會是 280p
    // w-full => 自動填滿父容器剩餘的寬度，寬度會隨父容器變化而自動調整。
    // 最終寬度仍會被鎖定在 280px，因為 min/max 會覆蓋 width 的彈性。
    // min-w-[280px] max-w-[280px]
    <div className="relative hidden md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground border-r-2 border-separate">
      <div className="flex justify-center items-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={buttonVariants({
              variant:
                isActiveRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export function MobileSideabr() {
  const pathName = usePathname();
  // 確認當前路由是否激活
  const isActiveRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName?.includes(route.href)
    ) || routes[0];

  return (
    <div className="block md:hidden border-separate bg-background">
      {/* <nav> 元素強調了它所代表的內容是提供導航功能 */}
      <nav className="container flex items-center justify-between px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"purple"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[500px] space-y-4"
            side="right"
          >
            <Logo />
            <div className="flex flex-col p-2">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={buttonVariants({
                    variant:
                      isActiveRoute.href === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default DesktopSidebar;
