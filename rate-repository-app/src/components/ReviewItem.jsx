import { useMutation } from '@apollo/client/react'
import { format } from 'date-fns'
import { Alert, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { DELETE_REVIEW } from '../graphql/mutations'
import theme from '../theme'
import Button from './Button'
import Text from './Text'

const ReviewItem = ({ review, me = false, refetch }) => {
  const [mutate] = useMutation(DELETE_REVIEW)
  const navigate = useNavigate()

  if (!review) return null

  const date = format(review.createdAt, 'dd MMM yyyy')

  const handleView = () => {
    navigate(`/repositories/${review.repositoryId}`)
  }

  const handleDelete = () => {
    Alert.alert(
      'Delete reveiw',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => {}
        },
        {
          text: 'Delete',
          onPress: async () => {
            await mutate({
              variables: {
                id: review.id
              }
            })
            refetch()
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.username}>
            {me ? review?.repository?.fullName : review.user?.username}
          </Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.review}>{review.text}</Text>
        </View>
      </View>
      {me && (
        <View style={styles.btnGroup}>
          <Button
            text={'View repository'}
            onPress={handleView}
            style={styles.btn}
          />
          <Button
            text={'Delete review'}
            onPress={handleDelete}
            style={[styles.btn, styles.deleteBtn]}
          />
        </View>
      )}
    </View>
  )
}

export default ReviewItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.primary,
    padding: theme.sizes.md,
    gap: theme.sizes.md
  },
  box: {
    flexDirection: 'row',
    gap: theme.sizes.md
  },
  rating: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    fontSize: 20,
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
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.sizes.md
  },
  btn: {
    flex: 1
  },
  deleteBtn: {
    backgroundColor: 'red'
  }
})
