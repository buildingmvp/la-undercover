'use client'

import { useState } from 'react'

const people = [
  {
    name: 'Marc J. Tropeano',
    role: 'Private Investigator — 15+ years leading complex surveillance and fraud cases.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2024/02/MEEEE.png?resize=602%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sofia B.',
    role: 'Investigative Assistant — Provides OSINT research and case coordination support.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_127_2361019722.jpg?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Maria G.',
    role: 'Missing Persons — Specializes in rapid-trace locates and reunifications across states.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_115_9210453505.jpg?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Michael B.',
    role: 'Mayor of Judgements — Leads judgment recovery with strategic asset discovery and enforcement.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_164_7123400865.png?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alexander S.',
    role: 'The Head Hunter — Expert in skip tracing and locating hard-to-find individuals.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_124_4954165032.jpg?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mark G.',
    role: 'Undercover — Experienced in covert assignments and discreet evidence gathering.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_136_5041138491.png?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Vinny T.',
    role: 'Undercover — Blends seamlessly in the field to document sensitive activities.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_146_6250954910.png?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Aira P.',
    role: 'Undercover — Conducts undercover interviews and gathers on-site intelligence.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/imageedit_158_3264763233.jpg?resize=599%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Christian R.',
    role: 'Undercover — Focused on surveillance technology and long-form documentation.',
    imageUrl:
      'https://i0.wp.com/la-undercover.com/wp-content/uploads/2019/02/rory.png?resize=597%2C500&ssl=1',
    xUrl: '#',
    linkedinUrl: '#',
  },
]
  
  export default function SectionsTeamSectionsWithLargeImages() {
    const [visibleCount, setVisibleCount] = useState(6)

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Your world-class investigative team is ready</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Experienced, discreet, and results-driven. Our licensed investigators combine field expertise with modern
              intelligence to protect your interests, preserve your privacy, and deliver clear answers — confidentially
              and on time.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="rounded-md bg-[#AC7B43] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#d09a54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BC8749]"
              >
                Contact us
              </a>
            </div>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.slice(0, visibleCount).map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="aspect-[4/3] w-full rounded-2xl object-cover object-top" />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">X</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
          {visibleCount < people.length && (
            <div className="mt-10">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, people.length))}
                className="text-base font-semibold underline text-gray-400"
                aria-expanded={visibleCount >= people.length}
              >
                See more team members
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
  