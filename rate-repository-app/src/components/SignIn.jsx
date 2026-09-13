import { useApolloClient } from '@apollo/client/react'
import { useNavigate } from 'react-router-native'
import useAuthStorage from '../hooks/useAuthStorage'
import useSignIn from '../hooks/useSignIn'
import SignInForm from './SignInForm'

const SignIn = () => {
  const [signIn] = useSignIn()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  const apolloClient = useApolloClient()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      const accessToken = data.authenticate.accessToken
      await authStorage.setAccessToken(accessToken)
      await apolloClient.resetStore()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
