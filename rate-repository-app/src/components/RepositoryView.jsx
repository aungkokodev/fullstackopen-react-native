import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'

const RepositoryView = ({ repository }) => {
  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} showBtn={true} />
    </View>
  )
}

export default RepositoryView

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.sizes.md
  }
})
