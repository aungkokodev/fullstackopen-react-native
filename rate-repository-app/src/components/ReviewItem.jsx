import { format } from 'date-fns'
import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const ReviewItem = ({ review }) => {
  if (!review) return null

  const date = format(review.createdAt, 'dd MMM yyyy')

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.username}>{review.user?.username}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.review}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.primary,
    padding: theme.sizes.md,
    flexDirection: 'row',
    gap: theme.sizes.md
  },
  rating: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 44,
    textAlign: 'center',
    color: theme.colors.primary
  },
  info: {
    flex: 1
  },
  username: {
    fontWeight: 'bold'
  },
  date: {
    fontWeight: 'thin',
    marginTop: theme.sizes.xxs,
    marginBottom: theme.sizes.xs
  },
  review: {
    textAlign: 'justify'
  }
})
