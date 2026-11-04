import { useQuery } from '@apollo/client/react'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY } from '../graphql/queries'
import RepositoryItem from './RepositoryItem'

const RepositoryPage = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: {
      id
    }
  })

  if (loading) return null

  return <RepositoryItem item={data.repository} showBtn={true} />
}

export default RepositoryPage
