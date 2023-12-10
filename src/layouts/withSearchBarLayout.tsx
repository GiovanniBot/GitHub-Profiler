import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function WithSearchBarLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
