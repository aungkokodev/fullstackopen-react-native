import { Pressable, StyleSheet, Text } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.textColors.inverse
  }
})

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default AppBarTab
