import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import RepositoryPage from './RepositoryPage'
import SignIn from './SignIn'
import theme from '../theme'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path={'/'} element={<RepositoryList />} />
        <Route path={'/repositories/:id'} element={<RepositoryPage />} />
        <Route path={'/signin'} element={<SignIn />} />
      </Routes>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgrounds.main
  }
})
