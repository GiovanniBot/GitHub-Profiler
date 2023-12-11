import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { GithubUserProps } from '@/data/types/githubUser'
import { Separator } from '@radix-ui/react-separator'

interface ProfileBioProps {
  githubUserData: GithubUserProps
}

export function ProfileBio({ githubUserData }: ProfileBioProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{githubUserData?.name}</CardTitle>
      </CardHeader>

      <div className="px-6 mb-6">
        <Separator />
      </div>

      <CardContent>
        <p className="text-sm">{githubUserData?.bio}</p>
      </CardContent>
    </Card>
  )
}
