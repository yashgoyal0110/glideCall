import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/generated-avatar";
import { ChevronDownIcon,  CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
export const DashboardUserButton = () => {
//   const { data, isPending } = authClient.useSession();
const router = useRouter();
  const data = {
    user: {
      name: "Yash Agrawal",
      email: "yash@mail.com"
  }
}

const onLogout = async () => {
    await authClient.signOut({
    fetchOptions:{
        onSuccess: () => {
            router.push("/sign-in");
        }
    }
        })
}

    // if (isPending || !data?.user) {
    //   return null;
    // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
        {data?.user?.image ? (
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={data.user.image}
              alt={data.user.name || "User Avatar"}
            />
          </Avatar>
        ) : <GeneratedAvatar 
        seed={data.user.name}
        variant={"initials"}
        className="mr-3 size-9"/>}
        <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0">
            <p className="text-sm truncate w-full">
                {data.user.name || "User"}
            </p>
            <p className="text-xs truncate w-full">
                {data.user.email || "No email provided"}
            </p>
        </div>
        <ChevronDownIcon className="size-4 shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel>
            <div className="flex flex-col gap-1">
                <span className="font-medium truncate">
                  {data.user.name || "User"}
                </span>
                  <span className="text-sm font-normal text-muted-foreground">
                        {data.user.email || "No email provided"}
                    </span>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer flex items-center justify-between">
Billing
<CreditCardIcon className="size-4 mr-2" />
            </DropdownMenuItem>
  <DropdownMenuItem
  className="cursor-pointer flex items-center justify-between"
          onClick={onLogout}>
Logout
<LogOutIcon className="size-4 ml-auto" />
            </DropdownMenuItem>

           </DropdownMenuContent>
    </DropdownMenu>
  );
};
