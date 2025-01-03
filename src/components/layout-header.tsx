import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import BellIcon from "@icons/bell.svg?react";
import GearIcon from "@icons/gear.svg?react";

import { useAuth } from "@/hooks/use-auth";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SidebarTrigger } from "./ui/sidebar";

export function LayoutHeader() {
  const { user, logout } = useAuth();
  return (
    <div className="flex h-28 w-full items-center justify-between">
      <SidebarTrigger className="-ml-1" />
      <h1></h1>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 md:flex">
          <Input className="w-56" />
          <Button
            variant={"outline"}
            className="flex size-12 items-center justify-center rounded-full"
          >
            <GearIcon />
          </Button>
          <Button
            variant={"outline"}
            className="flex size-12 items-center justify-center rounded-full"
          >
            <BellIcon />
          </Button>
        </div>
        <Avatar>
          <AvatarImage src={user.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}
