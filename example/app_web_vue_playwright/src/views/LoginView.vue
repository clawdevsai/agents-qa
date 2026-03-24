<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { DEMO_PASS, DEMO_USER, STORAGE_KEY } from '../constants'

const router = useRouter()
const usuario = ref('')
const senha = ref('')
const mensagem = ref('')
const mensagemVariant = ref<'ok' | 'erro' | ''>('')

function showMessage(text: string, variant: 'ok' | 'erro') {
  mensagem.value = text
  mensagemVariant.value = variant
}

function onSubmit(e: Event) {
  e.preventDefault()
  const u = usuario.value.trim()
  const p = senha.value

  if (!u || !p) {
    showMessage('Preencha usuario e senha.', 'erro')
    return
  }

  if (u !== DEMO_USER || p !== DEMO_PASS) {
    showMessage('Usuario ou senha invalidos.', 'erro')
    return
  }

  sessionStorage.setItem(STORAGE_KEY, '1')
  sessionStorage.setItem('app_demo_user', u)
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <main
    class="mx-auto max-w-md px-5 py-8 text-[#e6edf3]"
    aria-labelledby="login-title"
  >
    <h1 id="login-title" class="mb-2 text-2xl font-semibold">Entrar</h1>
    <p class="mb-6 text-[0.95rem] text-[#8b949e]">
      Use as credenciais de demonstracao (veja o README do projeto).
    </p>

    <form id="form-login" class="flex flex-col gap-3" novalidate @submit="onSubmit">
      <label class="text-sm font-medium" for="usuario">Usuario</label>
      <input
        id="usuario"
        v-model="usuario"
        name="usuario"
        type="text"
        autocomplete="username"
        required
        class="rounded-md border border-[#30363d] bg-[#161b22] px-2.5 py-2 text-inherit outline-none focus-visible:ring-2 focus-visible:ring-[#388bfd] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0f1419]"
      />

      <label class="text-sm font-medium" for="senha">Senha</label>
      <input
        id="senha"
        v-model="senha"
        name="senha"
        type="password"
        autocomplete="current-password"
        required
        class="rounded-md border border-[#30363d] bg-[#161b22] px-2.5 py-2 text-inherit outline-none focus-visible:ring-2 focus-visible:ring-[#388bfd] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0f1419]"
      />

      <button
        type="submit"
        class="mt-1 cursor-pointer rounded-md border-0 bg-[#238636] px-4 py-2.5 font-semibold text-white hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#388bfd]"
      >
        Entrar
      </button>
    </form>

    <p
      v-show="mensagem"
      id="mensagem"
      role="alert"
      aria-live="assertive"
      class="mt-4 rounded-md border border-[#30363d] bg-[#1c2128] p-3 text-sm"
      :class="{
        'border-[#238636]': mensagemVariant === 'ok',
        'border-[#f85149]': mensagemVariant === 'erro',
      }"
    >
      {{ mensagem }}
    </p>
  </main>
</template>
