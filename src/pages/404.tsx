import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigation = useNavigate()

  setTimeout(() => {
    navigation('/')
  }, 5000)

  return (
    <div className="flex items-center justify-center w-full h-[100svh] p-5 bg-background animate-[enter__.3s] fade-in zoom-in">
      <div className="w-fit">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">Page not found</p>

        <p className="text-sm text-gray-500">Redirecting in 5 seconds...</p>
      </div>
    </div>
  )
}
