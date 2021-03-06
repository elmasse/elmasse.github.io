import { formatWithOptions } from 'date-fns/fp'
import { enUS } from 'date-fns/locale'

export default function Header({ title, subtitle, meta: { date, readingTime } = {} }) {
  return (
    <div className='flex items-center justify-center py-20 md:py-48'>
      <div className='flex-1 px-4 space-y-6'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight font-extrabold text-gray-900 dark:text-gray-100 border-action border-l-8 pl-8'>
          {title}
        </h1>
        <div className='pl-8 space-y-4'>
          <p className='text-2xl text-gray-900 dark:text-gray-100'>{subtitle}</p>
          <p className='text-sm text-gray-500 dark:text-gray-300 '>
          { formatWithOptions({ locale: enUS }, 'MMM d, yyyy')(new Date(date))} · {readingTime} min read
          </p>
        </div>
      </div>
    </div>
  )
}
