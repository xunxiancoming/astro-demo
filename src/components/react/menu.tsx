import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { SquareMenu } from "lucide-react";
import { Nav } from "./nav";

export function Menu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <SquareMenu size={20} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <img
            src="/bg6.svg"
            className="bg-img"
            alt=""
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "-1",
              filter: "blur(100px)",
            }}
          />
          <Nav className="flex flex-col p-4 gap-4" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
