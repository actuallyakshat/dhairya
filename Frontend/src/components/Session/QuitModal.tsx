import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function QuitModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="fixed right-20 top-14">
        <Button variant={"link"} className="text-lg hover:text-destructive">
          X
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            You are about to quit the session. This also means this session will
            not be saved in your profile
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full gap-4">
            <Button
              onClick={() => setOpen(false)}
              className="w-full bg-gray-200 text-black hover:bg-gray-200/70"
            >
              Cancel
            </Button>
            <Link to="/dashboard" className="w-full">
              <Button onClick={() => setOpen(false)} className="w-full">
                Yes, quit the session
              </Button>
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
