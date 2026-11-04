import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
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
  const navigate = useNavigate()

  const repositoryNodes =
    repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
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
