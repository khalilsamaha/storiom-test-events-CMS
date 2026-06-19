import Link from "next/link"
import { FLOORS, FLOOR_TITLES, getStoresByFloor } from "@/lib/storeData"

function floorAccent(n: number) {
  if (n === -1) return "from-brand-teal to-brand-purple"
  if (n === 0)  return "from-brand-olive to-brand-teal"
  if (n === 1)  return "from-brand-purple to-brand-orange"
  if (n === 2)  return "from-brand-orange to-brand-olive"
  return "from-brand-orange to-brand-purple"
}

function floorLabel(n: number) {
  if (n === -1) return "B1"
  if (n === 0)  return "G"
  return String(n)
}

export default function FloorsPage() {
  return (
    <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
      <div className="pt-12 pb-8">
        <h1 className="font-display text-5xl font-semibold tracking-tight">Floors</h1>
        <p className="mt-2 text-muted-foreground font-light">Navigate Storiom level by level.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-16">
        {FLOORS.map(f => {
          const storeCount  = getStoresByFloor(f).length
          const isConstruction = storeCount === 0
          return (
            <Link key={f} href={`/floors/level-${f}`}>
              <div className="relative rounded-[18px] bg-card border border-border overflow-hidden p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <span className="absolute top-3 right-4 font-display text-5xl font-bold text-foreground/[0.06] leading-none select-none">
                  {floorLabel(f)}
                </span>
                <span className={`inline-block text-[10.5px] uppercase tracking-wide px-2.5 py-1 rounded-full mb-4 ${
                  isConstruction
                    ? "bg-brand-orange/10 text-brand-orange"
                    : "bg-brand-teal/10 text-brand-teal"
                }`}>
                  {isConstruction ? "Coming soon" : "Active"}
                </span>
                <div className="font-display text-xl font-semibold leading-tight">{FLOOR_TITLES[f]}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {isConstruction ? "Under construction" : `${storeCount} store${storeCount !== 1 ? "s" : ""}`}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${floorAccent(f)} opacity-55`} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
