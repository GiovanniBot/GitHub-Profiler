import { FetchError, api } from '@/services/api'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface UseSearchUserHook {
  onSuccess?: () => void
}

export function useSearchUserHook({ onSuccess }: UseSearchUserHook = {}) {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigate()

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)

      const formData = new FormData(e.currentTarget)
      const githubUserInputValue = `${formData.get('githubUser')}`.trim()

      if (!githubUserInputValue || isLoading) {
        return
      }

      try {
        const githubUser = await api(
          `https://api.github.com/users/${githubUserInputValue}`
        )

        navigation(`/profile/${githubUser.login}`, {
          state: { githubUser },
        })

        onSuccess?.()
      } catch (err: unknown) {
        if (err instanceof FetchError) {
          toast.error(err.message)
        } else {
          toast.error('An unexpected error has occurred')
        }
      }

      setIsLoading(false)
    },
    [isLoading, navigation, onSuccess]
  )

  return {
    isLoading,
    handleSubmit,
  }
}
