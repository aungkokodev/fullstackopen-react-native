import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useNavigate } from 'react-router-native'
import { useDebounce } from 'use-debounce'
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
  const [filter, setFilter] = useState('')
  const [searchKeyword] = useDebounce(filter, 500)
  const { repositories, loading, fetchMore } = useRepositories({
    ...SORT_OPTIONS[sort],
    searchKeyword,
    first: 5
  })

  if (loading && !repositories) return null

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReached={fetchMore}
      sort={sort}
      setSort={setSort}
      filter={filter}
      setFilter={setFilter}
    />
  )
}

export default RepositoryList

const ItemSeparator = () => <View style={styles.separator} />

const ListHeader = ({ sort, setSort, filter, setFilter }) => (
  <View style={styles.listHeader}>
    <Searchbar
      value={filter}
      onChangeText={setFilter}
      placeholder={'Search...'}
      style={styles.searchBar}
    />
    <Picker selectedValue={sort} onValueChange={setSort}>
      <Picker.Item label='Latest repositories' value={'latest'} />
      <Picker.Item label='Highest rated repositories' value={'highest'} />
      <Picker.Item label='Lowest rated repositories' value={'lowest'} />
    </Picker>
  </View>
)

export const RepositoryListContainer = ({
  repositories,
  onEndReached,
  sort,
  setSort,
  filter,
  setFilter
}) => {
  const navigate = useNavigate()

  const repositoryNodes =
    repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={
        <ListHeader
          sort={sort}
          setSort={setSort}
          filter={filter}
          setFilter={setFilter}
        />
      }
      ItemSeparatorComponent={ItemSeparator}
      style={styles.container}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
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
  listHeader: {
    paddingHorizontal: theme.sizes.md
  },
  searchBar: {
    backgroundColor: theme.backgrounds.primary,
    marginTop: theme.sizes.md
  }
})
