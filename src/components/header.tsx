import Logo from '@/assets/logo.svg?react'
import { useSearchUserHook } from '@/hooks/useSearchUserHook'
import { CornerDownLeft, Search } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Header() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const { isLoading, handleSubmit } = useSearchUserHook({
    onSuccess: () => {
      if (inputRef.current) {
        inputRef.current.value = ''
        inputRef.current.blur()
      }
    },
  })

  return (
    <div className="flex w-full p-5 h-14 items-center justify-between sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-6 z-10">
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <Logo className="dark:invert h-10 w-fit" />
      </div>

      <div className="flex gap-3">
        <form
          onSubmit={handleSubmit}
          className="border rounded-md flex items-center px-3"
        >
          <label htmlFor="githubUser" className="cursor-pointer">
            <Search className="text-gray-500 dark:text-gray-400" size={18} />
          </label>
          <Input
            ref={inputRef}
            disabled={isLoading}
            className="focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none rounded-none h-5 bg-transparent"
            required
            placeholder="Search for a user"
            type="search"
            id="githubUser"
            name="githubUser"
            pattern=".*\S+.*"
            title="Please enter at least one non-whitespace character"
          />
          <Button
            className="bg-transparent p-0 hover:bg-transparent"
            type="submit"
            disabled={isLoading}
          >
            <CornerDownLeft
              className="text-gray-500 dark:text-gray-400"
              size={18}
            />
          </Button>
        </form>
        <ThemeToggle />
      </div>
    </div>
  )
}
