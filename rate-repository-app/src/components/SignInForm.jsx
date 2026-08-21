import { useFormik } from 'formik'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: theme.sizes.md,
    gap: theme.sizes.md
  },
  input: {
    color: theme.textColors.secondary,
    padding: theme.sizes.sm,
    borderRadius: theme.sizes.xs,
    borderWidth: 2,
    borderColor: theme.colors.secondary
  },
  button: {
    padding: theme.sizes.sm,
    backgroundColor: theme.colors.primary,
    textAlign: 'center',
    color: theme.textColors.inverse,
    borderRadius: theme.sizes.xs,
    fontWeight: 'bold'
  }
})

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        value={formik.values.username}
        onChange={formik.handleChange('username')}
        placeholder='Username'
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        value={formik.values.password}
        onChange={formik.handleChange('password')}
        placeholder='Password'
        style={styles.input}
      />
      <Pressable onPress={formik.submitForm}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm
