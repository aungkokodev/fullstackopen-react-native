import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import useRepositories from '../hooks/useRepositories'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'

const SORT_OPTIONS = {
  latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highest: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }
}

const RepositoryList = () => {
  const [sort, setSort] = useState('latest')
  const { repositories } = useRepositories(SORT_OPTIONS[sort])

  return (
    <RepositoryListContainer
      repositories={repositories}
      sort={sort}
      setSort={setSort}
    />
  )
}

export default RepositoryList

const ItemSeparator = () => <View style={styles.separator} />

const SortComponent = ({ sort, setSort }) => (
  <View style={styles.sortContainer}>
    <Picker selectedValue={sort} onValueChange={setSort}>
      <Picker.Item label='Latest repositories' value={'latest'} />
      <Picker.Item label='Highest rated repositories' value={'highest'} />
      <Picker.Item label='Lowest rated repositories' value={'lowest'} />
    </Picker>
  </View>
)

export const RepositoryListContainer = ({ repositories, sort, setSort }) => {
  const navigate = useNavigate()

  const repositoryNodes =
    repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      ListHeaderComponent={<SortComponent sort={sort} setSort={setSort} />}
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
  },
  sortContainer: {
    paddingHorizontal: theme.sizes.md
  }
})
