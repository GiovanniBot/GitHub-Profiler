import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GithubUserProps } from '@/data/types/githubUser'
import { RepositoryMetadataProps } from '@/data/types/githubUserRepository'
import { api } from '@/services/api'
import { useLocation, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { ProfileBio } from './profile-bio'
import { ProfileInfo } from './profile-info'
import { ProfileRepositories } from './profile-repositories'

export function Profile() {
  const { userName } = useParams<'userName'>()
  const { state } = useLocation()
  const { data: githubUserData, isLoading: githubUserDataIsLoading } =
    useSWR<GithubUserProps>(`https://api.github.com/users/${userName}`, api, {
      fallbackData: state?.githubUserData,
    })
  const { data: githubUserReposData, isLoading: githubUserReposDataIsLoading } =
    useSWR<RepositoryMetadataProps[]>(
      `https://api.github.com/users/${userName}/repos`,
      api
    )

  if (!githubUserData || !githubUserReposData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-semibold">
          {githubUserDataIsLoading || githubUserReposDataIsLoading
            ? 'Loading...'
            : 'User not found'}
        </p>
      </div>
    )
  }

  return (
    <div className="p-10 md:max-w-7xl md:mx-auto md:grid md:grid-cols-4 justify-center gap-5">
      <ProfileInfo githubUserData={githubUserData} />

      <div className="col-span-3 gap-4 flex flex-col">
        {githubUserData?.bio && <ProfileBio githubUserData={githubUserData} />}

        <Card>
          <CardHeader>
            <CardTitle>Repositories</CardTitle>
          </CardHeader>

          <CardContent>
            <ProfileRepositories
              githubUserReposData={githubUserReposData}
              initialSortingState={[
                {
                  id: 'stargazers_count',
                  desc: true,
                },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
