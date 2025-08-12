const stats = [
  { id: 1, name: 'Missing Persons Found', value: '255' },
  { id: 2, name: 'Satisfied Clients', value: '100%' },
  { id: 3, name: 'U.S. States We Cover', value: '50' },
  { id: 4, name: 'Successful Case Outcomes in 2024', value: '1335+' },
]

export default function Example() {
  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">We get the work done</h2>
        </div>
        <dl className="mx-auto mt-20 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
