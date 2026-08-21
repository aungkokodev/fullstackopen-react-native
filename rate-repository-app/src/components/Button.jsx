import { Pressable, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const Button = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    padding: theme.sizes.sm,
    backgroundColor: theme.colors.primary,
    textAlign: 'center',
    color: theme.text.inverse,
    borderRadius: theme.sizes.xs,
    fontWeight: 'bold'
  }
})
