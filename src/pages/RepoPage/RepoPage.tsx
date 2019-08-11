import React, { useContext, useEffect, useState, useRef } from 'react'
import { GithubContext, githubActions } from '../../ducks/github'
import { RouteComponentProps, navigate } from '@reach/router'

import apiService from '../../services/apiService'

import Text from '../../components/Text'
import Box from '../../components/Box'
import LoadingIcon from '../../components/LoadingIcon'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Commits from './Commits'

export interface RepoPageProps extends RouteComponentProps {
  repoId?: string
}

const RepoPage: React.FC<RepoPageProps> = (props: RepoPageProps) => {
  const { repoId } = props

  const { state, dispatch } = useContext(GithubContext)
  const { repos, commits } = state

  const [isLoading, toggleLoading] = useState(true)
  const [filteredCommits, setFilteredCommits] = useState(commits)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const getCommits = async () => {
      // @ts-ignore
      const repo = repos && repos.find((r: any) => r.id === +repoId)
      try {
        const { data } = await apiService.getReposCommit(
          repo.owner.login,
          repo.name
        )
        toggleLoading(false)
        setFilteredCommits(data)
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
  }, [dispatch, isLoading, repoId, repos])

  const filterCommits = (event: React.FormEvent) => {
    event.preventDefault()
    const term = inputRef.current && inputRef.current.value
    const commitsContainingTerm = commits.filter(({ commit }: any) => {
      return commit.message.includes(term)
    })
    setFilteredCommits(commitsContainingTerm)
  }

  return (
    <Box center width="100vw" height="100vh" column>
      <form onSubmit={filterCommits}>
        <Box marginVertical={10}>
          <Input
            ref={inputRef}
            onChange={filterCommits}
            id="search"
            name="search"
            placeholder="Search for a specific commit"
          />
          <Box marginHorizontal={10}>
            <Button>Search</Button>
          </Box>
        </Box>
      </form>
      <Text bold>Latest commits from the repository</Text>
      {isLoading ? <LoadingIcon /> : <Commits commits={filteredCommits} />}
    </Box>
  )
}

export default RepoPage
