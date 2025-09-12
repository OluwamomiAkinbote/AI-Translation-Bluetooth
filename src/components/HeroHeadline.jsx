'use client'

import React from 'react'

/**
 * HeroHeadline Component
 * - Tailwind CSS styling
 * - Smooth-scroll CTA to the #packages section
 * - Accessible and responsive
 *
 * Usage:
 * <HeroHeadline
 *   title="One Earbud, Three Big Powers"
 *   subtitle="Talk any language, enjoy your favorite music, and pick calls — all from one smart device."
 *   ctaText="See Packages"
 * />
 */

export default function HeroHeadline({
  title = 'One Earbud, Three Big Powers',
  subtitle = 'Talk any language, enjoy your favorite music, and pick calls — all from one smart device.',
  ctaText = 'See Packages',
  secondaryCtaText = 'Watch Demo',
}) {
  const handleCtaClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('package')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // focus for accessibility
      el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
    } else {
      // fallback: navigate to /#packages (useful if route differs)
      window.location.href = '/#package'
    }
  }

  const handleSecondary = (e) => {
    e.preventDefault()
    // Replace with demo modal logic or video open behavior
    const demoEl = document.getElementById('demo')
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      demoEl.setAttribute('tabindex', '-1')
      demoEl.focus({ preventScroll: true })
    } else {
      // temporary fallback
      console.info('Demo section not found.')
    }
  }

  return (
    <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
            New • AI-powered • 144 languages
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-white/30"
              aria-label={`${ctaText} - jump to packages`}
            >
              {ctaText}
              <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={handleSecondary}
              className="inline-flex items-center justify-center px-5 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
              aria-label={`${secondaryCtaText} - open demo`}
            >
              {secondaryCtaText}
            </button>
          </div>

          <div className="mt-6 text-sm text-white/80">
            <strong className="font-semibold">Ships to Nigeria · 1-year warranty · 30-day returns</strong>
          </div>
        </div>

        {/* Right - Product mock / visual */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[340px] sm:w-[420px] md:w-[520px]">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm shadow-2xl">
              {/* Mock product card */}
              <img
                src="/images/earbuds-mock.png"
                alt="Srotek AI Bluetooth Translator Earbuds"
                className="w-full h-auto object-contain rounded-lg"
                onError={(e) => {
                  // fallback placeholder
                  e.currentTarget.src = 'https://via.placeholder.com/520x320?text=Product+Image'
                }}
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 left-4 bg-white text-green-700 px-3 py-1 rounded-full text-sm font-medium shadow">
              144 languages
            </div>

            {/* Feature ribbon */}
            <div className="absolute -top-4 right-4 bg-white/10 text-white px-3 py-1 rounded-lg text-xs">
              Face-to-Face • Real-time
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
