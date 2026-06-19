"use client"

import { useState } from "react"
const MYSTORIOM_MAINTENANCE = true

// Each benefit gets one Storiom logo diamond (one of the 4 colours)
const BENEFITS = [
  {
    color: "#3AACBE",
    title: "Earn points",
    desc: "On every purchase across all Storiom stores.",
    // Teal diamond — top-left shape
    diamond: (
      <svg viewBox="0 0 44 44" className="w-9 h-9" aria-hidden>
        <rect x="6" y="6" width="24" height="24" rx="6" fill="none" stroke="#3AACBE" strokeWidth="3"
          transform="rotate(45 18 18)" />
      </svg>
    ),
  },
  {
    color: "#E8832A",
    title: "Redeem rewards",
    desc: "Exchange your points for vouchers and gifts.",
    // Orange diamond — top-right
    diamond: (
      <svg viewBox="0 0 44 44" className="w-9 h-9" aria-hidden>
        <rect x="10" y="6" width="24" height="24" rx="6" fill="none" stroke="#E8832A" strokeWidth="3"
          transform="rotate(45 22 18)" />
      </svg>
    ),
  },
  {
    color: "#9B5EA2",
    title: "Track your balance",
    desc: "Check your points history anytime.",
    // Purple diamond — bottom-left
    diamond: (
      <svg viewBox="0 0 44 44" className="w-9 h-9" aria-hidden>
        <rect x="6" y="10" width="24" height="24" rx="6" fill="none" stroke="#9B5EA2" strokeWidth="3"
          transform="rotate(45 18 22)" />
      </svg>
    ),
  },
  {
    color: "#8B9B2E",
    title: "All stores",
    desc: "Valid at every store in the mall.",
    // Olive diamond — bottom-right
    diamond: (
      <svg viewBox="0 0 44 44" className="w-9 h-9" aria-hidden>
        <rect x="10" y="10" width="24" height="24" rx="6" fill="none" stroke="#8B9B2E" strokeWidth="3"
          transform="rotate(45 22 22)" />
      </svg>
    ),
  },
]

export default function MyStoriomPage() {
  const [cardNumber, setCardNumber] = useState("")
  const [phone, setPhone]           = useState("")
  const [submitted, setSubmitted]   = useState(false)
  const [loading, setLoading]       = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!cardNumber.trim() || !phone.trim()) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 900)
  }

  return (
    <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 py-16">

      {/* Page header */}
      <div className="mb-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">Loyalty programme</div>
        <h1 className="font-display text-5xl font-semibold tracking-tight">MyStoriom</h1>
        <p className="mt-3 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
          Your Storiom loyalty card earns points on every purchase across all stores.
        </p>

        {/* Loyalty guide PDF download + email — clean pill row */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href="/mystoriom-loyalty-guide.pdf"
            download="MyStoriom-Loyalty-Guide.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-brand-teal hover:text-brand-teal transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Loyalty Guide
          </a>
          <a
            href="mailto:mystoriom@storiomsaliba.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-brand-teal hover:text-brand-teal transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            mystoriom@storiomsaliba.com
          </a>
        </div>
      </div>

      {/* Two-column: benefits left, login right — items-stretch for equal height */}
      <div className="grid gap-6 lg:grid-cols-2 items-stretch">

        {/* ── Left: benefits ── */}
        <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
          <div className="px-8 py-6 border-b border-border">
            <div className="font-display text-lg font-semibold">How it works</div>
            <div className="text-sm text-muted-foreground font-light mt-0.5">Everything your loyalty card unlocks</div>
          </div>

          {/* 2×2 grid of benefit cells */}
          <div className="grid grid-cols-2 gap-px bg-border flex-1">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-card p-6 flex flex-col">
                <div className="mb-3">{b.diamond}</div>
                <div className="font-display text-base font-semibold">{b.title}</div>
                <div className="mt-1 text-sm text-muted-foreground font-light leading-snug">{b.desc}</div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-8 py-5 border-t border-border bg-secondary/40">
            <p className="text-sm text-muted-foreground font-light">
              Don&apos;t have a card yet?{" "}
              <span className="text-foreground font-medium">Ask at any Storiom counter</span> — it&apos;s free.
            </p>
          </div>
        </div>

        {/* ── Right: login card ── */}
        
      {/* ==================================================================== */
/* TEMPORARY MAINTENANCE MODE — MyStoriom login card */
/* Remove this whole block later and restore the original login card */
/* ==================================================================== */}

{/* ── Right: login card ── */}
<div className="relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden min-h-[430px]">

  {/* Original card blurred in background */}
  <div className="blur-sm opacity-50 pointer-events-none select-none">

    {/* Gradient header */}
    <div className="px-8 py-8 bg-gradient-to-br from-brand-teal to-brand-purple flex-shrink-0">
      <div className="font-display text-2xl font-semibold text-white">
        Sign in to MyStoriom
      </div>

      <div className="mt-1.5 text-sm text-white/70">
        Enter your card number &amp; phone number
      </div>
    </div>

    {/* Form */}
    <form className="px-8 py-8 flex flex-col gap-4 flex-1">

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Loyalty card number
        </label>

        <input
          type="text"
          placeholder="e.g. STR-000123"
          disabled
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Phone number
        </label>

        <input
          type="tel"
          placeholder="e.g. 03 123 456"
          disabled
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
        />
      </div>

      <div className="flex-1" />

      <button
        type="button"
        disabled
        className="w-full rounded-full bg-brand-teal text-white py-3 text-sm font-semibold opacity-70"
      >
        Check my points →
      </button>

      <p className="text-xs text-center text-muted-foreground">
        Need help?{" "}
        <a
          href="mailto:mystoriom@storiomsaliba.com"
          className="text-brand-teal hover:underline"
        >
          mystoriom@storiomsaliba.com
        </a>
      </p>

    </form>
  </div>

  {/* Maintenance overlay */}
  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/55 backdrop-blur-[2px]">
    <div className="mx-6 rounded-2xl border border-border bg-white/90 px-8 py-8 text-center shadow-xl max-w-sm">

      <div className="mb-4 flex justify-center">
        <svg viewBox="0 0 44 44" className="w-12 h-12" aria-hidden>
          <rect x="6" y="6" width="24" height="24" rx="6" fill="none" stroke="#3AACBE" strokeWidth="3"
            transform="rotate(45 18 18)" />
        </svg>
      </div>

      <div className="font-display text-2xl font-semibold text-foreground">
        Check Your Points
      </div>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        To check your points, please visit the customer service desk or the available checkpoint.
      </p>

      <div className="mt-5 rounded-xl bg-secondary border border-border px-4 py-3">
        <p className="text-xs text-muted-foreground font-light">
          📍 Available at Storiom — Kornet Chehwan
        </p>
      </div>

    </div>
  </div>

</div>

{/* ==================================================================== */
/* END TEMPORARY MAINTENANCE MODE */
/* ==================================================================== */}
     
      </div>
    </div>
  )
}
