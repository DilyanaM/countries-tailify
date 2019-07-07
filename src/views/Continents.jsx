import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Container, Row, Col } from 'reactstrap';
import Continent from '../components/Continent';
import Loader from '../components/common/Loader';
import Error from '../components/common/Error';

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
      if (loading) return <Loader />;
      if (error) return <Error />;

      return (
        <Container fluid className="align-self-start">
          <h1 className="mb-5 mt-5">Continents</h1>
          <Row className="justify-content-center">
            {data.continents.map(continent => (
              <Col xs="6" sm="6" md="4" key={continent.code}>
                <Continent continent={continent} />
              </Col>
            ))}
          </Row>
        </Container>
      );
    }}
  </Query>
);

export default Continents;
