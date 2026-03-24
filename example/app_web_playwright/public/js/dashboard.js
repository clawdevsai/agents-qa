(function () {
  const STORAGE_KEY = "app_demo_session";

  if (!sessionStorage.getItem(STORAGE_KEY)) {
    window.location.replace("/");
    return;
  }

  const user = sessionStorage.getItem("app_demo_user") || "demo";
  document.getElementById("dash-user-label").textContent = "Logado como: " + user;

  document.getElementById("btn-sair").addEventListener("click", function () {
    sessionStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem("app_demo_user");
    window.location.href = "/";
  });

  const ctx = document.getElementById("chart-metricas");
  const mockLabels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const mockSeries = [42, 55, 38, 72, 61, 84];

  new Chart(ctx, {
    type: "line",
    data: {
      labels: mockLabels,
      datasets: [
        {
          label: "Eventos (mock)",
          data: mockSeries,
          borderColor: "#58a6ff",
          backgroundColor: "rgba(88, 166, 255, 0.15)",
          fill: true,
          tension: 0.35
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#e6edf3" }
        }
      },
      scales: {
        x: {
          ticks: { color: "#8b949e" },
          grid: { color: "rgba(48, 54, 61, 0.6)" }
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#8b949e" },
          grid: { color: "rgba(48, 54, 61, 0.6)" }
        }
      }
    }
  });
})();
