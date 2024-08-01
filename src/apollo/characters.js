import { gql } from '@apollo/client';

export const CHARACTER_PAGE = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      characters: results {
        id
        name
        episode {
          name
        }
        image
      }
    }
  }
`;
