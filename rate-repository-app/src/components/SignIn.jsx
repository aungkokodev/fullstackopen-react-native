import SignInForm from './SignInForm'

const SignIn = () => {
  const onSubmit = values => {
    console.log(values)
  }

  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
