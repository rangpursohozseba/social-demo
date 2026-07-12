import Link from "next/link";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import BloodtypeRoundedIcon from "@mui/icons-material/BloodtypeRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import DirectionsBusRoundedIcon from "@mui/icons-material/DirectionsBusRounded";

const sections = [
  {
    title: "Daily Information",
    items: [
      {
        label: "Daily Updates",
        href: "/updates",
        icon: FeedRoundedIcon,
      },
      {
        label: "Latest News",
        href: "/news",
        icon: CampaignRoundedIcon,
      },
      {
        label: "Discounts",
        href: "/discounts",
        icon: LocalOfferRoundedIcon,
      },
      {
        label: "Essential Services",
        href: "/services",
        icon: MiscellaneousServicesRoundedIcon,
      },
    ],
  },
  {
    title: "Marketplace",
    items: [
      {
        label: "House, Shop & Mess Rentals",
        href: "/rentals",
        icon: HomeWorkRoundedIcon,
      },
      {
        label: "Jobs & Hiring",
        href: "/jobs",
        icon: WorkRoundedIcon,
      },
      {
        label: "Buy & Sell Used Items",
        href: "/marketplace",
        icon: StoreRoundedIcon,
      },
      {
        label: "Other Services",
        href: "/other-services",
        icon: HandymanRoundedIcon,
      },
    ],
  },
  {
    title: "Emergency Services",
    items: [
      {
        label: "Blood Donors",
        href: "/blood-donors",
        icon: BloodtypeRoundedIcon,
      },
      {
        label: "Doctor Appointments",
        href: "/doctors",
        icon: LocalHospitalRoundedIcon,
      },
      {
        label: "Emergency Contacts",
        href: "/emergency-contacts",
        icon: PhoneRoundedIcon,
      },
      {
        label: "Emergency Home Delivery",
        href: "/emergency-delivery",
        icon: DeliveryDiningRoundedIcon,
      },
      {
        label: "Intercity Bus Counters",
        href: "/bus-counters",
        icon: DirectionsBusRoundedIcon,
      },
    ],
  },
];

export default function LeftSidebar() {
  return (
    <Sidebar className="hidden md:block">
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={section.title}>
            <h3 className="mb-2 px-3 text-sm font-semibold text-foreground-muted">
              {section.title}
            </h3>

            <nav className="space-y-1">
              {section.items.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-background-elevated"
                >
                  <Icon fontSize="small" />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>

            {index !== sections.length - 1 && (
              <div className="my-4 border-t border-background-elevated" />
            )}
          </div>
        ))}
      </div>
    </Sidebar>
  );
}
