import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react-native'
import SignInForm from '../../components/SignInForm'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const handleSubmit = jest.fn()

      await render(<SignInForm onSubmit={handleSubmit} />)

      await fireEvent(
        screen.getByPlaceholderText('Username'),
        'changeText',
        'kalle'
      )
      await fireEvent(
        screen.getByPlaceholderText('Password'),
        'changeText',
        'password'
      )
      await fireEvent(screen.getByText('Sign in'), 'press')

      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1)
        expect(handleSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password'
        })
      })
    })
  })
})
