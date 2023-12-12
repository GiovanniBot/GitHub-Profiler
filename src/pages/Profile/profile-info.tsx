import { UsersRound } from 'lucide-react'
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
      <Avatar className="w-3/5 md:w-10/12 mx-auto h-auto mb-4 lg:mb-10 z-0">
        <AvatarImage src={githubUserData?.avatar_url} />
        <AvatarFallback>{githubUserData?.name}</AvatarFallback>
      </Avatar>

      <p className="text-lg font-semibold">{githubUserData?.name}</p>
      <p className="text-lg font-light text-slate-400">
        {githubUserData?.login}
      </p>

      <div className="my-2 flex flex-wrap items-center">
        <span className="text-sm font-light flex items-center gap-1">
          <UsersRound className="text-gray-500 dark:text-gray-400" size={15} />
          <span className='font-semibold'>{`${numeral(githubUserData?.followers).format('0a')} `}</span>
          <span>Followers</span>
        </span>
        {' · '}
        <span className="text-sm font-light flex items-center gap-1">
          <span className='font-semibold'>{`${numeral(githubUserData?.following).format('0a')} `}</span>
          <span>Following</span>
        </span>
      </div>

      <Button className="w-3/5 md:w-full my-4 " asChild>
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
