import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

export const GET_CONTINENT = gql`
  query GetContinent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        emoji
        languages {
          name
        }
      }
    }
  }
`;
