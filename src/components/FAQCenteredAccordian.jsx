import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Our investigators are state-licensed and fully insured. We follow all applicable laws and industry best practices on every case.',
  },
  {
    question: 'What types of cases do you handle?',
    answer:
      'Corporate security and securities-related inquiries, surveillance, skip tracing/locates, undercover operations, service of process, and marital/domestic matters (infidelity, custody, cohabitation). We also conduct background checks, due diligence, and workplace investigations.',
  },
  {
    question: 'Is surveillance legal and how is it conducted?',
    answer:
      'Yes, when performed by licensed professionals from public vantage points and without trespassing or illegal recording. We use discreet vehicles, optics, and time-stamped photo/video to document activities.',
  },
  {
    question: 'What can a private investigator NOT do?',
    answer:
      'We cannot trespass, wiretap without consent, impersonate law enforcement, hack accounts/devices, or access restricted records without lawful authorization. We work within the law to protect your case.',
  },
  {
    question: 'How does skip tracing work and what do you need from me?',
    answer:
      'We combine databases, OSINT, records research, and field verification to locate individuals. Helpful inputs include full name, last known addresses, DOB, phone numbers, social handles, and any relevant documents.',
  },
  {
    question: 'What is undercover work and when is it appropriate?',
    answer:
      'Undercover assignments involve discreetly integrating into an environment to collect information. We evaluate risks, legality, and ethics, and proceed only with clear objectives and written authorization.',
  },
  {
    question: 'How does service of process work—especially for hard-to-serve individuals?',
    answer:
      'We verify identity, plan optimal windows, use lawful ruses when permitted, and attempt service at varied times/locations. You receive a notarized Proof of Service with details of each attempt.',
  },
  {
    question: 'Do you handle corporate security, compliance, and securities-related matters?',
    answer:
      'Yes. We conduct due diligence, executive/background vetting, internal inquiries, fraud and asset-misuse reviews, and regulatory-focused fact finding—always maintaining confidentiality and chain of custody.',
  },
]

export default function Example() {
  return (
    <div className="bg-[white]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
