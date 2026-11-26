import { gql } from '@apollo/client'
import { RepositoryFileds, RepositoryWithReviews, Review } from './fragments'

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
  query ($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...Review
          }
        }
      }
    }
  }

  ${Review}
`

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      ...RepositoryWithReviews
    }
  }

  ${RepositoryWithReviews}
`
