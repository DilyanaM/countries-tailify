import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Container, Input } from 'reactstrap';
import CountriesList from '../components/CountriesList';
import Loader from '../components/common/Loader';
import Error from '../components/common/Error';
import GET_CONTINENT from '../queries/continent';

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
      <Query query={GET_CONTINENT} variables={{ code }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Error />;

          const countriesList = filterText
            ? data.continent.countries
              .filter(country => country.name.toLowerCase()
                .includes(filterText.toLowerCase()))
            : data.continent.countries;

          return (
            <Container fluid className="align-self-start">
              <h1 className="mb-5 mt-5">{data.continent.name}</h1>
              <Input
                placeholder="Search..."
                value={filterText}
                onChange={this.setFilterText}
                className="filter mb-5"
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
