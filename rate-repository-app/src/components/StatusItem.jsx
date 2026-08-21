import { StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    gap: theme.sizes.xs,
    alignItems: 'center'
  },
  counts: {
    fontWeight: 'bold'
  },
  name: {
    color: theme.textColors.secondary
  }
})

const StatusItem = ({ name, counts }) => {
  const shortenCounts =
    counts < 1000 ? counts : `${(Number(counts) / 1000).toFixed(1)}k`

  return (
    <View style={styles.container}>
      <Text style={styles.counts}>{shortenCounts}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default StatusItem
