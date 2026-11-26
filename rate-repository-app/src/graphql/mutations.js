import { gql } from '@apollo/client'
import { Review } from './fragments'

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
      ...Review
    }
  }

  ${Review}
`

export const CREATE_USER = gql`
  mutation ($user: CreateUserInput) {
    createUser(user: $user) {
      username
      reviewCount
      id
      createdAt
      reviews {
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

export const DELETE_REVIEW = gql`
  mutation ($id: ID!) {
    deleteReview(id: $id)
  }
`
