import { ThemeToggle } from '@/components/theme-toggle'
import { Outlet } from 'react-router-dom'

export function WithThemeToggleLayout() {
  return (
    <div>
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <Outlet />
    </div>
  )
}
