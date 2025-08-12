"use client"

import { useEffect, useMemo, useState } from "react"

const featuredTestimonial = {
  body:
    'I would like to thank Marc and the rest of the Investigations team at LA Undercover, for catching my (now) ex-boyfriend for cheating on me with his co-worker. Marc was very kind and attentive to me. He said that he will update me daily on anything that he finds. A week later, Marc sent me pictures and a video of my ex hooking up with his boss! I’m so glad that I was able to get closure and move on with my life, thanks to LA Undercover and their expertise. If you need a great investigator who will have your back from start to finish, then Marc and LA Undercover is the company to go with.',
  author: {
    name: 'Maria L',
    handle: 'marial',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
  },
}

const testimonialsData = [
  {
    body:
      'I’ve used LA Undercover twice now for different personal matters. They were extremely professional, reasonably priced, and responded quickly. The staff kept in close contact with me throughout the process with steady updates. Communication and reliability keep me going back. Thanks, Marc & team!',
    author: {
      name: 'Christian P.',
      handle: 'christianp',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body:
      'Three weeks ago I called LA Undercover for a skip trace on my father, who I hadn’t seen since I was eight months old. Marc was clear on pricing and exactly what was needed. In under 48 hours they found an address and phone number. I’ve now spoken with my father and we’re meeting this summer. Thank you to Marc and the Investigations team for making this possible.',
    author: {
      name: 'Sofia T.',
      handle: 'sofiat',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body:
      'I hired LA Undercover to help find my missing sibling. I flew to Los Angeles and consulted with Marc and Marcus—both professional and understanding. After filing a report with no progress, LA Undercover took over, provided daily updates, followed leads, and found my sister in Santa Monica a week later. She’s now getting help and back home. I highly recommend this team.',
    author: {
      name: 'Aaliyah M.',
      handle: 'aaliyahm',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Example() {
  const allTestimonials = useMemo(() => [featuredTestimonial, ...testimonialsData], [])

  // Two-layer crossfade state
  const [visibleLayer, setVisibleLayer] = useState("A")
  const [indexA, setIndexA] = useState(0)
  const [indexB, setIndexB] = useState(2 % allTestimonials.length)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleLayer === "A") {
        setIndexB((indexA + 2) % allTestimonials.length)
        setVisibleLayer("B")
      } else {
        setIndexA((indexB + 2) % allTestimonials.length)
        setVisibleLayer("A")
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [visibleLayer, indexA, indexB, allTestimonials.length])

  const renderPair = (start) => {
    const left = allTestimonials[start % allTestimonials.length]
    const right = allTestimonials[(start + 1) % allTestimonials.length]
    return (
      <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {/* Left testimonial */}
        <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
          <figure className="mt-10 flex flex-auto flex-col justify-between">
            <blockquote className="text-lg/8 text-gray-900">
              <p>“{left.body}”</p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img alt="" src={left.author.imageUrl} className="size-14 rounded-full bg-gray-50" />
              <div className="text-base">
                <div className="font-semibold text-gray-900">{left.author.name}</div>
                <div className="mt-1 text-gray-500">{left.author.handle}</div>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Right testimonial */}
        <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
          <figure className="mt-10 flex flex-auto flex-col justify-between">
            <blockquote className="text-lg/8 text-gray-900">
              <p>“{right.body}”</p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img alt="" src={right.author.imageUrl} className="size-14 rounded-full bg-gray-50" />
              <div className="text-base">
                <div className="font-semibold text-gray-900">{right.author.name}</div>
                <div className="mt-1 text-gray-500">{right.author.handle}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-[#FAFAFA] pt-16 pb-15 sm:pt-20 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">What our clients say</h2>
        </div>
        <div className="relative mt-12 lg:h-[32rem] lg:overflow-hidden">
          {/* Layer A */}
          <div
            className={`transition-opacity duration-700 ${visibleLayer === "A" ? "block" : "hidden lg:block"} lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center ${visibleLayer === "A" ? "opacity-100" : "opacity-0"}`}
            aria-hidden={visibleLayer !== "A"}
          >
            {renderPair(indexA)}
          </div>
          {/* Layer B */}
          <div
            className={`transition-opacity duration-700 ${visibleLayer === "B" ? "block" : "hidden lg:block"} lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center ${visibleLayer === "B" ? "opacity-100" : "opacity-0"}`}
            aria-hidden={visibleLayer !== "B"}
          >
            {renderPair(indexB)}
          </div>
        </div>
      </div>
    </section>
  )
}
