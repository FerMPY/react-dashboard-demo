import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router";

import { AppSidebar } from "./components/app-sidebar";
import { LayoutHeader } from "./components/layout-header";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 w-full shrink-0 items-center gap-2 border-b px-4">
          <LayoutHeader />
        </header>
        <main className="container size-full bg-[#F5F7FA] p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
