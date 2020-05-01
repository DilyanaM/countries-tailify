import gql from 'graphql-tag';

const GET_CONTINENT = gql`
  query getContinent($code: ID!) {
    continent(code: $code) {
      name,
      countries {
        code,
        name,
        emoji
      }
    }
  }
`;

export default GET_CONTINENT;
