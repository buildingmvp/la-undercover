const categories = [
    {
      name: 'Infidelity',
      href: '#',
      imageSrc: 'https://la-undercover.com/wp-content/uploads/2019/02/1-3.png',
      description: 'Our surveillance caught a cheating spouse red-handed within 48 hours.',
    },
    {
      name: 'Child custody',
      href: '#',
      imageSrc: 'https://la-undercover.com/wp-content/uploads/2019/02/CUSTODY-1.jpg',
      description: 'Key evidence we gathered helped a mother win full custody rights.',
    },
    {
      name: 'Marital',
      href: '#',
      imageSrc: 'https://la-undercover.com/wp-content/uploads/2019/02/INFIDELITY.png',
      description: 'We uncovered $2M in hidden assets during bitter divorce proceedings.',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our past cases</h2>
          </div>
  
          <div className="mt-10 sm:mt-12 lg:mt-16">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="group relative flex aspect-square flex-col overflow-hidden rounded-lg p-6"
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
  