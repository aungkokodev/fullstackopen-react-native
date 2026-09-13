import { FlatList, StyleSheet, View } from 'react-native'
import useRepositories from '../hooks/useRepositories'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  const { repositories } = useRepositories()

  return <RepositoryListContainer repositories={repositories} />
}

export default RepositoryList

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories }) => {
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.main
  },
  separator: {
    height: theme.sizes.md
  }
})
