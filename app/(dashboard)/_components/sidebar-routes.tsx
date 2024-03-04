"use client"

import {Layout} from "lucide-react"
import {Compass} from "lucide-react"
import {CircleUser} from "lucide-react"
import {CreditCard} from "lucide-react"
import {BarChart} from "lucide-react"
import {SidebarItem} from "./sidebar-item"
import {List} from "lucide-react"
import {usePathname} from "next/navigation"
import {Link} from "lucide-react"
import {Hash} from "lucide-react"

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
          { icon: Link,
          label: "Social",
          href: "/social"},
          { icon: Hash,
          label: "Notification",
          href: "/notice"},
]

const userRoutes = [
          { icon: List,
           label: "List Explore",
           href: "/user/manages"},
           { icon: BarChart,
           label: "Analytics",
           href: "/user/analytics"},
 ]

export const SidebarRoutes = () => {

          const pathname = usePathname();

          const isUserPage = pathname?.includes("/user")

          const routes = isUserPage ? userRoutes : guestRoutes;

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