import { useParams } from 'react-router-dom'

export function Profile() {
  const { userName } = useParams<'userName'>()

  return (
    <div>
      <h1>Profile: {userName}</h1>
    </div>
  )
}
