import React from 'react';
import glass from '../assets/images/glass.png';

const ErrorPage = ({ error }) => {
  console.log('errorPage');
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center row">
          <div className=" col-md-6">
            <img src={glass} alt="glass" style={{ width: '20rem' }} />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              {' '}
              <span className="text-danger">{error}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
