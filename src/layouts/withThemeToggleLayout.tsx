import { ThemeToggle } from '@/components/theme-toggle'
import { Outlet } from 'react-router-dom'

export function WithThemeToggleLayout() {
  return (
    <>
      <div className='w-full absolute z-10'>
        <div className="flex items-center mx-auto mt-5 md:mt-3 w-11/12 z-10 relative">
          <div className='flex items-center ms-auto gap-1 xs:gap-4'>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
