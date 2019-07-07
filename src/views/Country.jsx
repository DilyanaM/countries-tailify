import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Container } from 'reactstrap';
import CountryInfo from '../components/CountryInfo';
import Loader from '../components/common/Loader';
import Error from '../components/common/Error';

const Country = (props) => {
  const { code } = props.match.params;
  return (
    <Query
      query={gql`
        {
          country(code: "${code}") {
            name
            native
            phone
            currency
            languages {
              code,
              name
            }
            emoji
            emojiU
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <Error />;

        return (
          <Container>
            <CountryInfo country={data.country} />
          </Container>
        );
      }}
    </Query>
  );
};

Country.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Country;
