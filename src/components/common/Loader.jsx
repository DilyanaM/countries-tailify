import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => (
  <div>
    <Spinner type="grow" color="success" />
    <Spinner type="grow" color="success" />
    <Spinner type="grow" color="success" />
  </div>
);

export default Loader;
