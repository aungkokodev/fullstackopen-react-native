import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const StatusItem = ({ name, counts, testID }) => {
  const shortenCounts =
    counts < 1000 ? counts : `${(Number(counts) / 1000).toFixed(1)}k`

  return (
    <View style={styles.container}>
      <Text style={styles.counts} testID={testID}>
        {shortenCounts}
      </Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default StatusItem

const styles = StyleSheet.create({
  container: {
    gap: theme.sizes.xs,
    alignItems: 'center'
  },
  counts: {
    fontWeight: 'bold'
  },
  name: {
    color: theme.text.secondary
  }
})
