import { Home } from '@/pages/Home'
import { Profile } from '@/pages/Profile'
import { Route, Routes } from 'react-router-dom'
import { WithSearchBarLayout } from './layouts/withSearchBarLayout'
import { WithThemeToggleLayout } from './layouts/withThemeToggleLayout'
import { Repository } from './pages/Repository'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<WithThemeToggleLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<WithSearchBarLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/repository" element={<Repository />} />
      </Route>
    </Routes>
  )
}
