import { Outlet } from "react-router-dom";
import { CurtainProvider } from "@/shell/Curtain";
import { SiteFooter } from "@/shell/SiteFooter";
import { SiteHeader } from "@/shell/SiteHeader";

export function RootLayout() {
  return (
    <CurtainProvider>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
    </CurtainProvider>
  );
}
