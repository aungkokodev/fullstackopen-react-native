import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../theme'
import StatusItem from './StatusItem'

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
    color: theme.textColors.secondary,
    marginVertical: theme.sizes.xs
  },
  repoLang: {
    color: theme.textColors.inverse,
    backgroundColor: theme.colors.primary,
    padding: theme.sizes.xs,
    borderRadius: theme.sizes.xxs
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image src={item.ownerAvatarUrl} style={styles.avatar} />
        <View style={styles.infoSubContainer}>
          <Text style={styles.repoName}>{item.fullName}</Text>
          <Text style={styles.repoDesc}>{item.description}</Text>
          <Text style={styles.repoLang}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <StatusItem counts={item.stargazersCount} name={'Stars'} />
        <StatusItem counts={item.forksCount} name={'Forks'} />
        <StatusItem counts={item.reviewCount} name={'Reviews'} />
        <StatusItem counts={item.ratingAverage} name={'Rating'} />
      </View>
    </View>
  )
}

export default RepositoryItem
