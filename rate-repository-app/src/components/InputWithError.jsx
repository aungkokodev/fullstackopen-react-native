import { StyleSheet, TextInput, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const InputWithError = ({ touched, error, ...props }) => {
  const inputStyle = [styles.input, touched && error && styles.border]

  return (
    <View>
      <TextInput {...props} style={inputStyle} />
      {touched && error && <Text style={styles.message}>{error}</Text>}
    </View>
  )
}

export default InputWithError

const styles = StyleSheet.create({
  input: {
    color: theme.text.secondary,
    padding: theme.sizes.sm,
    borderRadius: theme.sizes.xs,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    outlineStyle: 'none'
  },
  border: {
    borderColor: theme.colors.error
  },
  message: {
    fontSize: theme.sizes.sm,
    color: theme.colors.error,
    marginTop: theme.sizes.xs,
    marginLeft: theme.sizes.sm,
    fontStyle: 'italic'
  }
})
