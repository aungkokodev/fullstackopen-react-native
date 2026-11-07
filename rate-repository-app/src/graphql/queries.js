import { gql } from '@apollo/client'
import { RepositoryFileds, RepositoryWithReviews } from './fragments'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryFileds
        }
      }
    }
  }
  ${RepositoryFileds}
`
export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`
export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      ...RepositoryWithReviews
    }
  }

  ${RepositoryWithReviews}
`
