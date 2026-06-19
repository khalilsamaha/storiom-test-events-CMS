import { STORES } from "@/lib/storeData"
import StoresClient from "@/components/StoresClient"

export default function StoresPage() {
  return (
    <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
      <div className="pt-12 pb-2">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl font-semibold tracking-tight">Stores</h1>
            <p className="mt-2 text-muted-foreground font-light">Search and filter by floor and category.</p>
          </div>
          <span className="text-sm text-muted-foreground">{STORES.length} places</span>
        </div>
      </div>
      <StoresClient stores={STORES} />
    </div>
  )
}
