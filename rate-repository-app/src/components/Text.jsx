import { Text as NativeText, StyleSheet } from 'react-native'
import theme from '../theme'

const Text = ({ style, ...props }) => {
  const textStyle = [styles.text, style]

  return <NativeText style={textStyle} {...props} />
}

export default Text

const styles = StyleSheet.create({
  text: {
    color: theme.text.primary,
    fontFamily: theme.fonts.main
  }
})
