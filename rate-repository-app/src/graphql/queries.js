import { gql } from '@apollo/client'
import { RepositoryFileds } from './fragments'

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
