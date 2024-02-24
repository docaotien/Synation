"use client"

import {Layout} from "lucide-react"
import {Compass} from "lucide-react"
import {CircleUser} from "lucide-react"
import {CreditCard} from "lucide-react"
import {BarChart} from "lucide-react"
import {SidebarItem} from "./sidebar-item"
import {List} from "lucide-react"
import {usePathname} from "next/navigation"


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
          href: "/payments"},
          { icon: Compass,
          label: "Social",
          href: "/social"},
          
]

const adminRoutes = [

          { icon: List,
           label: "List Explore",
           href: "/admin/manages"},
           { icon: BarChart,
           label: "Analytics",
           href: "/admin/analytics"},
           
 ]

export const SidebarRoutes = () => {

          const pathname = usePathname();

          const isAdminPage = pathname?.includes("/admin")

          const routes = isAdminPage ? adminRoutes : guestRoutes;

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