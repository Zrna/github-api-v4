import * as React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Loader
        type='Oval'
        color='#099cec'
        height={50}
        width={50}
      />
    </div>
  );
};

export default Spinner;
