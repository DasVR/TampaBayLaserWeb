import { Outlet } from "react-router-dom";
import { CurtainProvider } from "@/shell/Curtain";
import { SiteFooter } from "@/shell/SiteFooter";
import { SiteHeader } from "@/shell/SiteHeader";

export function RootLayout() {
  return (
    <CurtainProvider>
      <div className="relative flex min-h-screen flex-col">
        <a
          href="#main"
          className="absolute left-4 top-0 z-[500] -translate-y-[120%] rounded-md bg-ink px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-lift outline-none ring-accent transition-transform focus:translate-y-4 focus:ring-2"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
    </CurtainProvider>
  );
}
