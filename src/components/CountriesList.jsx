import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CountriesList extends React.Component {
  state = {
    viewportHeight: 0,
    elementsHeight: 0,
  };

  componentDidMount() {
    const headerHeight = 56;
    const continentTitleHeight = 144;
    const filterInput = 86;
    const vh = document.getElementById('root').offsetHeight;

    this.setState({
      viewportHeight: vh - 100,
      elementsHeight: headerHeight + continentTitleHeight + filterInput,
    });
  }

  render() {
    const { countriesList } = this.props;
    const { viewportHeight, elementsHeight } = this.state;

    return (
      <div
        className="scroll-container"
        style={{ height: viewportHeight - elementsHeight }}
      >
        <ListGroup>
          {countriesList.map(country => (
            <Link to={`/countries/${country.code}`} key={country.code}>
              <ListGroupItem className="bg-light">
                <h5 className="country-name">{country.name}</h5>
                <h1 className="country-flag">{country.emoji}</h1>
              </ListGroupItem>
            </Link>
          ))}
        </ListGroup>
      </div>
    );
  }
}

CountriesList.propTypes = {
  countriesList: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
