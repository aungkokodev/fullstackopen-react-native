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
