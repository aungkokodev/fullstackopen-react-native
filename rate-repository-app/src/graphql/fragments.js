import { gql } from '@apollo/client'

export const RepositoryFields = gql`
  fragment RepositoryFields on Repository {
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

export const ReviewFields = gql`
  fragment ReviewFields on Review {
    id
    text
    rating
    createdAt
    repositoryId
  }
`

export const UserFields = gql`
  fragment UserFields on User {
    username
    reviewCount
    id
    createdAt
  }
`

export const PageInfo = gql`
  fragment PageInfo on PageInfo {
    endCursor
    hasNextPage
  }
`
