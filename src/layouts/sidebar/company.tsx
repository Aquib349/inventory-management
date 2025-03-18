import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function Company() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <img
              src="https://icon-library.com/images/inventory-icon/inventory-icon-8.jpg"
              alt="Company Logo"
              className="w-8 h-8 object-cover rounded-md"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight text-white">
            <span className="truncate text-xl font-bold">Company Name</span>
            <span className="truncate text-xs"></span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
