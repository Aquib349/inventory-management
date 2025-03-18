import { ChevronsUpDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center
             gap-2 rounded-md text-white cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="" alt="logo" />
                <AvatarFallback className="rounded-lg text-black">
                  CN
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Aquib Sheikh</span>
                <span className="truncate text-xs">aquib24@gmail.com</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 p-0 m-0">
            <ProfileCard />
            <DropdownMenuSeparator />
            <div className="flex items-center gap-2 justify-between cursor-pointer hover:bg-red-100 hover:text-red-500 px-2 py-2 m-0.5 rounded-sm">
              <p className="text-sm font-semibold">Logout</p>
              <LogOut size={14} />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

// user profile component
function ProfileCard() {
  return (
    <div className="p-2 rounded-md">
      <div className="flex justify-center">
        <img
          src="https://github.com/shadcn.png"
          alt="Profile"
          className="w-12 h-12 border rounded-full object-cover"
        />
      </div>

      {/* Name & Role */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">Aquib Sheikh</h2>
        <p className="text-sm text-gray-500 italic">Software Developer</p>
        <p className="text-xs text-gray-500">Joined May 2023</p>
      </div>

      {/* Personal Information */}
      <div className="mt-4 text-center">
        <div className="mt-2 space-y-1 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">🏢</span>
            <span className="font-semibold">Company:</span>
            <span className="italic text-gray-600">ABC Company</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📧</span>
            <span className="font-semibold">Email:</span>
            <span className="italic text-gray-600">elizabeth@abc.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📞</span>
            <span className="font-semibold">Phone:</span>
            <span className="italic text-gray-600">012-345-6789</span>
          </div>
        </div>
      </div>
    </div>
  );
}
