(function () {
  const STORAGE_KEY = "app_demo_session";

  if (sessionStorage.getItem(STORAGE_KEY)) {
    window.location.replace("/dashboard.html");
    return;
  }

  const form = document.getElementById("form-login");
  const msg = document.getElementById("mensagem");

  /** Credenciais de demo (sem backend). */
  const DEMO_USER = "demo";
  const DEMO_PASS = "demo";

  function showMessage(text, variant) {
    msg.hidden = false;
    msg.textContent = text;
    msg.dataset.variant = variant;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (!usuario || !senha) {
      showMessage("Preencha usuario e senha.", "erro");
      return;
    }

    if (usuario !== DEMO_USER || senha !== DEMO_PASS) {
      showMessage("Usuario ou senha invalidos.", "erro");
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    sessionStorage.setItem("app_demo_user", usuario);
    window.location.href = "/dashboard.html";
  });
})();
