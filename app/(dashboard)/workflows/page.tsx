import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/hooks/helper/waitFor";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">自動化流程</h1>
          <p className="text-muted-foreground">在此建立並管理您的流程</p>
        </div>
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
  return <div></div>;
}

export default page;
