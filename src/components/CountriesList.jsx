import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CountriesList extends React.Component {
  state = {
    viewportHeight: 0,
    elementsHeight: 0,
  };

  componentDidMount() {
    const header = document.getElementsByClassName('header')[0].offsetHeight;
    const continentTitle = document
      .getElementsByClassName('continent-name')[0].offsetHeight;
    const filterInput = document.getElementsByClassName('filter')[0].offsetHeight;
    const vh = document.getElementById('root').offsetHeight;

    this.setState({
      viewportHeight: vh,
      elementsHeight: header + continentTitle + filterInput,
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
            <ListGroupItem key={country.code}>{country.name}</ListGroupItem>
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
