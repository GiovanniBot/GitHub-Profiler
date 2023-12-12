import logoSVG from '@/assets/logo.svg'
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
    <div className='flex items-center mx-auto py-5 md:py-3 w-11/12'>

      <div className='cursor-pointer justify-self-start w-[200px]' onClick={() => navigate('/')}>
        <img src={logoSVG} alt="Logo" className='dark:invert' />
      </div>

      <div className='flex items-center ms-auto gap-1 xs:gap-4'>
        <div>
          
          <form
              onSubmit={handleSubmit}
              className="border rounded-md flex items-center px-3 h-10"
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
              className="bg-transparent p-0 hover:bg-transparent hidden xs:block"
              type="submit"
              disabled={isLoading}
            >
              <CornerDownLeft
                className="text-gray-500 dark:text-gray-400"
                size={18}
              />
            </Button>

          </form>

        </div>

        <div className='hidden xs:block'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
