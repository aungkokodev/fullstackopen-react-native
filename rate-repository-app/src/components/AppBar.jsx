import { useApolloClient, useQuery } from '@apollo/client/react'
import Constants from 'expo-constants'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import { ME } from '../graphql/queries'
import useAuthStorage from '../hooks/useAuthStorage'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const AppBar = () => {
  const query = useQuery(ME)
  const username = query.data?.me?.username
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const handleSingOut = async () => {
    await authStorage.removeAccessToken()
    await apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <Link to={'/'}>
          <AppBarTab text={'Repositories'} />
        </Link>
        {username ?
          <Pressable onPress={handleSingOut}>
            <AppBarTab text={'Sign out'} />
          </Pressable>
        : <Link to={'/signin'}>
            <AppBarTab text={'Sign in'} />
          </Link>
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
