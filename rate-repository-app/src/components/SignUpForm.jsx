import { useFormik } from 'formik'
import { StyleSheet, View } from 'react-native'
import * as yup from 'yup'
import theme from '../theme'
import Button from './Button'
import InputWithError from './InputWithError'

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5')
    .max(30, 'Username must not exceed 30'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5')
    .max(50, 'Password must not exceed 50'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required')
})

const SingUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  return (
    <View style={styles.container}>
      <InputWithError
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
        placeholder='Username'
        touched={formik.touched.username}
        error={formik.errors.username}
      />
      <InputWithError
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        placeholder='Password'
        touched={formik.touched.password}
        error={formik.errors.password}
      />
      <InputWithError
        secureTextEntry
        value={formik.values.passwordConfirm}
        onChangeText={formik.handleChange('passwordConfirm')}
        onBlur={formik.handleBlur('passwordConfirm')}
        placeholder='Password confirmation'
        touched={formik.touched.passwordConfirm}
        error={formik.errors.passwordConfirm}
      />
      <Button text={'Sign in'} onPress={formik.submitForm} />
    </View>
  )
}

export default SingUpForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.primary,
    padding: theme.sizes.md,
    gap: theme.sizes.md
  }
})
