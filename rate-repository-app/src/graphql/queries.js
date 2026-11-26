import { gql } from '@apollo/client'
import {
  PageInfo,
  RepositoryFields,
  ReviewFields,
  UserFields
} from './fragments'

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
      pageInfo {
        ...PageInfo
      }
    }
  }

  ${RepositoryFields}
  ${PageInfo}
`

export const ME = gql`
  query ($includeReviews: Boolean = false) {
    me {
      ...UserFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
            repository {
              ...RepositoryFields
            }
          }
        }
      }
    }
  }

  ${UserFields}
  ${ReviewFields}
  ${RepositoryFields}
`

export const GET_REPOSITORY = gql`
  query ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryFields
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewFields
            user {
              ...UserFields
            }
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }

  ${RepositoryFields}
  ${ReviewFields}
  ${UserFields}
  ${PageInfo}
`
