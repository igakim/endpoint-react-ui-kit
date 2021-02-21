import React from 'react';
import {
  Button,
  IconButton,
  useThemeSwitcher,
  AlertCircle,
  Container,
} from '../src';
import '../src/assets/scss/_reset.scss';

const App = () => {
  const switchTheme = useThemeSwitcher();

  const switchThemeTo = (name) => () => {
    switchTheme(name);
  };

  return (
    <div>
      <div>
        <h2>Theme switcher</h2>
        <button onClick={switchThemeTo('light')}>LIGHT</button>
        <button onClick={switchThemeTo('dark')}>DARK</button>
      </div>
      <div>
        <h2>BUTTONS</h2>
      </div>
      <div>
        <Button
          color="primary"
          size="extra-small"
          variant="filled"
          className="test test2"
        >
          Button
        </Button>
        <Button color="secondary" size="extra-small" variant="filled">Button</Button>
        <Button color="danger" size="extra-small" variant="filled">Button</Button>
        <Button color="info" size="extra-small" variant="filled">Button</Button>
        <Button color="success" size="extra-small" variant="filled">Button</Button>
      </div>
      <div>
        <Button color="primary" size="extra-small" variant="outlined">Button</Button>
        <Button color="secondary" size="extra-small" variant="outlined">Button</Button>
        <Button color="danger" size="extra-small" variant="outlined">Button</Button>
        <Button color="info" size="extra-small" variant="outlined">Button</Button>
        <Button color="success" size="extra-small" variant="outlined">Button</Button>
      </div>
      <div>
        <Button color="primary" size="extra-small" variant="contrasted">Button</Button>
        <Button color="secondary" size="extra-small" variant="contrasted">Button</Button>
        <Button color="danger" size="extra-small" variant="contrasted">Button</Button>
        <Button color="info" size="extra-small" variant="contrasted">Button</Button>
        <Button color="success" size="extra-small" variant="contrasted">Button</Button>
      </div>
      <div>
        <Button color="primary" size="extra-small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
        <Button color="secondary" size="small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
        <Button color="danger" size="medium" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
        <Button color="info" size="large" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />}>Button</Button>
      </div>
      <div>
        <Button color="primary" size="extra-small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
        <Button color="secondary" variant="outlined" size="small" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
        <Button color="danger" size="medium" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
        <Button color="info" size="large" appendIcon={<AlertCircle />} prependIcon={<AlertCircle />} fullWidth>Button</Button>
      </div>
      <div>
        <h2>ICON BUTTONS</h2>
      </div>
      <div>
        <IconButton icon={<AlertCircle />} color="primary" size="small" />
        <IconButton icon={<AlertCircle />} color="secondary" size="small" />
        <IconButton icon={<AlertCircle />} color="danger" size="small" />
        <IconButton icon={<AlertCircle />} color="info" size="small" />
        <IconButton icon={<AlertCircle />} color="success" size="small" />
      </div>
      <div>
        <IconButton icon={<AlertCircle />} color="primary" size="small" variant="outlined" />
        <IconButton icon={<AlertCircle />} color="secondary" size="small" variant="outlined" />
        <IconButton icon={<AlertCircle />} color="danger" size="small" variant="outlined" />
        <IconButton icon={<AlertCircle />} color="info" size="small" variant="outlined" />
        <IconButton icon={<AlertCircle />} color="success" size="small" variant="outlined" />
      </div>
      <div>
        <IconButton icon={<AlertCircle />} color="primary" size="small" variant="contrasted" />
        <IconButton icon={<AlertCircle />} color="secondary" size="small" variant="contrasted" />
        <IconButton icon={<AlertCircle />} color="danger" size="small" variant="contrasted" />
        <IconButton icon={<AlertCircle />} color="info" size="small" variant="contrasted" />
        <IconButton icon={<AlertCircle />} color="success" size="small" variant="contrasted" />
      </div>
      <div>
        <IconButton icon={<AlertCircle />} color="primary" size="extra-small" />
        <IconButton icon={<AlertCircle />} color="secondary" size="small" />
        <IconButton icon={<AlertCircle />} color="danger" size="medium" />
        <IconButton icon={<AlertCircle />} color="info" size="large" />
      </div>

      <div>
        <h2>Layouts</h2>
      </div>
      <div>
        <Container>
          <Container.Row justify="center" align="center" spacing={6}>
            <Container.Item alignSelf="end" xxs={12} xs={4} sm={6} md={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum dicta dignissimos dolor dolorum facilis in labore laudantium magnam, molestias nemo nobis nulla porro quae quis saepe sapiente sed sit suscipit tenetur ullam, voluptates. Ab accusamus corporis dolores, ducimus earum error exercitationem hic ipsam laboriosam minima modi molestias numquam odio optio perferendis, quibusdam quidem quisquam ratione sed veritatis. Asperiores atque nam, nisi repudiandae sed sequi similique sit. Ab cumque eveniet maxime nisi optio, possimus quae. Dolorum, ea exercitationem maiores molestiae necessitatibus non quasi quibusdam reiciendis sequi soluta, vel veritatis voluptatem voluptatibus. Accusamus dolor enim illo ipsa placeat quas quasi!
            </Container.Item>
            <Container.Item alignSelf="end" xxs={12} xs={4} sm={6} md={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum dicta dignissimos dolor dolorum facilis in labore laudantium magnam, molestias nemo nobis nulla porro quae quis saepe sapiente sed sit suscipit tenetur ullam, voluptates. Ab accusamus corporis dolores, ducimus earum error exercitationem hic ipsam laboriosam minima modi molestias numquam odio optio perferendis, quibusdam quidem quisquam ratione sed veritatis. Asperiores atque nam, nisi repudiandae sed sequi similique sit. Ab cumque eveniet maxime nisi optio, possimus quae. Dolorum, ea exercitationem maiores molestiae necessitatibus non quasi quibusdam reiciendis sequi soluta, vel veritatis voluptatem voluptatibus. Accusamus dolor enim illo ipsa placeat quas quasi!
            </Container.Item>
            <Container.Item alignSelf="end" xxs={12} xs={4} sm={12} md={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis cum dicta dignissimos dolor dolorum facilis in labore laudantium magnam, molestias nemo nobis nulla porro quae quis saepe sapiente sed sit suscipit tenetur ullam, voluptates. Ab accusamus corporis dolores, ducimus earum error exercitationem hic ipsam laboriosam minima modi molestias numquam odio optio perferendis, quibusdam quidem quisquam ratione sed veritatis. Asperiores atque nam, nisi repudiandae sed sequi similique sit. Ab cumque eveniet maxime nisi optio, possimus quae. Dolorum, ea exercitationem maiores molestiae necessitatibus non quasi quibusdam reiciendis sequi soluta, vel veritatis voluptatem voluptatibus. Accusamus dolor enim illo ipsa placeat quas quasi!
            </Container.Item>
          </Container.Row>
        </Container>
        <Container>test 2</Container>
      </div>
    </div>
  );
};

export default App;
