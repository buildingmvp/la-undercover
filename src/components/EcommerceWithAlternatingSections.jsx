const categories = [
  {
    name: 'Corporate securities',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/befc1a35-dbdf-4212-927c-55146242ff8a/0_0.jpeg',
    description: 'Protecting corporate assets and uncovering internal fraud.',
  },
  {
    name: 'Surveillance',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/01528373-1cf6-4e45-823c-eba170b7f2a8/0_0.jpeg',
    description: 'Discreet observation to document activity and evidence.',
  },
  {
    name: 'Skip tracing',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/aab49ed7-ff71-4846-94e8-072045d36b72/0_0.jpeg',
    description: 'Locating hard-to-find individuals using research and fieldwork.',
  },
  {
    name: 'Undercover',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/cd5488ab-456d-469f-98a4-68cd0eaa57ed/0_0.jpeg',
    description: 'Covert placement to expose internal theft or misconduct.',
  },
  {
    name: 'Service of process',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/7c49619c-743d-4cb3-a743-aa0b0008d55b/0_1.jpeg',
    description: 'Serving legal documents promptly, properly, and verifiably.',
  },
  {
    name: 'Martial/domestic',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/ed539c1c-da3d-405b-ac41-e27a1d1c7dc4/0_0.jpeg',
    description: 'Domestic and relationship investigations: infidelity, custody, safety.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our specialty services</h2>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16">
          <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="group relative flex h-72 flex-col overflow-hidden rounded-lg p-6"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img
                      alt=""
                      src={category.imageSrc}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-black/40 to-transparent"
                  />
                  <span className="relative mt-auto text-left text-white">
                    <div className="text-xl font-bold text-left px-2 sm:px-0">{category.name}</div>
                    {category.description && (
                      <div className="mt-1 px-2 sm:px-0 text-left text-sm text-gray-200">{category.description}</div>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
