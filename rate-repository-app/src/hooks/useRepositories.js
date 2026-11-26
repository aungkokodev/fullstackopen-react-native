import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data, previousData, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword
    }
  })

  return {
    repositories: data?.repositories ?? previousData?.repositories,
    loading,
    refetch
  }
}

export default useRepositories
