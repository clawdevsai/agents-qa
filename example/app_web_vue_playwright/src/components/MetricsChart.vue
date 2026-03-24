<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

onMounted(() => {
  const el = canvasRef.value
  if (!el) return

  chart = new Chart(el, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Eventos (mock)',
          data: [42, 55, 38, 72, 61, 84],
          borderColor: '#58a6ff',
          backgroundColor: 'rgba(88, 166, 255, 0.15)',
          fill: true,
          tension: 0.35,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#e6edf3' },
        },
      },
      scales: {
        x: {
          ticks: { color: '#8b949e' },
          grid: { color: 'rgba(48, 54, 61, 0.6)' },
        },
        y: {
          beginAtZero: true,
          ticks: { color: '#8b949e' },
          grid: { color: 'rgba(48, 54, 61, 0.6)' },
        },
      },
    },
  })
})

onBeforeUnmount(() => {
  chart?.destroy()
  chart = null
})
</script>

<template>
  <div class="relative h-[280px]">
    <canvas id="chart-metricas" ref="canvasRef" width="400" height="220" />
  </div>
</template>
