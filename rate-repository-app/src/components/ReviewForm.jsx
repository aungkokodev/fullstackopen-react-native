import { useMutation } from '@apollo/client/react'
import { useFormik } from 'formik'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import { CREATE_REVIEW } from '../graphql/mutations'
import theme from '../theme'
import Button from './Button'
import InputWithError from './InputWithError'

const initialValues = {
  ownerName: '',
  name: '',
  rating: '',
  review: ''
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  name: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .typeError('Rating must be between 0 and 100'),
  review: yup.string().optional()
})

const ReviewForm = () => {
  const [mutate] = useMutation(CREATE_REVIEW)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        const { data } = await mutate({
          variables: {
            review: {
              ownerName: values.ownerName,
              repositoryName: values.name,
              rating: Number(values.rating),
              text: values.review
            }
          }
        })

        if (data) {
          const id = data.createReview?.repositoryId
          navigate(`/repositories/${id}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <View style={styles.container}>
      <InputWithError
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        onBlur={formik.handleBlur('ownerName')}
        placeholder='Repository owner name'
        touched={formik.touched.ownerName}
        error={formik.errors.ownerName}
      />
      <InputWithError
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        placeholder='Repository name'
        touched={formik.touched.name}
        error={formik.errors.name}
      />
      <InputWithError
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
        onBlur={formik.handleBlur('rating')}
        placeholder='Rating between 0 and 100'
        touched={formik.touched.rating}
        error={formik.errors.rating}
      />
      <InputWithError
        value={formik.values.review}
        onChangeText={formik.handleChange('review')}
        onBlur={formik.handleBlur('review')}
        placeholder='Review'
        touched={formik.touched.review}
        error={formik.errors.review}
        multiline
      />
      <Button text='Create a review' onPress={formik.submitForm} />
    </View>
  )
}

export default ReviewForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.primary,
    padding: theme.sizes.md,
    gap: theme.sizes.md
  }
})
