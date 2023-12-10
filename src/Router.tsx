import { Home } from '@/pages/Home'
import { Profile } from '@/pages/Profile'
import { Route, Routes } from 'react-router-dom'
import { WithSearchBarLayout } from './layouts/withSearchBarLayout'
import { Repository } from './pages/Repository'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<WithSearchBarLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/repository" element={<Repository />} />
      </Route>
    </Routes>
  )
}
