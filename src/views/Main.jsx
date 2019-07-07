import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Main = () => (
  <div>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    <h1 className="display-3">Tailify's travel guide</h1>
    <p className="lead">Find your travel destination</p>
    <Link to="/continents">
      <Button color="success" size="lg">Explore</Button>
    </Link>
  </div>
);

export default Main;
