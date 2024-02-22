"use client"

import {Layout} from "lucide-react"
import {Compass} from "lucide-react"
import {CircleUser} from "lucide-react"
import {CreditCard} from "lucide-react"
import {SidebarItem} from "./sidebar-item"


const guestRoutes = [

         { icon: Layout,
          label: "Explore",
          href: "/"},
          { icon: Compass,
          label: "Trending",
          href: "/trending"},
          { icon: CircleUser,
          label: "My Profile",
          href: "/your-profile"},
          { icon: CreditCard,
          label: "Payments",
          href: "/search"},
          
]

export const SidebarRoutes = () => {
          const routes = guestRoutes;

          return(
                    <div className="flex flex-col w-full">
                             {routes.map((route) => (
                             <SidebarItem 
                             key={route.href}
                             icon={route.icon}
                             label={route.label}
                             href={route.href}
                             />))}
                    </div>
          )
}