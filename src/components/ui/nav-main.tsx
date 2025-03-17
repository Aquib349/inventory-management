import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive =
            location.pathname === item.url ||
            item.items?.some((subItem) => location.pathname === subItem.url);

          return item.items && item.items.length > 0 ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem className="text-white">
                <CollapsibleTrigger asChild>
                  <Link
                    to={item.url}
                    className="flex items-center gap-2 truncate text-white"
                  >
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={`font-medium ${isActive ? "" : ""}`}
                    >
                      {item.icon && <item.icon size={16} />}
                      <span>{item.title}</span>
                      <ChevronRight
                        className={`ml-auto transition-transform duration-200 ${
                          isActive ? "rotate-90" : ""
                        }`}
                      />
                    </SidebarMenuButton>
                  </Link>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => {
                      const isSubActive = location.pathname === subItem.url;
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link
                              to={subItem.url}
                              className={`block px-4 py-2 truncate text-white ${
                                isSubActive ? "" : ""
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <Link
                to={item.url}
                className="flex items-center gap-2 truncate text-white"
              >
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`font-medium ${isActive ? "" : ""}`}
                >
                  {item.icon && <item.icon size={16} />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
