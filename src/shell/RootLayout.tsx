import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { CurtainProvider } from "@/shell/Curtain";
import { MobileBookingBar } from "@/shell/MobileBookingBar";
import { SiteFooter } from "@/shell/SiteFooter";
import { SiteHeader } from "@/shell/SiteHeader";

export function RootLayout() {
  return (
    <CurtainProvider>
      <div className="relative flex min-h-screen min-w-0 flex-col">
        <a
          href="#main"
          className="absolute left-4 top-0 z-[500] -translate-y-[120%] rounded-md bg-ink px-3 py-2.5 text-fluid-caps font-bold uppercase text-white shadow-lift outline-none ring-accent transition-transform focus:translate-y-4 focus:ring-2 sm:px-4 sm:py-3"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
      <Toaster
        position="bottom-right"
        closeButton
        duration={5000}
        mobileOffset={{
          bottom: "calc(4.75rem + env(safe-area-inset-bottom, 0px))",
        }}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "flex gap-3 rounded-md border border-neutral-200 bg-cream px-4 py-3 text-fluid-body text-ink shadow-lift w-[min(100vw-1.5rem,22rem)] max-w-[calc(100vw-1.5rem)]",
            title: "font-semibold text-ink",
            description: "text-neutral-600 text-sm mt-1",
            success: "border-l-[3px] border-l-accent",
            error: "border-l-[3px] border-l-red-700",
            closeButton: "text-neutral-500 hover:text-ink border-0 bg-transparent",
          },
        }}
      />
      <MobileBookingBar />
    </CurtainProvider>
  );
}
