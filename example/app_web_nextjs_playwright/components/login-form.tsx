"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import {
  DEMO_PASS,
  DEMO_USER,
  hasDemoSession,
  setDemoSession,
} from "@/lib/demo-session";

export function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (hasDemoSession()) {
      router.replace("/dashboard");
    }
  }, [router]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const usuario = (form.elements.namedItem("usuario") as HTMLInputElement)
      .value.trim();
    const senha = (form.elements.namedItem("senha") as HTMLInputElement).value;

    if (!usuario || !senha) {
      setMessage("Preencha usuario e senha.");
      return;
    }

    if (usuario !== DEMO_USER || senha !== DEMO_PASS) {
      setMessage("Usuario ou senha invalidos.");
      return;
    }

    setDemoSession(usuario);
    router.push("/dashboard");
  }

  return (
    <main className="mx-auto max-w-md px-5 py-8">
      <h1 className="mb-2 text-2xl font-semibold">Entrar</h1>
      <p className="mb-6 text-sm text-[#8b949e]">
        Use as credenciais de demonstracao (veja o README do projeto).
      </p>

      <form className="flex flex-col gap-3" onSubmit={onSubmit} noValidate>
        <label className="text-sm font-medium" htmlFor="usuario">
          Usuario
        </label>
        <input
          id="usuario"
          name="usuario"
          type="text"
          autoComplete="username"
          required
          className="rounded-md border border-[#30363d] bg-[#161b22] px-2.5 py-2 text-[#e6edf3] outline-offset-1 focus:outline focus:outline-[2px] focus:outline-[#388bfd]"
        />

        <label className="text-sm font-medium" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          autoComplete="current-password"
          required
          className="rounded-md border border-[#30363d] bg-[#161b22] px-2.5 py-2 text-[#e6edf3] outline-offset-1 focus:outline focus:outline-[2px] focus:outline-[#388bfd]"
        />

        <button
          type="submit"
          className="mt-1 cursor-pointer rounded-md border-0 bg-[#238636] px-4 py-2.5 font-semibold text-white hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2 focus-visible:outline-[#388bfd]"
        >
          Entrar
        </button>
      </form>

      {message ? (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-4 rounded-md border border-[#f85149] bg-[#1c2128] p-3 text-sm"
        >
          {message}
        </p>
      ) : null}
    </main>
  );
}
