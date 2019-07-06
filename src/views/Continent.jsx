import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Container, Input } from 'reactstrap';
import CountriesList from '../components/CountriesList';

export default class Continent extends React.Component {
  state = {
    filterText: '',
  }

  setFilterText = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  }

  render() {
    const { code } = this.props.match.params;
    const { filterText } = this.state;
    return (
      <Query
        query={gql`
          {
            continent(code: "${code}") {
              name,
              countries {
                code,
                name,
                native,
                phone,
                currency,
                languages {
                  name,
                  native
                }
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          const countriesList = filterText
            ? data.continent.countries
              .filter(country => country.name.toLowerCase()
                .includes(filterText.toLowerCase()))
            : data.continent.countries;

          return (
            <Container>
              <h1 className="continent-name">{data.continent.name}</h1>
              <Input
                placeholder="Country"
                value={filterText}
                onChange={this.setFilterText}
                className="filter"
              />
              <CountriesList countriesList={countriesList} />
            </Container>
          );
        }}
      </Query>
    );
  }
}

Continent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
