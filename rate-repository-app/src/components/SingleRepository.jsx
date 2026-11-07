import { useQuery } from '@apollo/client/react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../graphql/queries'
import theme from '../theme'
import RepositoryView from './RepositoryView'
import ReviewItem from './ReviewItem'

const SingleRepository = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      id
    }
  })

  if (loading) return null

  const reviews = data.repository.reviews.edges.map(e => e.node)

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={<RepositoryView repository={data.repository} />}
      ItemSeparatorComponent={<Separator />}
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
