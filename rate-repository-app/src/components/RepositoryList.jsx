import { FlatList, StyleSheet, View } from 'react-native'
import useRepositories from '../hooks/useRepositories'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories } = useRepositories()

  const repositoryNodes =
    repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      style={styles.container}
    />
  )
}

export default RepositoryList

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.main
  },
  separator: {
    height: theme.sizes.md
  }
})
