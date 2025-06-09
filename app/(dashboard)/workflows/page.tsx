import { getWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/hooks/helper/waitFor";
import React, { Suspense } from "react";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CreateWorkflowDialog from "./_components/createWorkflowDialog";

function page() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">自動化流程</h1>
          <p className="text-muted-foreground">在此建立並管理您的流程</p>
        </div>
        <CreateWorkflowDialog />
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

function UserWorkflowsSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full" />
      ))}
    </div>
  );
}

async function UserWorkflows() {
  await waitFor(3000); // 假設 waitFor 是個延遲函式，延遲 3 秒

  let workflows = await getWorkflowsForUser();
  if (!workflows) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon className="w-4 h-4" />
        <AlertTitle>發生錯誤</AlertTitle>
        <AlertDescription>無法載入您的流程。請稍後再試。</AlertDescription>
      </Alert>
    );
  }

  if (workflows.length === 0) {
    // 空陣列代表 db沒查到資料
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
          <PopcornIcon size={40} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold">目前沒有任何流程</p>
          <p className="text-muted-foreground">
            您可以點擊右上角的「新增流程」按鈕來建立新的流程。
          </p>
        </div>

        <CreateWorkflowDialog triggerText="創建你的第一個工作流" />
      </div>
    );
  }
  return <div></div>;
}

export default page;
