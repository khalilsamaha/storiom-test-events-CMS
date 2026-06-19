"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Timings (ms)
const VISIBLE_MS = 50    // logo stays still
const ZOOM_MS    = 1200  // zoom-in burst duration
const TOTAL_MS   = VISIBLE_MS + ZOOM_MS

export default function SplashScreen() {
  const [phase, setPhase] = useState<"idle" | "visible" | "zooming" | "done">("idle")

  useEffect(() => {
    document.body.style.overflow = "hidden"
    // Small delay so Next.js hydration is settled before we start
    const startTimer = setTimeout(() => setPhase("visible"), 50)
    const zoomTimer  = setTimeout(() => setPhase("zooming"), VISIBLE_MS)
    const doneTimer  = setTimeout(() => {
      setPhase("done")
      document.body.style.overflow = ""
    }, TOTAL_MS + 50)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(zoomTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (phase === "done") return null

  return (
    <>
      {/* Keyframe definitions */}
      <style>{`
        @keyframes splashLogoIn {
          0%   { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1);    opacity: 1; }
        }
        @keyframes splashLogoZoom {
          0%   { transform: scale(1);    opacity: 1; }
          100% { transform: scale(6);    opacity: 0; }
        }
        @keyframes splashBgFade {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes splashProgress {
          0%   { width: 0%;    }
          100% { width: 100%;  }
        }
      `}</style>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        style={{
          position:        "fixed",
          inset:           0,
          zIndex:          9999,
          backgroundColor: "#EEF7F5",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          overflow:        "hidden",
          pointerEvents:   phase === "zooming" ? "none" : "auto",
          // Fade the whole backdrop during zoom
          animation: phase === "zooming"
            ? `splashBgFade ${ZOOM_MS}ms ease-in forwards`
            : "none",
        }}
      >
        {/* Logo */}
        <div
          style={{
            animation:
              phase === "visible"
                ? "splashLogoIn 0.65s cubic-bezier(0.34,1.36,0.64,1) forwards"
                : phase === "zooming"
                  ? `splashLogoZoom ${ZOOM_MS}ms cubic-bezier(0.4,0,0.8,0) forwards`
                  : "none",
            // Start invisible so the "in" animation takes over
            opacity:   phase === "idle" ? 0 : undefined,
          }}
        >
          <Image
            src="/logo-storiom-splash.png"
            alt="Storiom"
            width={220}
            height={220}
            priority
            className="object-contain select-none"
            draggable={false}
          />
        </div>

        {/* Brand progress bar */}
        <div
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            height:     "3px",
            background: "linear-gradient(90deg, #3AACBE 0%, #9B5EA2 33%, #E8832A 66%, #8B9B2E 100%)",
            animation:  phase === "visible"
              ? `splashProgress ${VISIBLE_MS}ms linear forwards`
              : "none",
            width: phase !== "visible" ? "100%" : undefined,
          }}
        />
      </div>
    </>
  )
}
