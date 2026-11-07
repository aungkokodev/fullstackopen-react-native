import { gql } from '@apollo/client'

export const RepositoryFileds = gql`
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

export const Review = gql`
  fragment Review on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`

export const RepositoryWithReviews = gql`
  fragment RepositoryWithReviews on Repository {
    ...RepositoryFileds
    reviews {
      edges {
        node {
          ...Review
        }
      }
    }
  }

  ${RepositoryFileds}
  ${Review}
`
