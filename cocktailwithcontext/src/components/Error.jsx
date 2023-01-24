import React from 'react';

const Error = ({ error }) => {
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {error}
      </div>
    </>
  );
};

export default Error;
