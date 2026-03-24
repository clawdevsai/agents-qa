/** Mesmas chaves do demo `app_web_playwright` (sessionStorage no browser). */
export const DEMO_SESSION_KEY = "app_demo_session";
export const DEMO_USER_KEY = "app_demo_user";

export const DEMO_USER = "demo";
export const DEMO_PASS = "demo";

export function hasDemoSession(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(sessionStorage.getItem(DEMO_SESSION_KEY));
}

export function setDemoSession(usuario: string): void {
  sessionStorage.setItem(DEMO_SESSION_KEY, "1");
  sessionStorage.setItem(DEMO_USER_KEY, usuario);
}

export function clearDemoSession(): void {
  sessionStorage.removeItem(DEMO_SESSION_KEY);
  sessionStorage.removeItem(DEMO_USER_KEY);
}
