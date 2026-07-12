import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const navItems = [
  { icon: HomeRoundedIcon, active: true },
  { icon: GroupsRoundedIcon, active: false },
  { icon: VideoLibraryRoundedIcon, active: false },
  { icon: StorefrontRoundedIcon, active: false },
  { icon: NotificationsRoundedIcon, active: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-outline/20 bg-background-surface">
      <div className="flex h-full w-full items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">
            Horizon
          </Link>

          <div className="relative hidden lg:block">
            <SearchRoundedIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted !text-xl" />

            <input
              placeholder="Search Horizon..."
              className="h-10 w-72 rounded-full bg-background border pl-10 pr-4 outline-none"
            />
          </div>
        </div>

        {/* Center */}
        <nav className="flex justify-center items-center gap-2">
          {navItems.map(({ icon: Icon, active }, i) => (
            <button
              key={i}
              className={`flex h-12 w-16 items-center justify-center rounded-xl transition ${
                active ? "bg-primary text-on-primary" : "text-foreground-muted hover:bg-background"
              }`}
            >
              <Icon fontSize="medium" />
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated">
            <AddRoundedIcon />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated">
            <ChatRoundedIcon />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated">
            <NotificationsRoundedIcon />
          </button>

          <ThemeToggle className="hover:bg-background-elevated" />

          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated">
            <AccountCircleRoundedIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
