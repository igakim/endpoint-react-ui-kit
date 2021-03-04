import React, { useState } from 'react';
import { Pagination, Container } from '../src';

const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Container>
      <Container.Row spacing={2}>
        <Container.Item>
          <Pagination
            totalObjects={1000}
            activePage={currentPage}
            pageSize={10}
            onPrevClick={() => setCurrentPage(currentPage - 1)}
            onNextClick={() => setCurrentPage(currentPage + 1)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Container.Item>
      </Container.Row>
    </Container>
  );
};

export default Paginations;
