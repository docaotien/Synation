import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";
import {Button} from "@/components/ui/button"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
          <Button className="flex mx-5 bg-black">Create</Button>
          <MobileSidebar />
          <NavbarRoutes />
    </div>
  );
}