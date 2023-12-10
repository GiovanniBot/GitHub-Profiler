import Logo from '@/assets/logo.svg?react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FetchError, api } from '@/services/api'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

export function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)

      const formData = new FormData(e.currentTarget)
      const githubUserInputValue = formData.get('githubUser') as string

      if (!githubUserInputValue || isLoading) {
        return
      }

      try {
        const githubUser = await api(
          `https://api.github.com/users/${githubUserInputValue}`
        )

        console.log(githubUser)
      } catch (err: unknown) {
        if (err instanceof FetchError) {
          toast.error(err.message)
        } else {
          toast.error('An unexpected error has occurred')
        }
      }

      setIsLoading(false)
    },
    [isLoading]
  )

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-5 bg-background animate-[enter__.3s] fade-in zoom-in">
      <div>
        <Logo className="ml-4 dark:invert" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 md:flex-row"
        >
          <Input
            disabled={isLoading}
            required
            name="githubUser"
            pattern=".*\S+.*"
            title="Please enter at least one non-whitespace character"
            type="search"
            placeholder="search for a github user..."
          />
          <Button type="submit" disabled={isLoading}>
            Search
          </Button>
        </form>
      </div>
    </div>
  )
}
