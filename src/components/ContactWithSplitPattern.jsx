import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="bg-white pt-16 sm:pt-24 pb-0">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div
          className="relative overflow-hidden rounded-2xl bg-black bg-cover bg-center py-12 sm:py-16 lg:py-20"
          style={{ backgroundImage: 'url("https://cdn.midjourney.com/e7c2c630-92d3-41ad-bd44-b6eb1246c0e0/0_0.jpeg")' }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 to-black" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-8">
            <div className="p-10 sm:p-12 lg:p-16 text-white">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Get your situation looked into
              </h2>
              <p className="mt-6 text-lg/8 text-neutral-300">
                Reach out to our licensed private investigator firm to discuss your situation confidentially.
                Share a few details and our team will get back to you promptly with next steps.
              </p>
              <div className="mt-10 space-y-6 text-base/7 text-neutral-300">
                <p>Marc J. Tropeano PI</p>
                <p>
                  <a href="tel:13103104884" className="text-neutral-300 hover:text-neutral-200">
                    310.310.4884
                  </a>
                </p>
                <p>
                  <a href="mailto:marc@la-undercover.com" className="text-neutral-300 hover:text-neutral-200">
                    marc@la-undercover.com
                  </a>
                </p>
              </div>
            </div>
            </div>

            <form action="#" method="POST" className="my-8 sm:my-12 lg:my-16 bg-white rounded-xl px-10 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#AC7B43]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#AC7B43]"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#AC7B43]"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#AC7B43]"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#AC7B43]"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#AC7B43] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#d09a54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AC7B43]"
                >
                  Send message
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
