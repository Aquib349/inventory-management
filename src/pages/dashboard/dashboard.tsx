import { AppSidebar } from "@/components/ui/app-sidebar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar } from "@radix-ui/react-avatar";
import { useState } from "react";
import { Outlet } from "react-router";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-12 border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block pt-0.5" />
                <BreadcrumbItem>
                  <BreadcrumbPage></BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="relative">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="w-8 h-8 rounded-full mx-2 cursor-pointer"
              />
              <AvatarFallback className="text-xs"></AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="p-2">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
