import { Pressable, StyleSheet, Text } from 'react-native'
import { Link } from 'react-router-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.textColors.inverse
  }
})

const AppBarTab = ({ text, to }) => {
  return (
    <Pressable>
      <Link to={to}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab
