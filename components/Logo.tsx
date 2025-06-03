import { cn } from "@/lib/utils";
import { SquareTerminal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <div>
      <Link
        href="/"
        className={cn(
          "text-2xl font-extrabold flex items-center gap-2",
          fontSize
        )}
      >
        <div
          className="rounded-xl bg-gradient-to-r from-purple-500 to-purple-600
 p-2"
        >
          <SquareTerminal size={iconSize} className="stroke-white" />
        </div>
        <div>
          <span
            className="bg-gradient-to-tr from-purple-500 to-purple-600
 bg-clip-text text-transparent"
          >
            自動化
          </span>
          <span className="text-stone-700 dark:text-stone-300">爬取</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
