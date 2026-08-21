import { StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const AppBarTab = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>
}

export default AppBarTab

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: theme.text.inverse
  }
})
