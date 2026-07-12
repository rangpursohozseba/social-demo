import Link from "next/link";

import { AddRounded, ChatRounded } from "@mui/icons-material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MobileSidebar from "@/components/layout/navbar/MobileSidebar";

export default function MobileNavbar() {
  return (
    <header className="flex md:hidden sticky top-0 z-50 h-16 bg-background-surface w-full items-center justify-between px-2">
      {/* Left */}
      <div className="flex items-center gap-2">
        {/*<button*/}
        {/*  aria-label="Menu"*/}
        {/*  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated"*/}
        {/*>*/}
        {/*  <MenuRoundedIcon />*/}
        {/*</button>*/}
        <MobileSidebar />

        <Link href="/" className="text-xl font-bold">
          Horizon
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button
          aria-label="Create post"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated"
        >
          <AddRounded />
        </button>

        <button
          aria-label="Messages"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated"
        >
          <ChatRounded />
        </button>
      </div>
    </header>
  );
}
