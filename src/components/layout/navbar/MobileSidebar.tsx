"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import BloodtypeRoundedIcon from "@mui/icons-material/BloodtypeRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import DirectionsBusRoundedIcon from "@mui/icons-material/DirectionsBusRounded";

const sections = [
  {
    title: "Daily Information",
    items: [
      { label: "Daily Updates", href: "/updates", icon: FeedRoundedIcon },
      { label: "Latest News", href: "/news", icon: CampaignRoundedIcon },
      { label: "Discounts", href: "/discounts", icon: LocalOfferRoundedIcon },
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
      { label: "Jobs & Hiring", href: "/jobs", icon: WorkRoundedIcon },
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

export default function MobileSidebar() {
  return (
    <Dialog.Root>
      {/* Trigger */}
      <Dialog.Trigger asChild>
        <button
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated"
        >
          <MenuRoundedIcon />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out" />

        {/* Sidebar */}
        <Dialog.Content className="fixed left-0 top-0 z-50 flex inset-y-0 w-80 max-w-[85vw] flex-col bg-background-surface shadow-xl outline-none transition-transform duration-300 data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0">
          {/* Header */}
          {/*<div className="flex items-center justify-between border-b border-outline/20 p-4">*/}
          {/*  <Dialog.Title className="text-lg font-semibold">Horizon</Dialog.Title>*/}

          {/*  <Dialog.Close asChild>*/}
          {/*    <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-background-elevated">*/}
          {/*      <CloseRoundedIcon />*/}
          {/*    </button>*/}
          {/*  </Dialog.Close>*/}
          {/*</div>*/}

          {/* Profile */}
          <div className="border-b border-outline/20 p-4">
            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-2xl p-2 hover:bg-background-elevated"
            >
              <AccountCircleRoundedIcon sx={{ fontSize: 52 }} />

              <div>
                <h2 className="font-semibold">Abir Hasan</h2>
                <p className="text-sm text-foreground-muted">View your profile</p>
              </div>
            </Link>
          </div>

          {/* Menu */}
          <div className="flex-1 overflow-y-auto">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-outline/10 py-4">
                <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  {section.title}
                </h3>

                <div className="space-y-1 px-2">
                  {section.items.map(({ label, href, icon: Icon }) => (
                    <Dialog.Close asChild key={href}>
                      <Link
                        href={href}
                        className="flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-background-elevated"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon />
                        </div>

                        <span className="font-medium">{label}</span>
                      </Link>
                    </Dialog.Close>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
