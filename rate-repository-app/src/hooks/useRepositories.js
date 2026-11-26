import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = variables => {
  const { data, previousData, loading, refetch, fetchMore, ...result } =
    useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables
    })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    })
  }

  return {
    repositories: data?.repositories ?? previousData?.repositories,
    loading,
    refetch,
    fetchMore: handleFetchMore,
    ...result
  }
}

export default useRepositories
