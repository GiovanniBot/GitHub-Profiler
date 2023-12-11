import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { GithubUserProps } from '@/data/types/githubUser'
import numeral from 'numeral'

interface ProfileInfoProps {
  githubUserData: GithubUserProps
}

export function ProfileInfo({ githubUserData }: ProfileInfoProps) {
  return (
    <div className="col-span-1 flex flex-col items-center md:items-start">
      <Avatar className="w-3/5 h-auto my-1 z-0">
        <AvatarImage src={githubUserData?.avatar_url} />
        <AvatarFallback>{githubUserData?.name}</AvatarFallback>
      </Avatar>

      <p className="text-lg font-semibold">{githubUserData?.name}</p>
      <p className="text-lg font-light text-slate-400">
        {githubUserData?.login}
      </p>

      <div className="my-2">
        <span className="text-sm font-light">
          {`${numeral(githubUserData?.followers).format('0a')} `}
          <strong className="font-semibold">Followers</strong>
        </span>
        {' · '}
        <span className="text-sm font-light">
          {`${numeral(githubUserData?.following).format('0a')} `}
          <strong className="font-semibold"> Following</strong>
        </span>
      </div>

      <Button className="w-full my-3">
        <a
          href={githubUserData?.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit profile
        </a>
      </Button>
    </div>
  )
}
