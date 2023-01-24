import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Pagination = ({ numberOfPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberOfPage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else if (currentPage !== numberOfPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage >= numberOfPage) {
      return setCurrentPage(1);
    }

    if (currentPage !== numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Row className="mt-2">
      <Col>
        <Button variant="light" onClick={prevPage}>
          Previos
        </Button>
      </Col>
      <Col>
        {pageNumbers.map((pageNum, index) => {
          return (
            <Button
              key={index}
              variant="light"
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {pageNum}
            </Button>
          );
        })}
      </Col>
      <Col>
        <Button variant="light" onClick={nextPage}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

export default Pagination;
