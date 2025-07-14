"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/router";

export const HomeView = () => {
    const router = useRouter
  const { data: session } = authClient.useSession()

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>
        {session?.user?.name
          ? `Welcome, ${session.user.name}`
          : "Welcome to GlideCall!"}
      </p>
      <Button onClick={() => authClient.signOut({
        fetchOptions : {
            onSuccess : ()=>router.push("/sign-in"),
        }
      })}>Sign Out</Button>
    </div>
  );
};
