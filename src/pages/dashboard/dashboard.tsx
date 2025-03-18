import { AppSidebar } from "@/layouts/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 z-50 bg-[#0e3473] text-white h-12 border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block text-white hover:text-white">
                  {location.pathname === "/"
                    ? "Dashboard"
                    : location.pathname.includes("master")
                    ? "Master"
                    : ""}
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-white" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">
                    {location.pathname === "/product-master"
                      ? "Product Master"
                      : location.pathname === "/inventory-master"
                      ? "Inventory Master"
                      : ""}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="p-2">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
