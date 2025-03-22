import { ChevronsUpDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
  userId: string;
  fullName: string;
  emailId: string;
};

export function NavUser() {
  const user: User = JSON.parse(localStorage.getItem("user") || "{}");
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
                <span className="truncate font-semibold">{user?.fullName}</span>
                <span className="truncate text-xs">{user?.emailId}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 p-0 m-0">
            <ProfileCard user={user} />
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
interface ProfileCardProps {
  user: User;
}
function ProfileCard({ user }: ProfileCardProps) {
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
        <h2 className="text-xl font-bold">{user?.fullName}</h2>
        <p className="text-sm text-gray-500 italic">Software Developer</p>
        <p className="text-xs text-gray-500">Joined May 2023</p>
      </div>

      {/* Personal Information */}
      <div className="mt-4 text-center">
        <div className="mt-2 space-y-1 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">🏢</span>
            <span className="font-semibold">UserID:</span>
            <span className="italic text-gray-600">{user?.userId}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📧</span>
            <span className="font-semibold">Email:</span>
            <span className="italic text-gray-600">{user?.emailId}</span>
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
