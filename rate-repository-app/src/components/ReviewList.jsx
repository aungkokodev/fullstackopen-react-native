import { useQuery } from '@apollo/client/react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ME } from '../graphql/queries'
import theme from '../theme'
import ReviewItem from './ReviewItem'

const ReviewList = () => {
  const { data, loading, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews: true
    }
  })

  if (loading && !data) return null

  const reviews = data.me?.reviews?.edges?.map(e => e.node)

  return (
    <FlatList
      data={reviews}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ReviewItem review={item} me={true} refetch={refetch} />
      )}
      ItemSeparatorComponent={<Separator />}
    />
  )
}

export default ReviewList

const Separator = () => <View style={styles.separator}></View>

const styles = StyleSheet.create({
  separator: {
    height: theme.sizes.md
  }
})
