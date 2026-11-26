import { gql } from '@apollo/client'
import { ReviewFields, UserFields } from './fragments'

export const SING_IN = gql`
  mutation ($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      ...ReviewFields
      user {
        ...UserFields
      }
    }
  }

  ${ReviewFields}
  ${UserFields}
`

export const CREATE_USER = gql`
  mutation ($user: CreateUserInput) {
    createUser(user: $user) {
      ...UserFields
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }

  ${UserFields}
  ${ReviewFields}
`

export const DELETE_REVIEW = gql`
  mutation ($id: ID!) {
    deleteReview(id: $id)
  }
`
