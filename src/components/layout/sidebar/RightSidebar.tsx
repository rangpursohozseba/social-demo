import Sidebar from "@/components/layout/sidebar/Sidebar";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const connections = ["Abir Hasan", "Rahim Uddin", "Tanvir Ahmed", "Nusrat Jahan", "Sakib Hasan"];

const ads = ["Rangpur Electronics"];

const hotNotifications = [
  "🩸 Blood needed (O+) at Rangpur Medical",
  "⚠️ Heavy rain warning today",
  "🚧 Road maintenance at Modern Mor",
  "💡 Power outage in Dhap area",
];

const trending = [
  "Flood updates in Rangpur",
  "Best restaurants this week",
  "New job opportunities",
  "House rentals near Carmichael College",
];

const businesses = ["Rangpur IT Solution", "Dream Furniture", "City Mart", "Smart Mobile Center"];

export default function RightSidebar() {
  return (
    <Sidebar className="hidden md:block">
      <div className="flex flex-col pr-2">
        {/* Sponsored */}
        <section>
          <h3 className="mb-2 flex items-center gap-2 px-3 text-sm font-semibold text-foreground-muted">
            <CampaignRoundedIcon fontSize="small" />
            Sponsored
          </h3>

          <div className="space-y-3">
            {ads.map((ad) => (
              <button
                key={ad}
                className="w-full rounded-xl border border-background-elevated p-3 text-left transition-all hover:bg-background-elevated"
              >
                <div className="aspect-[16/9] w-full rounded-lg bg-background-elevated" />

                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{ad}</h4>

                    <span className="rounded-full bg-background-elevated px-2 py-0.5 text-xs text-foreground-muted">
                      Sponsored
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-foreground-muted line-clamp-2">
                    Best deals and trusted local services in Rangpur.
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-foreground-muted">rangpur.example</span>

                    <span className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Learn More
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="my-4 border-t border-background-elevated" />

        {/* Hot Notifications */}
        <section>
          <h3 className="mb-2 flex items-center gap-2 px-3 text-sm font-semibold text-foreground-muted">
            <NotificationsActiveRoundedIcon fontSize="small" />
            Notifications
          </h3>

          <div className="space-y-1">
            {hotNotifications.map((item) => (
              <button
                key={item}
                className="w-full rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-background-elevated"
              >
                <p className="text-sm">{item}</p>
              </button>
            ))}
          </div>
        </section>

        <div className="my-4 border-t border-background-elevated" />

        {/* Active Connections */}
        <section>
          <h3 className="mb-2 flex items-center gap-2 px-3 text-sm font-semibold text-foreground-muted">
            <PersonRoundedIcon fontSize="small" />
            Active Connections
          </h3>

          <div className="space-y-1">
            {connections.map((name) => (
              <button
                key={name}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-background-elevated"
              >
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-elevated font-semibold">
                    {name.charAt(0)}
                  </div>

                  <CircleRoundedIcon
                    className="absolute bottom-0 right-0 !text-green-500"
                    sx={{ fontSize: 12 }}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{name}</p>
                  <p className="text-xs text-foreground-muted">Online</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </Sidebar>
  );
}
