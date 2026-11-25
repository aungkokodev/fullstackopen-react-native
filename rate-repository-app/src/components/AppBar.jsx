import { useApolloClient, useQuery } from '@apollo/client/react'
import Constants from 'expo-constants'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { ME } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const AppBar = () => {
  const query = useQuery(ME)
  const username = query.data?.me?.username
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()

  const goToSingOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  const goToCreateReview = () => {
    navigate('/reviews/create')
  }

  const goToSignIn = () => {
    navigate('/signin')
  }

  const goToSignUp = () => {
    navigate('/signup')
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={goToHome}>
          <AppBarTab text={'Repositories'} />
        </Pressable>
        {username ?
          <>
            <Pressable onPress={goToCreateReview}>
              <AppBarTab text={'Create a review'} />
            </Pressable>
            <Pressable onPress={goToSingOut}>
              <AppBarTab text={'Sign out'} />
            </Pressable>
          </>
        : <>
            <Pressable onPress={goToSignIn}>
              <AppBarTab text={'Sign in'} />
            </Pressable>
            <Pressable onPress={goToSignUp}>
              <AppBarTab text={'Sing up'} />
            </Pressable>
          </>
        }
      </ScrollView>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.secondary,
    padding: 16
  },
  scrollContainer: {
    gap: theme.sizes.md
  }
})
