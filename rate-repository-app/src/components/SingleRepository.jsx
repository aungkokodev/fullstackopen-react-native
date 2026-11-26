import { useQuery } from '@apollo/client/react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../graphql/queries'
import theme from '../theme'
import RepositoryView from './RepositoryView'
import ReviewItem from './ReviewItem'

const SingleRepository = () => {
  const { id } = useParams()
  const variables = {
    id,
    first: 3
  }

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  if (loading && !data) return null

  const reviews = data.repository.reviews.edges.map(e => e.node)

  const handleOnEndReached = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) return

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      }
    })
  }

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={<RepositoryView repository={data.repository} />}
      ItemSeparatorComponent={<Separator />}
      onEndReached={handleOnEndReached}
      onEndReachedThreshold={0}
    />
  )
}

export default SingleRepository

const Separator = () => <View style={styles.separator}></View>

const styles = StyleSheet.create({
  separator: {
    height: theme.sizes.md
  }
})
