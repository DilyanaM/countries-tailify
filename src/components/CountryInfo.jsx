import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Jumbotron, Badge,
} from 'reactstrap';

const CountryInfo = (props) => {
  const {
    name, native, phone, currency, languages, emoji,
  } = props.country;
  return (
    <Container className="country-container mt-5">
      <Jumbotron className="country-heading align-items-center">
        <h1 className="display-1">{emoji}</h1>
        <div className="country-name">
          <h1>{name}</h1>
          <h4>{native}</h4>
        </div>
      </Jumbotron>
      <Container fluid className="country-details bg-dark">
        <Row>
          <Col xs="12" md="4">
            <h4 className="country-detail">Phone:</h4>
            <h4><Badge color="light">{phone || 'N/A'}</Badge></h4>
          </Col>
          <Col xs="12" md="4">
            <h4 className="country-detail">Currency:</h4>
            <h4><Badge color="light">{currency || 'N/A'}</Badge></h4>
          </Col>
          <Col xs="12" md="4">
            <h4 className="country-detail">Languages:</h4>
            <h4>
              {languages.length
                ? languages.map(language => (
                  <Badge key={language.code} color="light" className="ml-1 mr-1">
                    {language.name}
                  </Badge>
                ))
                : 'N/A'
              }
            </h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

CountryInfo.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    })).isRequired,
    emoji: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryInfo;
