"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface Props {
  icon?: React.ElementType; // 可以是任何 React 元素類型s
  title?: string;
  subTitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

function CustomDialogHeader(props: Props) {
  return (
    <DialogHeader className="py-6">
      {/* asChild => 可以用自訂的元素來包裹 DialogTitle 的內容，而不是預設的 <h2>。 */}
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {props.icon && (
            <props.icon
              size={30}
              className={cn("stroke-purple-600", props.iconClassName)}
            />
          )}
          {props.title && (
            <p
              className={cn(
                "text-2xl text-primaryPurple font-bold text-center",
                props.titleClassName
              )}
            >
              {props.title}
            </p>
          )}

          {props.subTitle && (
            <p
              className={cn(
                "text-sm text-primaryPurple text-center",
                props.subTitleClassName
              )}
            >
              {props.subTitle}
            </p>
          )}
        </div>
      </DialogTitle>

      <Separator />
    </DialogHeader>
  );
}

export default CustomDialogHeader;
