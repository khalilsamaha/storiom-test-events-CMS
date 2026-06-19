import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getStoresByFloor, FLOOR_TITLES, FLOORS, Store } from "@/lib/storeData"

function accentFor(s: Store) {
  const cat = s.categories[0]
  if (cat === "supermarket")  return { from: "#8B9B2E", to: "#3AACBE" }
  if (cat === "food-dining")  return { from: "#E8832A", to: "#8B9B2E" }
  if (cat === "home-living")  return { from: "#3AACBE", to: "#9B5EA2" }
  if (cat === "fashion-more") return { from: "#9B5EA2", to: "#E8832A" }
  return { from: "#3AACBE", to: "#9B5EA2" }
}

export async function generateStaticParams() {
  return FLOORS.map(f => ({ level: `level-${f}` }))
}

export default async function FloorPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const levelNumber = parseInt(level.replace("level-", ""))
  if (isNaN(levelNumber) || !(levelNumber in FLOOR_TITLES)) return notFound()

  const stores     = getStoresByFloor(levelNumber)
  const floorTitle = FLOOR_TITLES[levelNumber]

  return (
    <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
      <div className="pt-12 pb-8">
        <nav className="text-sm text-muted-foreground flex gap-2 mb-4">
          <Link href="/floors" className="hover:text-brand-teal transition-colors">Floors</Link>
          <span className="opacity-40">/</span>
          <span className="text-foreground">{floorTitle}</span>
        </nav>
        <h1 className="font-display text-5xl font-semibold tracking-tight">{floorTitle}</h1>
        <p className="mt-2 text-muted-foreground font-light">
          {stores.length > 0
            ? `${stores.length} store${stores.length !== 1 ? "s" : ""} on this floor`
            : "Coming soon — this floor is under construction."}
        </p>
      </div>

      {stores.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-16">
          {stores.map(store => {
            const accent = accentFor(store)
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
                  <div className="pl-5 pr-4 pb-4 flex flex-col">
                    <div className="font-display text-base font-semibold leading-tight tracking-tight mb-1">{store.name}</div>
                    <p className="text-sm text-muted-foreground font-light leading-snug">{store.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="pb-16">
          <div className="rounded-2xl border border-dashed border-brand-orange/40 bg-brand-orange/5 p-12 text-center">
            <div className="font-display text-2xl font-semibold text-brand-orange mb-2">Under Construction</div>
            <p className="text-muted-foreground font-light">
              This floor is coming soon. Check back for exciting new stores!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
