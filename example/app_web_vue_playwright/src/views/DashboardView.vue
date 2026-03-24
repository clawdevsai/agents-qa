<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import MetricsChart from '../components/MetricsChart.vue'
import { STORAGE_KEY } from '../constants'

const router = useRouter()

const userLabel = computed(() => {
  const u = sessionStorage.getItem('app_demo_user') || 'demo'
  return `Logado como: ${u}`
})

function logout() {
  sessionStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem('app_demo_user')
  router.push({ name: 'login' })
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#0f1419] text-[#e6edf3]">
    <header class="border-b border-[#30363d] bg-[#161b22]">
      <div
        class="mx-auto flex max-w-4xl flex-wrap items-center gap-x-4 gap-y-3 px-5 py-4"
      >
        <h1 class="m-0 text-xl font-semibold">Dashboard</h1>
        <p class="m-0 flex-1 text-sm text-[#8b949e]">{{ userLabel }}</p>
        <button
          id="btn-sair"
          type="button"
          class="cursor-pointer rounded-md border border-[#30363d] bg-[#21262d] px-3.5 py-2 text-sm font-semibold text-[#e6edf3] hover:bg-[#30363d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#388bfd]"
          @click="logout"
        >
          Sair
        </button>
      </div>
    </header>

    <main class="mx-auto w-full max-w-4xl flex-1 px-5 py-6 pb-8">
      <section
        class="rounded-lg border border-[#30363d] bg-[#161b22] p-5"
        aria-labelledby="metrics-heading"
      >
        <h2 id="metrics-heading" class="mb-1 text-lg font-semibold">
          Metricas (dados mockados)
        </h2>
        <p class="mb-4 text-sm text-[#8b949e]">
          Valores ficticios para demonstracao de grafico.
        </p>
        <MetricsChart />
      </section>
    </main>
  </div>
</template>
