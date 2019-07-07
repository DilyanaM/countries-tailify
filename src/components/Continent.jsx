import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle, Button,
} from 'reactstrap';

const Continent = (props) => {
  const { name, code } = props.continent;
  return (
    <Card className="mt-3 mb-3">
      <CardBody>
        <CardTitle>
          <h3>{name}</h3>
        </CardTitle>
        <Link to={`/continents/${code}`}>
          <Button color="success">Discover</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

Continent.propTypes = {
  continent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,

};

export default Continent;
