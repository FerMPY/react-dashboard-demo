import { Separator } from "@radix-ui/react-separator";
import { Outlet } from "react-router";

import { AppSidebar } from "./components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";

export function Layout() {
  return (
    
        <main>
          <Outlet />
        </main>

  );
}
