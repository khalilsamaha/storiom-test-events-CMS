"use client"
import React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { AppStoreBadgeCompact, GooglePlayBadgeCompact } from "@/components/AppStoreBadges"

// Header background — watercolor cloud-splash (matches Freepik "Abstract clouds with splashes")
const HEADER_BG = "linear-gradient(135deg, #2A8FA0 0%, #6B3F8A 100%)"

const WATERCOLOR_BG = [
  "radial-gradient(ellipse 42% 70% at 2% 55%, rgba(32,155,140,0.38) 0%, transparent 58%)",
  "radial-gradient(ellipse 30% 80% at 11% 88%, rgba(32,155,140,0.24) 0%, transparent 55%)",
  "radial-gradient(ellipse 26% 52% at 20% 15%, rgba(150,220,195,0.32) 0%, transparent 52%)",
  "radial-gradient(ellipse 20% 44% at 36% 74%, rgba(58,172,190,0.16) 0%, transparent 50%)",
  "radial-gradient(ellipse 18% 38% at 53% 26%, rgba(230,210,120,0.32) 0%, transparent 48%)",
  "radial-gradient(ellipse 22% 50% at 67% 70%, rgba(220,160,178,0.26) 0%, transparent 52%)",
  "radial-gradient(ellipse 28% 58% at 84% 36%, rgba(170,218,232,0.38) 0%, transparent 54%)",
  "radial-gradient(ellipse 20% 44% at 97% 80%, rgba(42,165,175,0.28) 0%, transparent 50%)",
  "linear-gradient(160deg, #ddf4ee 0%, #eaf7f2 25%, #f5f0e5 50%, #e8f2fa 72%, #d4ede6 100%)",
].join(", ")

type NavLink  = { title: string; href: string; description?: string | string[] }
type NavGroup = { title: string; links: NavLink[] }

const NAV: { label: string; groups: NavGroup[] }[] = [
  {
    label: "Stores & Dining",
    groups: [
      {
        title: "Explore",
        links: [
          { title: "All Stores", href: "/stores",  description: "Browse every retailer and brand." },
          { title: "Floors",    href: "/floors",  description: "Explore Storiom level by level." },
        ],
      },
    ],
  },
  {
    label: "Your Visit",
    groups: [
      {
        title: "Plan",
        links: [
          { title: "Opening Hours", href: "/contact#hours", description: ["Mon–Sat: 8:00 AM – 9:30 PM", "Sunday: 8:30 AM – 9:30 PM", "L1 & L2 close at 9:00 PM"] },
          { title: "Location",      href: "/contact#location", description: "Kornet Chehwan, Antelias–Bikfaya Road." },
          { title: "Contact",       href: "/contact",          description: "Get in touch with Storiom." },
        ],
      },
      {
        title: "Services",
        links: [
          { title: "Services & Delivery", href: "/services", description: "Delivery, WhatsApp, Pickup & gift vouchers." },
        ],
      },
    ],
  },
]

// App download dropdown content
function AppDropdown() {
  return (
    <div className="w-[320px] p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Storiom App</div>
          <div className="text-xs text-white/70 mt-0.5">Order, track & discover</div>
        </div>
      </div>
      <div className="space-y-2">
        <AppStoreBadgeCompact className="w-full justify-start" />
        <GooglePlayBadgeCompact className="w-full justify-start" />
      </div>
    </div>
  )
}

function cx(...cls: (string | false | undefined | null)[]) {
  return cls.filter(Boolean).join(" ")
}
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href.split("?")[0])
}

function MegaPanel({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="w-[min(780px,calc(100vw-2rem))] p-4">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3 pb-1">
              {g.title}
            </div>
            {g.links.map((l) => (
              <NavigationMenuLink key={l.href} asChild>
                <Link href={l.href} className="block rounded-xl p-3 hover:bg-secondary transition-colors">
                  <div className="text-sm font-medium">{l.title}</div>
                 {l.description && (
  <div className="text-xs text-muted-foreground mt-0.5 space-y-0.5">
    {Array.isArray(l.description)
      ? l.description.map((line, i) => <div key={i}>{line}</div>)
      : l.description}
  </div>
)}
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rounded-xl text-[#1a4a42] hover:bg-[#3AACBE]/15 border border-[#1a4a42]/25">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[360px] overflow-y-auto">
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <Image src="/logo-storiom.png" alt="Storiom" width={90} height={30} className="object-contain" />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-7 pb-8">
          {NAV.map((section) => (
            <div key={section.label} className="space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground px-1 mb-3">
                {section.label}
              </div>
              {section.groups.flatMap((g) => g.links).map((l) => (
                <Link
                  key={l.href} href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col rounded-2xl border border-border mx-3 px-4 py-3.5 hover:bg-secondary transition-colors"
                >
                  <div className="text-sm font-semibold">{l.title}</div>
                  {l.description && (
  <div className="text-xs text-muted-foreground mt-0.5 font-light space-y-0.5">
    {Array.isArray(l.description)
      ? l.description.map((line, i) => <div key={i}>{line}</div>)
      : l.description}
  </div>
)}
                </Link>
              ))}
            </div>
          ))}

          {/* App links in mobile */}
          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground px-1 mb-3">
              Download App
            </div>
            <AppStoreBadgeCompact className="w-full justify-start" />
            <GooglePlayBadgeCompact className="w-full justify-start" />
          </div>

          <Separator />

          <div className="grid gap-3 pt-1">
            <Button asChild className="rounded-full h-12 bg-brand-teal hover:bg-brand-teal/90 text-white text-base">
              <Link href="/my-storiom" onClick={() => setOpen(false)}>MyStoriom</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-12 text-base">
              <Link href="/stores" onClick={() => setOpen(false)}>Browse stores</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const NAV_LINK_CLS = "px-4 py-2 text-[16px] rounded-full transition-colors text-[#1a4a42]/80 hover:text-[#1a4a42] hover:bg-[#3AACBE]/15 font-medium"
const NAV_ACTIVE_CLS = "text-[#1a4a42] bg-[#3AACBE]/20"

export default function Header() {
  const pathname = usePathname()
  return (
    <header
      className="sticky top-0 z-50 shadow-[0_2px_20px_rgba(58,172,190,0.18)]"
      style={{ background: WATERCOLOR_BG }}
    >
      {/* Brand gradient top stripe */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #3AACBE 0%, #9B5EA2 33%, #E8832A 66%, #8B9B2E 100%)" }} />

      <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4" style={{ height: "6rem" }}>

          {/* Logo — bigger, anchored left */}
          <Link href="/" className="flex items-center shrink-0 -ml-2">
            <Image
              src="/logo-storiom.png"
              alt="Storiom"
              width={240}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cx(NAV_LINK_CLS, "bg-transparent border-0", isActive(pathname, "/stores") && NAV_ACTIVE_CLS)}
                  style={{ background: "transparent" }}
                 >
                  Stores & Dining
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaPanel groups={NAV[0].groups} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cx(
                    NAV_LINK_CLS, "bg-transparent border-0",
                    (isActive(pathname, "/services") || isActive(pathname, "/contact")) && NAV_ACTIVE_CLS
                  )}
                  style={{ background: "transparent" }}
                >
                  Your Visit
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaPanel groups={NAV[1].groups} />
                </NavigationMenuContent>
              </NavigationMenuItem>


<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link
      href="/events"
      className={cx(NAV_LINK_CLS, isActive(pathname, "/events") && NAV_ACTIVE_CLS)}
    >
      Vikendiom
    </Link>
  </NavigationMenuLink>
</NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cx(NAV_LINK_CLS, isActive(pathname, "/contact") && NAV_ACTIVE_CLS)}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Download App dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cx(NAV_LINK_CLS, "bg-transparent border-0")}
                  style={{ background: "transparent" }}
                >
                  <Smartphone className="w-4 h-4 mr-1.5 inline-block" />
                  App
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div style={{ background: HEADER_BG }} className="rounded-2xl overflow-hidden">
                    <AppDropdown />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <Button
              asChild variant="ghost"
              className="hidden sm:inline-flex rounded-full text-[15px] px-5 h-10 text-[#1a4a42] border border-[#1a4a42]/30 hover:bg-[#3AACBE]/15 hover:text-[#1a4a42] hover:border-[#3AACBE]/50"
            >
              <Link href="/stores">Browse stores</Link>
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex rounded-full text-[15px] px-5 h-10 bg-[#1a4a42] text-white hover:bg-[#1a4a42]/85 font-semibold"
            >
              <Link href="/my-storiom">MyStoriom</Link>
            </Button>
            <MobileNav />
          </div>

        </div>
      </div>
    </header>
  )
}
