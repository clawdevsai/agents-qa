import { DashboardClient } from "@/components/dashboard-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Demo Web QA",
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <DashboardClient />
    </div>
  );
}
