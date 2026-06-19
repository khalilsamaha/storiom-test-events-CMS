/**
 * Official Apple App Store & Google Play badge SVGs
 * Used consistently across Header, Services page, and homepage
 */

interface BadgeProps {
  className?: string
}

/** Official black Apple App Store badge */
export function AppStoreBadge({ className = "" }: BadgeProps) {
  return (
    <a
      href="https://apps.apple.com/fr/app/storiom/id1585058113"
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label="Download on the App Store"
    >
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" width="120" height="40">
        <rect width="120" height="40" rx="7" fill="#000"/>
        <rect x="0.5" y="0.5" width="119" height="39" rx="6.5" fill="none" stroke="#A6A6A6" strokeWidth="0.5"/>
        {/* Apple logo */}
        <path d="M24.769 20.3c-.028-3.24 2.647-4.816 2.768-4.888-1.508-2.205-3.853-2.507-4.681-2.536-1.988-.203-3.89 1.181-4.898 1.181-1.013 0-2.564-1.155-4.223-1.122-2.16.033-4.165 1.263-5.274 3.194-2.255 3.908-.577 9.69 1.614 12.856 1.075 1.549 2.34 3.285 4.002 3.224 1.613-.065 2.218-1.039 4.163-1.039 1.94 0 2.496 1.039 4.185 1.002 1.733-.032 2.828-1.567 3.887-3.124 1.237-1.786 1.742-3.541 1.764-3.632-.04-.015-3.38-1.297-3.307-5.116z" fill="#fff"/>
        <path d="M21.578 11.432c.878-1.08 1.476-2.558 1.314-4.057-1.27.054-2.838.86-3.75 1.916-.814.938-1.535 2.468-1.346 3.912 1.42.107 2.877-.727 3.782-1.771z" fill="#fff"/>
        {/* "Download on the" text */}
        <text x="37" y="14" fontFamily="-apple-system,Helvetica,Arial,sans-serif" fontSize="7" fill="#fff" letterSpacing="0.3">Download on the</text>
        {/* "App Store" text */}
        <text x="36" y="27" fontFamily="-apple-system,Helvetica,Arial,sans-serif" fontSize="13.5" fontWeight="600" fill="#fff" letterSpacing="-0.3">App Store</text>
      </svg>
    </a>
  )
}

/** Official Google Play badge */
export function GooglePlayBadge({ className = "" }: BadgeProps) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=ma.osp.shopping_app.strm.android&pcampaignid=web_share"
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" width="135" height="40">
        <rect width="135" height="40" rx="7" fill="#000"/>
        <rect x="0.5" y="0.5" width="134" height="39" rx="6.5" fill="none" stroke="#A6A6A6" strokeWidth="0.5"/>
        {/* Play triangle — multicolor */}
        <path d="M11.12 7.9C10.47 8.56 10.08 9.6 10.08 10.97v18.06c0 1.37.39 2.41 1.04 3.07l.16.15L21.3 22.18v-.35L11.28 7.75l-.16.15z" fill="url(#gp-a)"/>
        <path d="M24.77 25.67l-3.47-3.49v-.35l3.47-3.49.08.04 4.11 2.34c1.17.67 1.17 1.76 0 2.43l-4.11 2.34-.08.18z" fill="url(#gp-b)"/>
        <path d="M24.85 25.49L21.3 21.93 11.12 32.1c.39.41 1.02.46 1.73.05l11.99-6.66" fill="url(#gp-c)"/>
        <path d="M24.85 18.37L12.86 11.71c-.71-.41-1.34-.36-1.73.05l10.17 10.17 3.55-3.56z" fill="url(#gp-d)"/>
        <defs>
          <linearGradient id="gp-a" x1="19.83" y1="8.98" x2="4.22" y2="24.59" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF"/>
            <stop offset="1" stopColor="#00E1FF"/>
          </linearGradient>
          <linearGradient id="gp-b" x1="30.41" y1="21.93" x2="9.84" y2="21.93" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE000"/>
            <stop offset="1" stopColor="#FFBD00"/>
          </linearGradient>
          <linearGradient id="gp-c" x1="23.01" y1="24.3" x2="7.3" y2="39.96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3A44"/>
            <stop offset="1" stopColor="#C31162"/>
          </linearGradient>
          <linearGradient id="gp-d" x1="8.14" y1="7.3" x2="17.4" y2="16.56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32A071"/>
            <stop offset="1" stopColor="#2DA771"/>
          </linearGradient>
        </defs>
        {/* "GET IT ON" text */}
        <text x="42" y="14" fontFamily="-apple-system,Helvetica,Arial,sans-serif" fontSize="7" fill="#fff" letterSpacing="0.8">GET IT ON</text>
        {/* "Google Play" text */}
        <text x="41" y="27" fontFamily="-apple-system,Helvetica,Arial,sans-serif" fontSize="13.5" fontWeight="500" fill="#fff" letterSpacing="-0.2">Google Play</text>
      </svg>
    </a>
  )
}

/** Compact inline versions for tight spaces (e.g. homepage dark section) */
export function AppStoreBadgeCompact({ className = "" }: BadgeProps) {
  return (
    <a
      href="https://apps.apple.com/fr/app/storiom/id1585058113"
      target="_blank" rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-xl bg-black border border-white/15 text-white px-4 py-2.5 hover:bg-white/20 transition-colors ${className}`}
      aria-label="Download on the App Store"
    >
      {/* Apple logo — correct proportions */}
      <svg width="16" height="20" viewBox="0 0 16 20" fill="white">
        <path d="M13.173 10.525c-.022-2.43 1.987-3.613 2.077-3.667-1.133-1.654-2.891-1.88-3.514-1.904-1.493-.153-2.918.887-3.674.887-.757 0-1.924-.866-3.168-.841-1.62.025-3.126.947-3.958 2.397-1.692 2.933-.433 7.267 1.21 9.642.806 1.162 1.756 2.465 3.002 2.418 1.21-.049 1.664-.78 3.123-.78 1.458 0 1.874.78 3.143.752 1.3-.024 2.123-1.176 2.917-2.344.928-1.34 1.307-2.657 1.323-2.724-.03-.011-2.538-.973-2.481-3.836zM10.934 3.313c.659-.81 1.108-1.919.986-3.046-.953.04-2.13.646-2.814 1.437-.611.705-1.152 1.852-1.012 2.936 1.066.08 2.158-.546 2.84-1.327z"/>
      </svg>
      <div>
        <div className="text-[9px] leading-none opacity-80 mb-0.5">Download on the</div>
        <div className="text-[13px] font-semibold leading-none">App Store</div>
      </div>
    </a>
  )
}

export function GooglePlayBadgeCompact({ className = "" }: BadgeProps) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=ma.osp.shopping_app.strm.android&pcampaignid=web_share"
      target="_blank" rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-xl bg-black border border-white/15 text-white px-4 py-2.5 hover:bg-white/10 transition-colors ${className}`}
      aria-label="Get it on Google Play"
    >
      {/* Google Play SVG */}
      <svg viewBox="0 0 14 16" width="14" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.548 0.538C0.213 0.882 0 1.425 0 2.127v11.746c0 .702.213 1.245.548 1.59l.083.08 6.583-6.583v-.156L.631.458.548.538z" fill="url(#cpa)"/>
        <path d="M9.412 10.132l-2.198-2.2v-.156l2.198-2.198.05.028 2.603 1.479c.744.422.744 1.112 0 1.535l-2.603 1.479-.05.033z" fill="url(#cpb)"/>
        <path d="M9.462 10.1L7.214 7.852.548 14.518c.245.26.649.292 1.103.033l7.81-4.451" fill="url(#cpc)"/>
        <path d="M9.462 5.604L1.651 1.152C1.197.893.793.925.548 1.185l6.666 6.667 2.248-2.248z" fill="url(#cpd)"/>
        <defs>
          <linearGradient id="cpa" x1="6.305" y1="1.28" x2="-1.38" y2="8.965" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF"/><stop offset="1" stopColor="#00E1FF"/>
          </linearGradient>
          <linearGradient id="cpb" x1="12.685" y1="7.852" x2="-.107" y2="7.852" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE000"/><stop offset="1" stopColor="#FFBD00"/>
          </linearGradient>
          <linearGradient id="cpc" x1="7.986" y1="9.41" x2="-.594" y2="17.99" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3A44"/><stop offset="1" stopColor="#C31162"/>
          </linearGradient>
          <linearGradient id="cpd" x1="-1.148" y1="-1.075" x2="4.73" y2="4.803" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32A071"/><stop offset="1" stopColor="#2DA771"/>
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div className="text-[9px] leading-none opacity-80 mb-0.5">GET IT ON</div>
        <div className="text-[13px] font-semibold leading-none">Google Play</div>
      </div>
    </a>
  )
}
