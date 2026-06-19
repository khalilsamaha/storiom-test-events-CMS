import Link from "next/link"
import Image from "next/image"
import HeroPhotoMosaic from "@/components/HeroPhotoMosaic"
import { AppStoreBadgeCompact, GooglePlayBadgeCompact } from "@/components/AppStoreBadges"

export default function Home() {
  return (
    <>
      {/* ══ BRAND GRADIENT TOP STRIPE ══ */}
      <div className="h-[3px] w-full brand-gradient" />

      {/* ══ HERO ══ */}
      <section className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 grid gap-14 lg:grid-cols-2 items-center">

          {/* Left copy */}
          <div className="animate-fade-up">

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.04] tracking-tight">
              Where every floor<br />
              holds a{" "}
              <em className="not-italic text-brand-teal">discovery.</em>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground font-light leading-relaxed max-w-md">
              Storiom brings together the finest retailers, dining, and daily
              essentials — across every level, curated for life in Kornet Chehwan.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/stores" className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
                Browse stores
              </Link>
              <Link href="/floors" className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:border-brand-teal hover:text-brand-teal transition-colors">
                Explore floors
              </Link>
              <Link href="/my-storiom" className="inline-flex items-center rounded-full border border-brand-teal/40 text-brand-teal px-6 py-2.5 text-sm font-medium hover:bg-brand-teal/10 transition-colors">
                MyStoriom
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-card border border-border p-4">
                <div className="text-[10.5px] uppercase tracking-widest text-muted-foreground mb-1">Opening hours</div>
                <div className="text-sm font-medium">Mon–Sat: 8:00 – 9:30 PM</div>
                <div className="text-sm text-muted-foreground">Sun: 8:30 – 9:30 PM</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 italic">L1 &amp; L2 close at 9:00 PM</div>
              </div>
              <div className="rounded-2xl bg-card border border-border p-4">
                <div className="text-[10.5px] uppercase tracking-widest text-muted-foreground mb-1">Location</div>
                <div className="text-sm font-medium">Kornet Chehwan</div>
                <div className="text-sm text-muted-foreground">Antelias–Bikfaya Road</div>
              </div>
            </div>
          </div>

          {/* Right mosaic — rotating photos from all 4 Storiom stores */}
          <HeroPhotoMosaic />
        </div>
      </section>

      {/* ══ CATEGORY CARDS ══ */}
      <section className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Shop by category</h2>
            <p className="mt-1.5 text-muted-foreground font-light">Everything you need, all under one roof.</p>
          </div>
          <Link href="/stores" className="text-sm text-muted-foreground hover:text-brand-teal transition-colors pb-0.5 border-b border-transparent hover:border-brand-teal">
            All stores →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Supermarket",    desc: "Fresh groceries and daily essentials.",
              href: "/stores/category/supermarket",
              color: "#3AACBE", from: "from-brand-teal",   to: "to-brand-purple",
              // Top-left diamond = teal
              diamond: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="8" y="8" width="28" height="28" rx="7" fill="none" stroke="#3AACBE" strokeWidth="3.5" transform="rotate(45 22 22)" /></svg>,
            },
            {
              name: "Food & Dining",  desc: "Restaurants, cafés, and fresh produce.",
              href: "/stores/category/food-dining",
              color: "#E8832A", from: "from-brand-olive",  to: "to-brand-teal",
              // Top-right diamond = orange
              diamond: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="12" y="8" width="28" height="28" rx="7" fill="none" stroke="#E8832A" strokeWidth="3.5" transform="rotate(45 26 22)" /></svg>,
            },
            {
              name: "Home & Living",  desc: "Household goods, décor and kitchenware.",
              href: "/stores/category/home-living",
              color: "#9B5EA2", from: "from-brand-orange", to: "to-brand-olive",
              // Bottom-left diamond = purple
              diamond: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="8" y="12" width="28" height="28" rx="7" fill="none" stroke="#9B5EA2" strokeWidth="3.5" transform="rotate(45 22 26)" /></svg>,
            },
            {
              name: "Fashion & More", desc: "Fashion, beauty, electronics and lifestyle.",
              href: "/stores/category/fashion-more",
              color: "#8B9B2E", from: "from-brand-purple", to: "to-brand-orange",
              // Bottom-right diamond = olive
              diamond: <svg viewBox="0 0 48 48" className="w-10 h-10"><rect x="12" y="12" width="28" height="28" rx="7" fill="none" stroke="#8B9B2E" strokeWidth="3.5" transform="rotate(45 26 26)" /></svg>,
            },
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} className="group">
              <div className="relative rounded-[18px] bg-card border border-border overflow-hidden p-5 min-h-[164px] flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cat.from} ${cat.to}`} />
                <div className="mb-3 mt-1">{cat.diamond}</div>
                <div className="font-display text-xl font-semibold leading-tight">{cat.name}</div>
                <div className="mt-1.5 text-sm text-muted-foreground font-light leading-snug flex-1">{cat.desc}</div>
                <div className="mt-4 text-xs text-muted-foreground group-hover:text-brand-teal transition-colors flex items-center gap-1">
                  Explore <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ SERVICES CARDS (replaces Floors section) ══ */}
      <section className="bg-[#1E0E06] py-16">
        <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F8F5F1]">Services</h2>
              <p className="mt-1.5 text-[#F8F5F1]/55 font-light">Everything Storiom offers to make your life easier.</p>
            </div>
            <Link href="/services" className="text-sm text-[#F8F5F1]/40 hover:text-[#F8F5F1]/80 pb-0.5 border-b border-transparent hover:border-[#F8F5F1]/40 transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {/* Orders & Delivery */}
            <div className="rounded-2xl bg-[#F8FEFC]/05 border border-[#F8F5F1]/10 overflow-hidden">
              <div className="px-7 pt-7 pb-5 border-b border-[#F8F5F1]/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/20 flex items-center justify-center text-xl">📦</div>
                  <div>
                    <div className="font-display text-lg font-semibold text-[#F8F5F1]">Orders & Delivery Services</div>
                    <div className="text-xs text-[#F8F5F1]/50 font-light mt-0.5">Order from home, delivered to your door.</div>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/96176367368"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 p-4 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#F8F5F1]">WhatsApp</div>
                    <div className="text-xs text-[#F8F5F1]/55 font-light">+961 76 367 368 — tap to open</div>
                  </div>
                  <span className="text-[#F8F5F1]/30 group-hover:text-[#25D366] transition-colors text-sm">→</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@storiomsaliba.com"
                  className="flex items-center gap-4 rounded-xl bg-brand-teal/08 hover:bg-brand-teal/15 border border-brand-teal/20 p-4 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-teal/20 flex items-center justify-center shrink-0 text-brand-teal">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#F8F5F1]">Email</div>
                    <div className="text-xs text-[#F8F5F1]/55 font-light">info@storiomsaliba.com</div>
                  </div>
                  <span className="text-[#F8F5F1]/30 group-hover:text-brand-teal transition-colors text-sm">→</span>
                </a>

                {/* App */}
                <div className="rounded-xl bg-[#F8F5F1]/05 border border-[#F8F5F1]/10 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-purple/30 flex items-center justify-center shrink-0 text-lg">📱</div>
                    <div className="text-sm font-semibold text-[#F8F5F1]">Application</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <AppStoreBadgeCompact />
                    <GooglePlayBadgeCompact />
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Vouchers */}
            <div className="rounded-2xl bg-[#F8FEFC]/05 border border-[#F8F5F1]/10 overflow-hidden">
              <div className="px-7 pt-7 pb-5 border-b border-[#F8F5F1]/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-xl">🎁</div>
                  <div>
                    <div className="font-display text-lg font-semibold text-[#F8F5F1]">Gift Vouchers</div>
                    <div className="text-xs text-[#F8F5F1]/50 font-light mt-0.5">The perfect gift for any occasion.</div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#F8F5F1]/60 font-light mb-5">
                  Redeemable at every store in Storiom. Available in five denominations at the reception desk.
                </p>
                <div className="grid grid-cols-5 gap-2 mb-5">
                  {["$10", "$20", "$25", "$50", "$100"].map((v) => (
                    <div key={v} className="rounded-xl bg-brand-orange/15 border border-brand-orange/30 p-3 text-center">
                      <div className="font-display text-base font-bold text-brand-orange">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-[#F8F5F1]/08 border border-[#F8F5F1]/12 p-4 text-sm text-[#F8F5F1]/55 font-light">
                  <span className="font-medium text-[#F8F5F1]">Where to get them:</span>{" "}
                  Available at the Storiom reception desk during opening hours.
                </div>
                <div className="mt-4 text-sm text-[#F8F5F1]/45 font-light">
                  Corporate gifting?{" "}
                  <a href="/contact" className="text-brand-teal hover:underline">Contact us</a>.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ MYSTORIOM TEASER ══ */}
      <section className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">Loyalty programme</div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                MyStoriom
              </h2>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed max-w-md">
                Earn points on every purchase across all Storiom stores. Sign in with your loyalty card number and phone number to check your balance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/my-storiom" className="inline-flex items-center rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-2.5 text-sm font-medium transition-colors">
                  Explore MyStoriom →
                </Link>
              </div>
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center gap-3">
              {[
                { icon: "🎁", text: "Earn points on every purchase" },
                { icon: "🏷️", text: "Redeem for vouchers & rewards" },
                { icon: "📊", text: "Track your balance in real-time" },
                { icon: "🛍️", text: "Valid across all Storiom stores" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-3 text-sm">
                  <span className="text-xl w-7 shrink-0">{b.icon}</span>
                  <span className="text-foreground/80">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT / STATS ══ */}
      <section className="bg-secondary/60 border-t border-border py-20">
        <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-4">Our story</div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                A destination built for everyday life.
              </h2>
              <p className="mt-5 text-muted-foreground font-light leading-relaxed max-w-lg">
                Storiom is a modern commercial centre in the heart of Kornet Chehwan — designed to bring together the best of retail, dining, and essential services under one roof.
              </p>
              <p className="mt-3 text-muted-foreground font-light leading-relaxed max-w-lg">
                From fresh groceries to fashion, household needs to fine dining — every floor is carefully curated to serve our community.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
                  Get in touch
                </Link>
                <Link href="/floors" className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm font-medium hover:border-brand-teal hover:text-brand-teal transition-colors">
                  Explore floors
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "4+",  col: "text-brand-teal",   label: "Floors of retail & services" },
                { num: "18+", col: "text-brand-orange",  label: "Stores & restaurants" },
                { num: "7d",  col: "text-brand-purple",  label: "Open every day of the week" },
                { num: "KCW", col: "text-brand-olive",   label: "Kornet Chehwan, Lebanon", small: true },
              ].map(({ num, col, label, small }) => (
                <div key={label} className="rounded-2xl bg-card border border-border p-6">
                  <div className={`font-display font-bold leading-none mb-2 ${col} ${small ? "text-3xl" : "text-5xl"}`}>
                    {num}
                  </div>
                  <div className="text-sm text-muted-foreground font-light">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
