import React from 'react';
import { Container, Text } from '../src';

const Layouts = () => (
    <Container>
      <Container.Row>
        <Container.Item xxs={12}>
          <Text component="h1" color="main" variant="h1">LAYOUTS</Text>
        </Container.Item>
      </Container.Row>
      <Container.Row justify="center" align="center" spacing={6}>
        <Container.Item alignSelf="end" xxs={12} xs={4} sm={6} md={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At corporis cum dicta dignissimos dolor dolorum facilis in
          labore laudantium magnam, molestias nemo nobis nulla porro
          quae quis saepe sapiente sed sit suscipit tenetur ullam, voluptates.
          Ab accusamus corporis dolores, ducimus earum error exercitationem hic
          ipsam laboriosam minima modi molestias numquam odio optio
          perferendis, quibusdam quidem quisquam ratione sed veritatis.
          Asperiores atque nam, nisi repudiandae sed sequi similique sit.
          Ab cumque eveniet maxime nisi optio, possimus quae. Dolorum, ea
          exercitationem maiores molestiae necessitatibus non quasi quibusdam
          reiciendis sequi soluta, vel veritatis voluptatem voluptatibus.
          Accusamus dolor enim illo ipsa placeat quas quasi!
        </Container.Item>
        <Container.Item alignSelf="end" xxs={12} xs={4} sm={6} md={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At corporis cum dicta dignissimos dolor dolorum facilis
          n labore laudantium magnam, molestias nemo nobis nulla
          porro quae quis saepe sapiente sed sit suscipit tenetur
          ullam, voluptates. Ab accusamus corporis dolores, ducimus
          earum error exercitationem hic ipsam laboriosam minima modi
          molestias numquam odio optio perferendis, quibusdam quidem
          quisquam ratione sed veritatis. Asperiores atque nam, nisi
          repudiandae sed sequi similique sit. Ab cumque eveniet maxime
          nisi optio, possimus quae. Dolorum, ea exercitationem maiores
          molestiae necessitatibus non quasi quibusdam reiciendis sequi
          soluta, vel veritatis voluptatem voluptatibus. Accusamus dolor
          enim illo ipsa placeat quas quasi!
        </Container.Item>
        <Container.Item alignSelf="end" xxs={12} xs={4} sm={12} md={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At corporis cum dicta dignissimos dolor dolorum facilis
          n labore laudantium magnam, molestias nemo nobis nulla
          porro quae quis saepe sapiente sed sit suscipit tenetur
          ullam, voluptates. Ab accusamus corporis dolores, ducimus
          earum error exercitationem hic ipsam laboriosam minima modi
          molestias numquam odio optio perferendis, quibusdam quidem
          quisquam ratione sed veritatis. Asperiores atque nam, nisi
          repudiandae sed sequi similique sit. Ab cumque eveniet maxime
          nisi optio, possimus quae. Dolorum, ea exercitationem maiores
          molestiae necessitatibus non quasi quibusdam reiciendis sequi
          soluta, vel veritatis voluptatem voluptatibus. Accusamus dolor
          enim illo ipsa placeat quas quasi!
        </Container.Item>
      </Container.Row>
    </Container>
);

export default Layouts;
