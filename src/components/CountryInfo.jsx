import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';

const CountryInfo = (props) => {
  const {
    name, native, phone, currency, languages, emoji,
  } = props.country;
  return (
    <div>
      <span>{emoji}</span>
      <h1>{name}</h1>
      <h4>
        <span>Native name: </span>
        {native}
      </h4>
      <h4>
        <span>Phone: </span>
        <Badge color="secondary">{phone || 'N/A'}</Badge>
      </h4>
      <h4>
        <span>Currency: </span>
        {currency || 'N/A'}
      </h4>
      <div>
        <h4>
          <span>Languages: </span>
          {languages.length
            ? languages.map(language => (
              <Badge key={language.code} className="mr-1">
                {language.name}
              </Badge>
            ))
            : 'N/A'
          }
        </h4>
      </div>
    </div>
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
