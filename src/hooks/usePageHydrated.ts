import { useEffect, useState } from "react";

/** True after `window` "load" (images & deferred assets). Used to avoid empty flashes before first paint settles. */
export function usePageHydrated() {
  const [ready, setReady] = useState(
    () => typeof document !== "undefined" && document.readyState === "complete",
  );

  useEffect(() => {
    if (document.readyState === "complete") {
      setReady(true);
      return;
    }
    const onLoad = () => setReady(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return ready;
}
