import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.secondary,
    padding: 16,
    flexDirection: 'row',
    gap: theme.sizes.md
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text={'Repositories'} to={'/'} />
      <AppBarTab text={'Sign in'} to={'/signin'} />
    </View>
  )
}

export default AppBar
