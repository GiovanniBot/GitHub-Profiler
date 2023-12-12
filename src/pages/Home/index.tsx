import Logo from '@/assets/logo.svg?react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearchUserHook } from '@/hooks/useSearchUserHook'

export function Home() {
  const { isLoading, handleSubmit } = useSearchUserHook()

  return (
    <div className="flex items-center justify-center w-full h-[100svh] p-5 bg-background animate-[enter__.3s] fade-in zoom-in">
      <div className="w-full sm:w-fit">
        <Logo className="w-full ml-2 xs:ml-4 sm:w-fit dark:invert mb-8" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <Input
            disabled={isLoading}
            required
            name="githubUser"
            pattern=".*\S+.*"
            title="Please enter at least one non-whitespace character"
            type="search"
            placeholder="search for a github user..."
            className='text-base'
          />
          <Button type="submit" disabled={isLoading}>
            Search
          </Button>
        </form>
      </div>
    </div>
  )
}
