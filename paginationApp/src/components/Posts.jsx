import React, { useState } from 'react';
import Post from './Post/Post';

import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button';
import Pagination from './Pagination';

const Posts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);

  let numberOfPage = Math.ceil(posts.length / recordsPerPage);

  return (
    <Container>
      <Row>
        {currentRecords.map((post, index) => (
          <Col key={index}>
            <Col>
              <Post post={post} />
            </Col>
            <Col>
              {/* <Button onClick={() => setCurrentPage(index + 1)} /> */}
            </Col>
          </Col>
        ))}
        <Pagination
          numberOfPage={numberOfPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Row>
    </Container>
  );
};

export default Posts;
