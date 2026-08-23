import { useQuery } from '@apollo/client/react'
import { useState } from 'react'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const [repositories, setRepositories] = useState()

  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  return { repositories: data?.repositories, loading, refetch }
}

export default useRepositories
