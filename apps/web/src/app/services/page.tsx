import { AppStoreBadge, GooglePlayBadge } from "@/components/AppStoreBadges"

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">

      <div className="pt-12 pb-8">
        <h1 className="font-display text-5xl font-semibold tracking-tight">Services</h1>
        <p className="mt-2 text-muted-foreground font-light">Everything Storiom offers to make your life easier.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 pb-16">

        {/* Orders & Delivery Services */}
        <div className="rounded-2xl bg-card border border-border p-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 border border-brand-teal/20 p-6 mb-6">
            <div className="text-3xl mb-3">📦</div>
            <h2 className="font-display text-2xl font-semibold">Orders & Delivery Services</h2>
            <p className="mt-2 text-sm text-muted-foreground font-light">
              Order from your favourite Storiom stores without leaving home.
            </p>
          </div>
          <div className="space-y-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/96176367368"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-xl bg-[#25D366]/08 hover:bg-[#25D366]/15 border border-[#25D366]/25 p-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">WhatsApp</div>
                <div className="text-sm text-muted-foreground font-light mt-0.5">+961 76 367 368 — tap to chat</div>
              </div>
              <span className="text-muted-foreground group-hover:text-[#25D366] transition-colors text-sm">→</span>
            </a>

            {/* Email */}
            <a
              href="mailto:showroom@storiomsaliba.com"
              className="flex items-center gap-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border p-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-border flex items-center justify-center text-lg shrink-0">✉️</div>
              <div className="flex-1">
                <div className="font-medium text-sm">Email</div>
                <div className="text-sm text-muted-foreground font-light mt-0.5">showroom@storiomsaliba.com</div>
              </div>
              <span className="text-muted-foreground group-hover:text-brand-teal transition-colors text-sm">→</span>
            </a>

            {/* Application */}
            <div className="rounded-xl bg-secondary border border-border p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-border flex items-center justify-center text-lg shrink-0">📱</div>
                <div>
                  <div className="font-medium text-sm">Application</div>
                  <div className="text-xs text-muted-foreground font-light mt-0.5">Order directly from the Storiom app</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>

          </div>
        </div>

        {/* Gift Vouchers — unchanged */}
        <div className="rounded-2xl bg-card border border-border p-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-orange/5 border border-brand-orange/20 p-6 mb-6">
            <div className="text-3xl mb-3">🎁</div>
            <h2 className="font-display text-2xl font-semibold">Gift Vouchers</h2>
            <p className="mt-2 text-sm text-muted-foreground font-light">
              The perfect gift — redeemable at any store in Storiom.
            </p>
          </div>

          <p className="text-sm text-muted-foreground font-light mb-6">
            Storiom gift vouchers are available in five denominations and can be used across all stores in the mall. They make the ideal present for any occasion.
          </p>

          <div className="grid grid-cols-5 gap-2 mb-6">
            {["$10", "$20", "$25", "$50", "$100"].map((v) => (
              <div key={v} className="rounded-xl bg-secondary border border-border p-3 text-center">
                <div className="font-display text-lg font-semibold text-brand-orange">{v}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-secondary/60 border border-border p-4 text-sm text-muted-foreground font-light">
            <span className="font-medium text-foreground">Where to get them:</span>{" "}
            Gift vouchers are available at the Storiom reception desk during opening hours.
          </div>

          <div className="mt-4 text-sm text-muted-foreground font-light">
            For bulk orders or corporate gifting, please{" "}
            <a href="/contact" className="text-brand-teal hover:underline">contact us</a>.
          </div>
        </div>

      </div>
    </div>
  )
}
