'use client'

import { useEffect, useRef, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoCloudsSimple from '@/components/LogoCloudsSimpleOnDark'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Our people', href: '#' },
  { name: 'Our cases', href: '#' },
]

export default function SectionsHeroesSimpleCenteredWithBackgroundImage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoRef = useRef(null)
  const reverseStateRef = useRef({ isReversing: false, lastNowMs: 0 })

  const startReversePlayback = () => {
    const videoElement = videoRef.current
    if (!videoElement) return

    // Prevent multiple reverse loops
    if (reverseStateRef.current.isReversing) return

    reverseStateRef.current.isReversing = true
    reverseStateRef.current.lastNowMs = performance.now()
    videoElement.pause()

    const stepOnce = () => {
      const v = videoRef.current
      if (!v || !reverseStateRef.current.isReversing) return

      const now = performance.now()
      const elapsedSeconds = Math.max(0, (now - reverseStateRef.current.lastNowMs) / 1000)
      reverseStateRef.current.lastNowMs = now

      const prevTime = v.currentTime
      const nextTime = Math.max(0, prevTime - elapsedSeconds)
      // Use fastSeek if available; otherwise fall back to direct time set
      try {
        if (typeof v.fastSeek === 'function') {
          v.fastSeek(nextTime)
        } else {
          v.currentTime = nextTime
        }
      } catch {
        v.currentTime = nextTime
      }

      if (nextTime <= 0.0005) {
        reverseStateRef.current.isReversing = false
        v.play().catch(() => {})
        return
      }

      // Chain the next step after the frame is presented for smoothness
      if (typeof v.requestVideoFrameCallback === 'function') {
        v.requestVideoFrameCallback(() => {
          if (!reverseStateRef.current.isReversing) return
          stepOnce()
        })
      } else {
        const onSeeked = () => {
          v.removeEventListener('seeked', onSeeked)
          if (!reverseStateRef.current.isReversing) return
          stepOnce()
        }
        v.addEventListener('seeked', onSeeked, { once: true })
      }
    }

    stepOnce()
  }

  // Cleanup any pending rAF on unmount
  useEffect(() => {
    return () => {
      reverseStateRef.current.isReversing = false
    }
  }, [])

  return (
    <div className="bg-gray-900 hero">
      <header className="fixed inset-x-0 top-2 z-50">
        <nav aria-label="Global" className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-15 flex items-center justify-between rounded-[100px] px-4 sm:px-6 lg:px-8 py-3 bg-black/50 backdrop-blur-md">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://i.imgur.com/B0CZtGq.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-md bg-[#AC7B43] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#d09a54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BC8749]"
          >
            Contact us
          </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://i.imgur.com/B0CZtGq.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="mt-2 block w-full text-center rounded-md bg-[#AC7B43] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#d09a54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BC8749]"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-28 sm:pt-36 md:pt-44 min-h-screen flex items-start md:items-center">
        <div className="absolute inset-0 -z-20 p-20 pt-20 pb-10 px-10 bg-black">
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            className="size-full object-cover rounded-[30px]"
            style={{ objectPosition: '50% 50%' }}
            ref={videoRef}
            onEnded={startReversePlayback}
          >
            <source src="https://cdn.midjourney.com/video/6b14cb95-b273-400c-86ed-4e57acc03320/1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-black/70"></div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20">
                See our most successful cases.{' '}
                <a href="#" className="font-semibold text-[#AC7B43] opacity-80">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Uncover the truth with trusted investigators
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              California's #1 private investigation firm delivers swift, discreet results through world-class surveillance and investigation techniques.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#AC7B43] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#d09a54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BC8749]"
                >
                  Get confidential help now
                </a>
              </div>
            </div>
          </div>
          <LogoCloudsSimple className="mt-32" logoClassName="max-h-[3.2rem] opacity-70" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-black to-gray-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
