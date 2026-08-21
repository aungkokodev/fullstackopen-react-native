import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.secondary,
    padding: 16
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to={'/'}>
          <AppBarTab text={'Repositories'} />
        </Link>
        <Link to={'/signin'}>
          <AppBarTab text={'Sign in'} />
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
