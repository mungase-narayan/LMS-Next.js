import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <ClerkProvider>
        <header className="flex justify-end items-center gap-6 mr-5 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </ClerkProvider>
    </div>
  );
};

export default HomePage;
