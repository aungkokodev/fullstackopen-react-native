import { gql } from '@apollo/client'

const RepositoryFileds = gql`
  fragment RepositoryFileds on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`

export { RepositoryFileds }
