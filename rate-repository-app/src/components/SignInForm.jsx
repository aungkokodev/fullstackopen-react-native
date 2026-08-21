import { useFormik } from 'formik'
import { StyleSheet, View } from 'react-native'
import * as yup from 'yup'
import theme from '../theme'
import Button from './Button'
import InputWithError from './InputWithError'

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  console.log(formik.values, formik.errors)
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
      <Button text={'Sign in'} onPress={formik.submitForm} />
    </View>
  )
}

export default SignInForm

const styles = StyleSheet.create({
  container: {
    padding: theme.sizes.md,
    gap: theme.sizes.md
  }
})
