import { GithubUserProps } from './githubUser'

export interface RepositoryMetadataProps {
  node_id: string
  name: string
  stargazers_count: number
  html_url: string
  owner: GithubUserProps
}

export interface RepositoryProps extends RepositoryMetadataProps {
  description?: string
  language?: string
}
