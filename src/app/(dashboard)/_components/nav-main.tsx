"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BarChartIcon,
  Film,
  FolderIcon,
  List,
  ListIcon,
  School,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import { LayoutDashboardIcon, University, type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { title } from "process";
import { url } from "inspector";

const navMain = [
  {
    title: "Projects",
    url: "projects",
    icon: FolderIcon,
  },
  {
    title: "Team",
    url: "team",
    icon: UsersIcon,
  },
];

const teacherRoutes = [
  {
    title: "Courses",
    url: "/teacher/courses",
    icon: List,
  },
  {
    title: "Create Courses",
    url: "/teacher/create-courses",
    icon: Film,
  },
  {
    title: "Analytics",
    url: "/teacher/analytics",
    icon: BarChartIcon,
  },
];

export function NavMain() {
  const { open, isMobile } = useSidebar();
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : navMain;

  const normalizeUrl = (url: string) => (url.startsWith("/") ? url : `/${url}`);

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="CoreLearn"
              className="min-w-8 p-2 py-5 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
            >

              <School className="ml-1 h-4 w-4"/>
              <span>CoreLearn</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu className="mt-3">
          {/* Dashboard Link */}
          <SidebarMenuItem key="Dashboard">
            <SidebarMenuButton tooltip="Dashboard">
              <Link
                href="/dashboard"
                className={cn(
                  "flex items-center space-x-2 hover:bg-slate-200/50 p-2 rounded-lg text-foreground w-full",
                  pathname === "/dashboard" &&
                    "bg-slate-200/50 text-active text-blue-500 border-l-3 border-blue-500"
                )}
              >
                <LayoutDashboardIcon size={15} />
                <span className={cn("text-sm", !open && !isMobile && "hidden")}>
                  Dashboard
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Dynamic Items */}
          {routes.map((item) => {
            const itemUrl = normalizeUrl(item.url);
            const isActive = pathname === itemUrl;
            // You can also use pathname.startsWith(itemUrl) for nested routes

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title}>
                  <Link
                    href={itemUrl}
                    className={cn(
                      "flex items-center space-x-2 hover:bg-slate-200/50 p-2 rounded-lg text-foreground w-full",
                      isActive &&
                        "bg-slate-200/50 text-blue-500 border-l-3 border-blue-500"
                    )}
                  >
                    {item.icon && <item.icon size={15} />}
                    <span
                      className={cn("text-sm", !open && !isMobile && "hidden")}
                    >
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
