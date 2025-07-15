// dashboard-command.tsx
import { Dispatch, SetStateAction } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

 const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>
          Meeting Scheduler
        </CommandItem>
      </CommandList>
    </CommandDialog>
  );
};

export default DashboardCommand;