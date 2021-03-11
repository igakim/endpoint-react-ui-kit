import React from 'react';
import { Table, Container } from '../src';

const Tables = () => (
    <Container>
      <Container.Row spacing={2}>
        <Container.Item xxs={12}>
          <Table>
            <Table.Head>
              <Table.Tr>
                <Table.Th>Dessert (100g serving)</Table.Th>
                <Table.Th>Calories</Table.Th>
                <Table.Th>Fat (g)</Table.Th>
                <Table.Th>Carbs (g)</Table.Th>
                <Table.Th>Protein (g)</Table.Th>
              </Table.Tr>
            </Table.Head>
            <Table.Footer>
              <Table.Tr selected>
                <Table.Td>Ice cream sandwich</Table.Td>
                <Table.Td>237</Table.Td>
                <Table.Td>9</Table.Td>
                <Table.Td>37</Table.Td>
                <Table.Td>4.3</Table.Td>
              </Table.Tr>
            </Table.Footer>
            <Table.Body>
              <Table.Tr>
                <Table.Td>Cupcake</Table.Td>
                <Table.Td>305</Table.Td>
                <Table.Td>3.7</Table.Td>
                <Table.Td>67</Table.Td>
                <Table.Td>4.3</Table.Td>
              </Table.Tr>
            </Table.Body>
          </Table>
        </Container.Item>
      </Container.Row>
    </Container>
);

export default Tables;
