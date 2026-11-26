import { Pressable, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const Button = ({ text, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.xs
  },
  text: {
    padding: theme.sizes.sm,
    textAlign: 'center',
    color: theme.text.inverse,
    fontWeight: 'bold'
  }
})
