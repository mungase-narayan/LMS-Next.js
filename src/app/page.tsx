import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <ClerkProvider>
        <header className="flex justify-end items-center gap-6 mr-5 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <Link href={"/dashboard"}>
            <Button size={"sm"} className="px-4">
              Dashboard
            </Button>
          </Link>
          <Link href={"/teacher/courses"}>
            <Button variant={"secondary"} size={"sm"} className="px-4">
              Teacher Mode
            </Button>
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </ClerkProvider>
    </div>
  );
};

export default HomePage;
