import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Col } from 'reactstrap';
import Continent from '../components/Continent';

const Continents = () => (
  <Query
    query={gql`
      {
        continents {
          code,
          name,
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            {data.continents.map(continent => (
              <Col xs="6" sm="4" md="3" key={continent.code}>
                <Continent continent={continent} />
              </Col>
            ))}
          </div>
        </div>
      );
    }}
  </Query>
);

export default Continents;
