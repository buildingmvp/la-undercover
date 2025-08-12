const navigation = {
  navLeft: [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Our Cases', href: '#' },
  ],
  navRight: [
    { name: 'About Us', href: '#' },
    { name: 'Our People', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}

export default function SectionsFooters4ColumnWithCompanyMissionOnDark() {
  return (
    <footer className="bg-black mx-4 sm:mx-6 lg:mx-8 mt-6 rounded-t-2xl">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Mission */}
          <div className="space-y-8">
            <img
              alt="LA Undercover"
              src="https://i.imgur.com/B0CZtGq.png"
              className="h-8 w-auto"
            />
            <p className="text-sm/6 text-balance text-gray-400">
              We take each and every case personal. Our investigative team is hand selected and we
              pride ourselves on not only getting results but assisting in changing peoples lives.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm/6 font-semibold text-white">Get in Touch</h3>
            <div className="mt-6 space-y-2 text-gray-400">
              <p className="text-sm/6">Marc J. Tropeano PI</p>
              <p className="text-sm/6">LA Undercover</p>
              <p className="text-sm/6">310.310.4884</p>
              <p className="text-sm/6">marc@la-undercover.com</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-16 xl:mt-0">
            <h3 className="text-sm/6 font-semibold text-white">LA Undercover PI</h3>
            <div className="mt-6 grid grid-cols-2 gap-8">
              <ul role="list" className="space-y-4">
                {navigation.navLeft.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm/6 text-gray-400 hover:text-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul role="list" className="space-y-4">
                {navigation.navRight.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm/6 text-gray-400 hover:text-gray-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">&copy; 2025 LA Undercover. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
