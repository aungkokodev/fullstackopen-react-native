import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.textColors.inverse,
    fontWeight: 'bold',
    marginRight: theme.sizes.md
  }
})

const AppBarTab = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>
}

export default AppBarTab
