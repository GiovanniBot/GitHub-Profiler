import { api } from '@/services/api'
import { useLocation, useParams } from 'react-router-dom'
import useSWR from 'swr'

export function Profile() {
  const { userName } = useParams<'userName'>()
  const { state } = useLocation()
  const { data } = useSWR(`https://api.github.com/users/${userName}`, api, {
    fallbackData: state?.githubUser,
  })

  console.log(data)

  return (
    <div>
      <h1>Profile: {userName}</h1>
    </div>
  )
}
