import { Image, StyleSheet, View } from 'react-native'
import theme from '../theme'
import StatusItem from './StatusItem'
import Text from './Text'

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID='repositoryItem'>
      <View style={styles.infoContainer}>
        <Image src={item.ownerAvatarUrl} style={styles.avatar} />
        <View style={styles.infoSubContainer}>
          <Text style={styles.repoName} testID='fullName'>
            {item.fullName}
          </Text>
          <Text style={styles.repoDesc} testID='description'>
            {item.description}
          </Text>
          <Text style={styles.repoLang} testID='language'>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <StatusItem
          counts={item.stargazersCount}
          name={'Stars'}
          testID='stargazersCount'
        />
        <StatusItem
          counts={item.forksCount}
          name={'Forks'}
          testID='forksCount'
        />
        <StatusItem
          counts={item.reviewCount}
          name={'Reviews'}
          testID='reviewCount'
        />
        <StatusItem
          counts={item.ratingAverage}
          name={'Rating'}
          testID='ratingAverage'
        />
      </View>
    </View>
  )
}

export default RepositoryItem

const styles = StyleSheet.create({
  container: {
    padding: theme.sizes.md,
    backgroundColor: theme.backgrounds.primary,
    gap: theme.sizes.md
  },
  infoContainer: {
    flexDirection: 'row',
    gap: theme.sizes.md
  },
  infoSubContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  avatar: {
    width: theme.sizes.xxxl,
    height: theme.sizes.xxxl,
    borderRadius: theme.sizes.xs
  },
  repoName: {
    fontWeight: 'bold'
  },
  repoDesc: {
    color: theme.text.secondary,
    marginVertical: theme.sizes.xs
  },
  repoLang: {
    color: theme.text.inverse,
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.xs,
    borderRadius: theme.sizes.xxs
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
