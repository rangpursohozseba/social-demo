import Link from "next/link";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const navItems = [
  { href: "/", icon: HomeRoundedIcon, active: true },
  { href: "/groups", icon: GroupsRoundedIcon, active: false },
  { href: "/videos", icon: VideoLibraryRoundedIcon, active: false },
  { href: "/marketplace", icon: StorefrontRoundedIcon, active: false },
  { href: "/notifications", icon: NotificationsRoundedIcon, active: false },
];

export default function MobileBottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-outline/20 bg-background-surface md:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map(({ href, icon: Icon, active }) => (
          <Link
            key={href}
            href={href}
            className={`flex h-12 flex-1 items-center justify-center rounded-xl transition-colors ${
              active ? "text-primary" : "text-foreground-muted hover:bg-background-elevated"
            }`}
          >
            <Icon fontSize="medium" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
