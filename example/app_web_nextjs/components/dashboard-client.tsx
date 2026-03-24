"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import {
  clearDemoSession,
  DEMO_SESSION_KEY,
  DEMO_USER_KEY,
} from "@/lib/demo-session";
import { DashboardChart } from "@/components/dashboard-chart";

export function DashboardClient() {
  const router = useRouter();
  const [userLabel, setUserLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem(DEMO_SESSION_KEY)) {
      router.replace("/");
      return;
    }
    const user = sessionStorage.getItem(DEMO_USER_KEY) || "demo";
    startTransition(() => {
      setUserLabel(`Logado como: ${user}`);
    });
  }, [router]);

  function onSair() {
    clearDemoSession();
    router.push("/");
  }

  if (!userLabel) {
    return null;
  }

  return (
    <>
      <header className="border-b border-[#30363d] bg-[#161b22]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-3 px-5 py-4">
          <h1 className="m-0 text-xl font-semibold">Dashboard</h1>
          <p className="m-0 flex-1 text-sm text-[#8b949e]">{userLabel}</p>
          <button
            type="button"
            className="cursor-pointer rounded-md border border-[#30363d] bg-[#21262d] px-3.5 py-2 text-sm font-semibold text-[#e6edf3] hover:bg-[#30363d] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2 focus-visible:outline-[#388bfd]"
            onClick={onSair}
          >
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-6">
        <section className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
          <h2 className="mb-1 text-lg font-semibold">Metricas (dados mockados)</h2>
          <p className="mb-4 text-sm text-[#8b949e]">
            Valores ficticios para demonstracao de grafico.
          </p>
          <DashboardChart />
        </section>
      </main>
    </>
  );
}
