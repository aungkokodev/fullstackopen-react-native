import { useApolloClient, useMutation } from '@apollo/client/react'
import { useNavigate } from 'react-router-native'
import { CREATE_USER } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'
import useSignIn from '../hooks/useSignIn'
import SingUpForm from './SignUpForm'

const SignUp = () => {
  const [mutate] = useMutation(CREATE_USER)
  const [singIn] = useSignIn()
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const onSubmit = async ({ username, password }) => {
    try {
      const result = await mutate({
        variables: {
          user: {
            username,
            password
          }
        }
      })

      if (result.data) {
        const { data } = await singIn({ username, password })
        const accessToken = data.authenticate.accessToken
        await authStorage.setAccessToken(accessToken)
        await apolloClient.resetStore()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return <SingUpForm onSubmit={onSubmit} />
}

export default SignUp
