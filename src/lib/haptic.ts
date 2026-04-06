/** Light tap feedback on supported devices (Vibration API). WordPress-safe: no-op when unavailable. */
export function hapticImpact(strength: "light" | "medium" | "heavy" = "light") {
  if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") return;
  const ms = strength === "light" ? 12 : strength === "medium" ? 28 : 45;
  navigator.vibrate(ms);
}
