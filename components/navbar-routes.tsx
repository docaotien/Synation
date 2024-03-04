"use client"

import { UserButton } from '@clerk/nextjs';
import {usePathname} from "next/navigation";
import { Button } from "@/components/ui/button";
import {LogOut} from "lucide-react"
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isUserPage = pathname?.startsWith("/admin");
  const isGuestPage = pathname.includes("/user");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isUserPage || isGuestPage ? 
      (<Link href="/">
          <Button> 
                    <LogOut className="h-4 w-4 mr-2"/>
                    Exit
          </Button>
      </Link> ): (
          <Link href="/user/manages">
                    <Button size="sm" >User mode</Button>
          </Link>
      )}    
      <UserButton 
          afterSignOutUrl='/'
      />
    </div>
  );
}