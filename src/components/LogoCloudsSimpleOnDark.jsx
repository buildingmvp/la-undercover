export default function SectionsLogoCloudsSimpleOnDark({ className = "", logoClassName = "max-h-8" }) {
  return (
    <div className={`py-8 ${className}`}>
      <div className="mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto w-full grid grid-cols-4 items-center gap-x-10 gap-y-10 sm:grid-cols-6 lg:mx-0 lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://la-undercover.com/wp-content/uploads/2020/09/imageedit_409_2950022997.png"
            width={158}
            height={48}
            className={`col-span-2 w-full object-contain lg:col-span-1 ${logoClassName}`}
          />
          <img
            alt="Reform"
            src="https://la-undercover.com/wp-content/uploads/2020/09/imageedit_423_3322851009.png"
            width={158}
            height={48}
            className={`col-span-2 w-full object-contain lg:col-span-1 ${logoClassName}`}
          />
          <img
            alt="Tuple"
            src="https://i0.wp.com/la-undercover.com/wp-content/uploads/2020/09/imageedit_468_5594128029.png?fit=220%2C120&ssl=1"
            width={158}
            height={48}
            className={`col-span-2 w-full object-contain lg:col-span-1 ${logoClassName}`}
          />
          <img
            alt="SavvyCal"
            src="https://i0.wp.com/la-undercover.com/wp-content/uploads/2020/09/imageedit_466_6195642757.png?fit=220%2C120&ssl=1"
            width={158}
            height={48}
            className={`col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1 ${logoClassName}`}
          />
          <img
            alt="Statamic"
            src="https://coachmikeblogs.com/wp-content/uploads/2016/09/cnn-logo-white.png"
            width={158}
            height={48}
            className={`col-span-2 col-start-2 w-full object-contain sm:col-start-auto lg:col-span-1 ${logoClassName}`}
          />
        </div>
      </div>
    </div>
  )
}
  