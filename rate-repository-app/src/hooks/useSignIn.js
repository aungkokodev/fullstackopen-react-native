import { useMutation } from '@apollo/client/react'
import { SING_IN } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(SING_IN)

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: {
        credentials: {
          username,
          password
        }
      }
    })
  }

  return [signIn, result]
}

export default useSignIn
