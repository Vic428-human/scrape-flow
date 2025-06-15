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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createWorkflowSchema } from "@/schema/workflow";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function CreateWorkflowDialog({ triggerText }: { triggerText?: string }) {
  const [open, setOpen] = useState(false);

  // 1. Define your form => https://ui.shadcn.com/docs/components/form
  const form = useForm<z.infer<typeof createWorkflowSchema>>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {},
  });

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
        <div className="p-6">
          <Form {...form}>
            <form className="space-y-8 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      名稱
                      <p className="text-xs text-primary">(必要)</p>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="請輸入工作流名稱" {...field} />
                    </FormControl>
                    <FormDescription>
                      選擇一個用來描述工作流的名稱，最多 50 個字元。
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      描述
                      <p className="text-xs text-primary">(可選)</p>
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="請輸入工作流描述" {...field} />
                    </FormControl>
                    <FormDescription>
                      選擇一個用來描述工作流的描述，最多 50 個字元。
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateWorkflowDialog;
