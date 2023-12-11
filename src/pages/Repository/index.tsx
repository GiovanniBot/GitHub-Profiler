import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { RepositoryProps } from '@/data/types/githubUserRepository'
import { api } from '@/services/api'
import numeral from 'numeral'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'

type RepositoryParams = {
  owner?: string
  repoName?: string
}

export function Repository() {
  const { owner, repoName } = useParams<RepositoryParams>()
  const navigate = useNavigate()
  const { data: githubRepositoryData, isLoading } = useSWR<RepositoryProps>(
    `https://api.github.com/repos/${owner}/${repoName}`,
    api
  )

  if (!githubRepositoryData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-semibold">
          {isLoading ? 'Loading...' : 'Repository not found'}
        </p>
      </div>
    )
  }

  return (
    <div className="p-10 md:max-w-7xl flex md:mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <div className="flex flex-col pr-4">
                <span>{githubRepositoryData?.name}</span>
                <span className="text-base font-light text-slate-400">
                  <Button
                    className="bg-transparent hover:bg-transparent p-0"
                    variant="ghost"
                    onClick={() => navigate(`/profile/${owner}`)}
                  >
                    {owner}
                  </Button>
                  /{repoName}
                </span>
              </div>

              <Button asChild>
                <a
                  href={githubRepositoryData?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to repository
                </a>
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        {githubRepositoryData?.description && (
          <CardContent>
            <span className="text-sm font-light">
              {`${numeral(githubRepositoryData?.stargazers_count).format(
                '0a'
              )} `}
              <strong className="font-semibold">Stars</strong>
            </span>
            {' · '}
            <span className="text-sm font-light">
              {`${githubRepositoryData?.language} `}
              <strong className="font-semibold">Language</strong>
            </span>

            <Separator className="my-4" />

            <p className="text-lg">{githubRepositoryData?.description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
