"use client"

import { UserButton } from '@clerk/nextjs';
import {usePathname} from "next/navigation";
import { Button } from "@/components/ui/button";
import {LogOut} from "lucide-react"
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isUserPage = pathname.includes("/user");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isAdminPage || isUserPage ? 
      (<Link href="/">
          <Button> 
                    <LogOut className="h-4 w-4 mr-2"/>
                    Exit
          </Button>
      </Link> ): (
          <Link href="/admin/manages">
                    <Button size="sm" >Admin mode</Button>
          </Link>
      )}    
      <UserButton 
          afterSignOutUrl='/'
      />
    </div>
  );
}