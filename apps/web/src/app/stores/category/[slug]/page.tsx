import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getStoresByCategory, CATEGORIES, CategorySlug, Store } from "@/lib/storeData"

function Diamond({ stroke, dx, dy, cx, cy, size = 40 }: {
  stroke: string; dx: number; dy: number; cx: number; cy: number; size?: number
}) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size}>
      <rect x={dx} y={dy} width="28" height="28" rx="7" fill="none"
        stroke={stroke} strokeWidth="3.5" transform={`rotate(45 ${cx} ${cy})`} />
    </svg>
  )
}

function storeAccent(s: Store) {
  const cat = s.categories[0]
  if (cat === "supermarket")  return { from: "#8B9B2E", to: "#3AACBE" }
  if (cat === "food-dining")  return { from: "#E8832A", to: "#8B9B2E" }
  if (cat === "home-living")  return { from: "#3AACBE", to: "#9B5EA2" }
  if (cat === "fashion-more") return { from: "#9B5EA2", to: "#E8832A" }
  return { from: "#3AACBE", to: "#9B5EA2" }
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map(slug => ({ slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = CATEGORIES[slug as CategorySlug]
  if (!cat) notFound()

  const stores = getStoresByCategory(slug)

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${cat.accentFrom}18 0%, ${cat.accentTo}10 100%)` }}>
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, ${cat.accentFrom}, ${cat.accentTo})` }} />

        <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <Link href="/"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 group">
                <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
                Home
              </Link>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-border bg-card shadow-sm">
                  <Diamond stroke={cat.stroke} dx={cat.dx} dy={cat.dy} cx={cat.cx} cy={cat.cy} size={40} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: cat.accentText }}>
                  Category
                </div>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                {cat.label}
              </h1>
              <p className="mt-2 font-display text-xl sm:text-2xl italic font-light text-muted-foreground">
                {cat.tagline}
              </p>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed max-w-xl">
                {cat.description}
              </p>
            </div>
            <div className="shrink-0">
              <div className="rounded-2xl border border-border bg-card px-6 py-4 text-center shadow-sm">
                <div className="font-display text-4xl font-bold" style={{ color: cat.accentText }}>{stores.length}</div>
                <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">
                  {stores.length === 1 ? "store" : "stores"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store grid */}
      <section className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stores.map(store => {
            const accent = storeAccent(store)
            return (
              <div key={store.id} className="cursor-default">
                <div className="relative rounded-[18px] bg-card border border-border overflow-hidden flex flex-col">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: `linear-gradient(to bottom, ${accent.from}, ${accent.to})` }} />
                  <div className="px-5 pt-5 pb-4">
                    <div className="h-[80px] w-full rounded-xl bg-secondary border border-border/50 flex items-center justify-center overflow-hidden p-4">
                      <Image src={store.logo} alt={store.name} width={150} height={68}
                        className="object-contain max-w-full max-h-full" unoptimized />
                    </div>
                  </div>
                  <div className="pl-5 pr-4 pb-4 flex flex-col flex-1">
                    <div className="font-display text-base font-semibold leading-tight tracking-tight mb-1.5">
                      {store.name}
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-snug flex-1">
                      {store.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-border py-12"
        style={{ background: `linear-gradient(135deg, ${cat.accentFrom}08 0%, ${cat.accentTo}05 100%)` }}>
        <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold tracking-tight text-muted-foreground mb-5">
            Explore other categories
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(CATEGORIES).filter(c => c.slug !== slug).map(c => (
              <Link key={c.slug} href={`/stores/category/${c.slug}`}
                className="group rounded-2xl bg-card border border-border p-4 flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all">
                <Diamond stroke={c.stroke} dx={c.dx} dy={c.dy} cx={c.cx} cy={c.cy} size={32} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm leading-tight">{c.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 truncate">{c.tagline}</div>
                </div>
                <span className="text-muted-foreground group-hover:text-brand-teal group-hover:translate-x-0.5 transition-all text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
