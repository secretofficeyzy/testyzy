export const INTRO_KEY = "yzy-intro-seen";
export const INTRO_COMPLETE_EVENT = "yzy-intro-complete";

export function dispatchIntroComplete() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(INTRO_COMPLETE_EVENT));
}

export function hasSeenIntro() {
  if (typeof window === "undefined") return true;
  try {
    return Boolean(sessionStorage.getItem(INTRO_KEY));
  } catch {
    return true;
  }
}

export function markIntroSeen() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(INTRO_KEY, "1");
  } catch {
    /* ignore */
  }
}
