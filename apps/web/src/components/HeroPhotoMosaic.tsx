"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

// Each card has its own dedicated photo pool
const CARD_PHOTOS = {
  top:          // Greens + Market
    ["/images/greens-1.jpg", "/images/greens-2.jpg",
     "/images/market-1.jpg", "/images/market-2.jpg", "/images/market-3.jpg"],
  bottomLeft:   // Household
    ["/images/household-1.jpg", "/images/household-2.jpg", "/images/household-3.jpg"],
  bottomRight:  // Toys
    ["/images/toys-1.jpg", "/images/toys-2.jpg", "/images/toys-3.jpg"],
}

const KB_ANIMS = [
  "kb0 7s ease-in-out forwards",
  "kb1 7s ease-in-out forwards",
  "kb2 7s ease-in-out forwards",
]

function PhotoCard({ photos, intervalMs, className }: {
  photos: string[]
  intervalMs: number
  className?: string
}) {
  const [idx,     setIdx]     = useState(0)
  const [visible, setVisible] = useState(true)
  const kbRef                 = useRef(0)

  useEffect(() => {
    const t = setInterval(() => {
      // Fade out
      setVisible(false)
      setTimeout(() => {
        // Advance to next photo, pick next KB variant
        setIdx(i => (i + 1) % photos.length)
        kbRef.current = (kbRef.current + 1) % 3
        setVisible(true)
      }, 600)
    }, intervalMs)
    return () => clearInterval(t)
  }, [photos, intervalMs])

  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      <style>{`
        @keyframes kb0 { 0%{transform:scale(1.0) translate(0%,0%)}    100%{transform:scale(1.09) translate(-1.5%,-1%)} }
        @keyframes kb1 { 0%{transform:scale(1.06) translate(-1%,0%)}  100%{transform:scale(1.0)  translate(1%,1%)}    }
        @keyframes kb2 { 0%{transform:scale(1.0) translate(1%,-0.5%)} 100%{transform:scale(1.08) translate(-0.5%,0.5%)} }
      `}</style>

      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Storiom"
          fill
          className="object-cover"
          style={{
            opacity:    i === idx ? (visible ? 1 : 0) : 0,
            transition: "opacity 0.7s ease-in-out",
            animation:  i === idx && visible ? KB_ANIMS[kbRef.current] : "none",
            zIndex:     i === idx ? 1 : 0,
          }}
          unoptimized
          priority={i === 0}
        />
      ))}

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" style={{ zIndex: 2 }} />
    </div>
  )
}

export default function HeroPhotoMosaic() {
  return (
    <div className="grid grid-cols-2 gap-2.5 animate-fade-up animate-delay-100">
      <PhotoCard
        photos={CARD_PHOTOS.top}
        intervalMs={4200}
        className="col-span-2 rounded-2xl h-[260px]"
      />
      <PhotoCard
        photos={CARD_PHOTOS.bottomLeft}
        intervalMs={3800}
        className="rounded-xl h-[160px]"
      />
      <PhotoCard
        photos={CARD_PHOTOS.bottomRight}
        intervalMs={4600}
        className="rounded-xl h-[160px]"
      />
    </div>
  )
}
