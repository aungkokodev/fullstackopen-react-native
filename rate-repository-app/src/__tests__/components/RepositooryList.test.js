import { render, screen, within } from '@testing-library/react-native'
import { RepositoryListContainer } from '../../components/RepositoryList'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4'
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4'
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ=='
          }
        ]
      }

      await render(<RepositoryListContainer repositories={repositories} />)

      const repositoryItems = screen.getAllByTestId('repositoryItem')
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems

      // first repository item
      const firstFullName = within(firstRepositoryItem).getByTestId('fullName')
      const firstDescription =
        within(firstRepositoryItem).getByTestId('description')
      const firstLanguage = within(firstRepositoryItem).getByTestId('language')
      const firstStargazersCount =
        within(firstRepositoryItem).getByTestId('stargazersCount')
      const firstForksCount =
        within(firstRepositoryItem).getByTestId('forksCount')
      const firstReviewCount =
        within(firstRepositoryItem).getByTestId('reviewCount')
      const firstRatingAverage =
        within(firstRepositoryItem).getByTestId('ratingAverage')

      expect(firstFullName).toHaveTextContent('jaredpalmer/formik')
      expect(firstDescription).toHaveTextContent(
        'Build forms in React, without the tears'
      )
      expect(firstLanguage).toHaveTextContent('TypeScript')
      expect(firstStargazersCount).toHaveTextContent('21.9k')
      expect(firstForksCount).toHaveTextContent('1.6k')
      expect(firstReviewCount).toHaveTextContent('3')
      expect(firstRatingAverage).toHaveTextContent('88')

      // second repository item
      const secondFullName =
        within(secondRepositoryItem).getByTestId('fullName')
      const secondDescription =
        within(secondRepositoryItem).getByTestId('description')
      const secondLanguage =
        within(secondRepositoryItem).getByTestId('language')
      const secondStargazersCount =
        within(secondRepositoryItem).getByTestId('stargazersCount')
      const secondForksCount =
        within(secondRepositoryItem).getByTestId('forksCount')
      const secondReviewCount =
        within(secondRepositoryItem).getByTestId('reviewCount')
      const secondRatingAverage =
        within(secondRepositoryItem).getByTestId('ratingAverage')

      expect(secondFullName).toHaveTextContent('async-library/react-async')
      expect(secondDescription).toHaveTextContent(
        'Flexible promise-based React data loader'
      )
      expect(secondLanguage).toHaveTextContent('JavaScript')
      expect(secondStargazersCount).toHaveTextContent('1.8k')
      expect(secondForksCount).toHaveTextContent('69')
      expect(secondReviewCount).toHaveTextContent('3')
      expect(secondRatingAverage).toHaveTextContent('72')
    })
  })
})
