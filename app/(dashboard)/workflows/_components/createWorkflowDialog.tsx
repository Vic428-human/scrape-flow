"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Workflow, PlusIcon } from "lucide-react";
import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Button, buttonVariants } from "@/components/ui/button";

function CreateWorkflowDialog({ triggerText }: { triggerText?: string }) {
  const [open, setOpen] = useState(false);
  return (
    // If you want control the opening state by yourself,
    // shadcn/ui 裡用到的 <Dialog>、<DialogTrigger>、<DialogContent> 等，其底層其實就是 Radix UI 的對應元件，只是多了一層樣式與組件包裝
    // https://www.radix-ui.com/primitives/docs/components/dialog#root
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={buttonVariants({
            variant: "sidebarActiveItem",
          })}
        >
          <PlusIcon size={16} className="stroke-white" />
          <span className="text-white">{triggerText ?? "創建工作流"}</span>
        </Button>
      </DialogTrigger>
      {/* 問題：When using the dialog with content larger than the screen height, the dialog gets cut off on top and bottom without the ability to scroll. */}
      {/*  設定 lg:max-w-screen-lg overflow-y-scroll max-h-screen 可避免上述問題*/}
      <DialogContent className={"px-0 overflow-y-scroll max-h-screen"}>
        {/* <CustomDialogHeader icon={} title={} subTitle={} /> */}
        <CustomDialogHeader
          icon={Workflow}
          title="創建工作流"
          subTitle="開始你的工作流"
        />
      </DialogContent>
    </Dialog>
  );
}

export default CreateWorkflowDialog;
