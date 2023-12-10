import { Home } from '@/pages/Home'
import { Profile } from '@/pages/Profile'
import { Route, Routes } from 'react-router-dom'
import { Repository } from './pages/Repository'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/repository" element={<Repository />} />
    </Routes>
  )
}
