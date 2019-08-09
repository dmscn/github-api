import React, { useContext, useEffect } from 'react'
import { GithubContext, githubActions } from '../../ducks/github'
import { RouteComponentProps, navigate } from '@reach/router'
import apiService from '../../services/apiService'

export interface RepoPageProps extends RouteComponentProps {
  repoId?: string
}

const RepoPage: React.FC<RepoPageProps> = (props: RepoPageProps) => {
  const { repoId } = props
  const { state, dispatch } = useContext(GithubContext)
  const { repos, commits } = state

  let repo: any

  useEffect(() => {
    // @ts-ignore
    repo = repos && repos.find((r: any) => r.id === +repoId)
    if (!repo) navigate(`/404`)

    const getCommits = async () => {
      try {
        const { data } = await apiService.getReposCommit(
          repo.owner.login,
          repo.name
        )
        dispatch(githubActions.loadCommits(data))
      } catch (err) {
        console.error({ err })
        navigate(`/404`)
      }
    }
    getCommits()

    return () => {
      dispatch(githubActions.clearCommits())
    }
  }, [repoId, repos])

  return (
    <>
      <div>Repo Page</div>
      <ul>
        {commits &&
          commits.map((commit: any) => (
            <li key={commit.id}>{commit.commit.message}</li>
          ))}
      </ul>
    </>
  )
}

export default RepoPage
