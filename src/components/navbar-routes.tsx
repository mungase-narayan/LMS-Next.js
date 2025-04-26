"use client";

import { UserButton } from "@clerk/nextjs";
import { LogOut, SquareUserRound } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import SidebarMenuButton from "./ui/sidebar";
import { Button } from "./ui/button";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  return (
    <div className="flex gap-4 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href={"/dashboard"} className="cursor-pointer">
          <Button
            variant={"secondary"}
            className="px-4 flex items-center text-sm cursor-pointer"
            size={"sm"}
          >
            <LogOut />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"} className="cursor-pointer">
          <Button
            variant={"secondary"}
            className="px-4 flex items-center text-sm cursor-pointer"
            size={"sm"}
          >
            <SquareUserRound /> Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
