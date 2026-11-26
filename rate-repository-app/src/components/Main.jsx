import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import theme from '../theme'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import SignIn from './SignIn'
import SingleRepository from './SingleRepository'
import SignUp from './SingUp'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path={'/'} element={<RepositoryList />} />
        <Route path={'/reviews/create'} element={<ReviewForm />} />
        <Route path={'/repositories/:id'} element={<SingleRepository />} />
        <Route path={'/me'} element={<ReviewList />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/signup'} element={<SignUp />} />
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
