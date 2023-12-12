import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { RepositoryProps } from '@/data/types/githubUserRepository'
import { api } from '@/services/api'
import { ExternalLink } from 'lucide-react'
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
    <div className="p-4 xs:px-8 md:px-10 md:max-w-7xl flex md:mx-auto">
      <Card className="w-full">
        <CardHeader>
            <div className="flex justify-between">
              <div className="flex flex-col pr-4 w-2/3">
                <span className="break-words">
                  {githubRepositoryData?.name}
                </span>
              </div>

              <Button className="w-14" asChild>
                <a
                  href={githubRepositoryData?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="text-slate-700 w-4 h-4" />
                </a>
              </Button>
            </div>

            <span className="text-base font-light text-slate-400 break-words">
              <Button
                className="bg-transparent hover:bg-transparent p-0 h-fit"
                variant="ghost"
                onClick={() => navigate(`/profile/${owner}`)}
              >
                <span>{owner}</span>
              </Button>
              /{repoName}
            </span>
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
