"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { Store, FLOOR_TITLES, FLOORS } from "@/lib/storeData"

function storeAccentHex(s: Store) {
  const cat = s.categories[0]
  if (cat === "supermarket")  return { from: "#8B9B2E", to: "#3AACBE" }
  if (cat === "food-dining")  return { from: "#E8832A", to: "#8B9B2E" }
  if (cat === "home-living")  return { from: "#3AACBE", to: "#9B5EA2" }
  if (cat === "fashion-more") return { from: "#9B5EA2", to: "#E8832A" }
  return { from: "#3AACBE", to: "#9B5EA2" }
}

export default function StoresClient({ stores }: { stores: Store[] }) {
  const [q,        setQ]        = useState("")
  const [floor,    setFloor]    = useState("all")
  const [category, setCategory] = useState("all")

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return stores.filter(s => {
      const matchSearch   = !needle || s.name.toLowerCase().includes(needle) || s.description.toLowerCase().includes(needle)
      const matchFloor    = floor    === "all" || String(s.floor) === floor
      const matchCategory = category === "all" || s.categories.includes(category)
      return matchSearch && matchFloor && matchCategory
    })
  }, [stores, q, floor, category])

  const inputCls  = "w-full rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-brand-teal transition-colors placeholder:text-muted-foreground"
  const selectCls = "w-full rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-brand-teal transition-colors appearance-none cursor-pointer"

  return (
    <div className="pt-6 pb-16 grid gap-6 lg:grid-cols-[300px_1fr]">

      {/* Filter panel */}
      <aside>
        <div className="rounded-2xl border border-border bg-card p-5 space-y-4 sticky top-20">
          <input value={q} onChange={e => setQ(e.target.value)}
            placeholder="Search stores…" className={inputCls} />
          <div className="space-y-3">
            <select value={floor} onChange={e => setFloor(e.target.value)} className={selectCls}>
              <option value="all">All floors</option>
              {FLOORS.map(f => (
                <option key={f} value={String(f)}>{FLOOR_TITLES[f]}</option>
              ))}
            </select>
            <select value={category} onChange={e => setCategory(e.target.value)} className={selectCls}>
              <option value="all">All categories</option>
              <option value="supermarket">Supermarket & Essentials</option>
              <option value="food-dining">Food & Dining</option>
              <option value="home-living">Home & Living</option>
              <option value="fashion-more">Fashion & More</option>
            </select>
            <button type="button"
              onClick={() => { setQ(""); setFloor("all"); setCategory("all") }}
              className="w-full rounded-full border border-border px-4 py-2.5 text-sm hover:border-brand-teal hover:text-brand-teal transition-colors">
              Reset filters
            </button>
          </div>
          <div className="text-xs text-muted-foreground pt-1">
            Showing <span className="font-medium text-foreground">{filtered.length}</span> of {stores.length} stores
          </div>
        </div>
      </aside>

      {/* Store grid */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 content-start items-stretch">
        {filtered.map(store => {
          const accent = storeAccentHex(store)
          return (
            <div key={store.id} className="cursor-default flex flex-col h-full">
              <div className="relative rounded-[18px] bg-card border border-border overflow-hidden flex flex-col h-full">
                <div className="absolute left-0 top-0 bottom-0 w-[3px]"
                  style={{ background: `linear-gradient(to bottom, ${accent.from}, ${accent.to})` }} />

                {/* Logo */}
                <div className="px-5 pt-5 pb-4">
                  <div className="h-[88px] w-full rounded-xl bg-secondary border border-border/50 flex items-center justify-center overflow-hidden p-4">
                    <Image src={store.logo} alt={store.name}
                      width={160} height={72}
                      className="object-contain max-w-full max-h-full" unoptimized />
                  </div>
                </div>

                <div className="pl-5 pr-4 pb-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="font-display text-base font-semibold leading-tight tracking-tight">{store.name}</div>
                    <span className="text-[10px] text-muted-foreground bg-secondary rounded-full px-2 py-0.5 border border-border/50 whitespace-nowrap shrink-0 mt-0.5">
                      {FLOOR_TITLES[store.floor]}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-snug flex-1">
                    {store.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-border bg-card p-8 text-center">
            <div className="font-medium">No stores found</div>
            <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
