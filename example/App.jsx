import React from 'react';
import {
  Button,
  IconButton,
  useThemeSwitcher,
  AlertCircle,
  Container,
  Text,
  TextInput,
} from '../src';
import '../src/assets/scss/index.scss';
import 'fontsource-roboto';

const App = () => {
  const switchTheme = useThemeSwitcher();

  const switchThemeTo = (name) => () => {
    switchTheme(name);
  };

  return (
    <div>
      <div>
        <Text component="h1" color="main" variant="h1">THEME SWITCHER</Text>
        <Button
          color="secondary"
          size="extra-small"
          variant="filled"
          onClick={switchThemeTo('light')}
        >
          LIGHT
        </Button>
        <Button
          color="primary"
          size="extra-small"
          variant="filled"
          onClick={switchThemeTo('dark')}
        >
          DARK
        </Button>
      </div>
      <div>
        <Text component="h1" color="main" variant="h1">BUTTONS</Text>
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
        <Button color="plain" size="extra-small" variant="filled">Button</Button>
      </div>
      <div>
        <Button color="primary" size="extra-small" variant="outlined">Button</Button>
        <Button color="secondary" size="extra-small" variant="outlined">Button</Button>
        <Button color="danger" size="extra-small" variant="outlined">Button</Button>
        <Button color="info" size="extra-small" variant="outlined">Button</Button>
        <Button color="success" size="extra-small" variant="outlined">Button</Button>
        <Button color="plain" size="extra-small" variant="outlined">Button</Button>
      </div>
      <div>
        <Button color="primary" size="extra-small" variant="contrasted">Button</Button>
        <Button color="secondary" size="extra-small" variant="contrasted">Button</Button>
        <Button color="danger" size="extra-small" variant="contrasted">Button</Button>
        <Button color="info" size="extra-small" variant="contrasted">Button</Button>
        <Button color="success" size="extra-small" variant="contrasted">Button</Button>
        <Button color="plain" size="extra-small" variant="contrasted">Button</Button>
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
        <Text component="h1" color="main" variant="h1">ICON BUTTONS</Text>
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
        <Text component="h1" color="main" variant="h1">LAYOUTS</Text>
      </div>
      <div>
        <Container>
          <Container.Row justify="center" align="center" spacing={6}>
            <Container.Item alignSelf="end" xxs={12} xs={4} sm={6} md={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              At corporis cum dicta dignissimos dolor dolorum facilis in
              labore laudantium magnam, molestias nemo nobis nulla porro
              quae quis saepe sapiente sed sit suscipit tenetur ullam, voluptates. Ab accusamus corporis dolores, ducimus earum error exercitationem hic ipsam laboriosam minima modi molestias numquam odio optio perferendis, quibusdam quidem quisquam ratione sed veritatis. Asperiores atque nam, nisi repudiandae sed sequi similique sit. Ab cumque eveniet maxime nisi optio, possimus quae. Dolorum, ea exercitationem maiores molestiae necessitatibus non quasi quibusdam reiciendis sequi soluta, vel veritatis voluptatem voluptatibus. Accusamus dolor enim illo ipsa placeat quas quasi!
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

      <Text component="h1" color="main" variant="h1">TYPOGRAPHY</Text>
      <div>
        <Text component="h1" color="main">H1</Text>
        <Text component="h2" color="secondary">H2</Text>
        <Text component="h3" color="alter">H3</Text>
        <Text component="h4" color="contrast" style={{ background: 'black' }}>H4</Text>
        <Text component="h5">H5</Text>
        <Text component="h6">H6</Text>
      </div>
      <div>
        <Text component="span" variant="body1">inline </Text>
        <Text component="span" variant="body2">inline </Text>
        <Text component="span" variant="body3">inline </Text>
        <Text component="span" variant="h1">inline </Text>
      </div>
      <div>
        <Text variant="body1">body1</Text>
        <Text variant="body2">body2</Text>
        <Text variant="body3">body3</Text>
        <Text variant="h1">h1</Text>
        <Text variant="h2">h2</Text>
        <Text variant="h3">h3</Text>
        <Text variant="h4">h4</Text>
        <Text variant="h5">h5</Text>
        <Text variant="h6">h6</Text>
        <Text variant="subtitle1">subtitle1</Text>
        <Text variant="subtitle2">subtitle2</Text>
        <Text variant="subtitle3">subtitle3</Text>
      </div>

      <div>
        <Container>
          <Container.Row>
            <Container.Item xs={6}>
              <TextInput size="medium" color="secondary" tipText="Required" state="error" />
            </Container.Item>
            <Container.Item xs={6}>
              <TextInput size="large" color="primary" tipText="Required" />
            </Container.Item>
          </Container.Row>

          <Container.Row>
            <Container.Item xs={6}>
              <TextInput size="small" color="secondary" type="filled" tipText="Required" state="success" showTip />
            </Container.Item>
            <Container.Item xs={6}>
              <TextInput size="large" color="primary" type="filled" tipText="Required" state="error" />
            </Container.Item>
          </Container.Row>
          <Container.Row>
            <Container.Item xs={6}>
              <TextInput size="small" color="secondary" type="outlined" disabled />
            </Container.Item>
            <Container.Item xs={6}>
              <TextInput size="large" color="primary" type="filled" tipText="Required" state="error" disabled />
            </Container.Item>
          </Container.Row>
        </Container>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam asperiores aspernatur consequatur, consequuntur delectus dolorem doloremque ducimus expedita, explicabo facilis in ipsa magnam, modi nam qui reprehenderit rerum. Adipisci aspernatur corporis iure molestiae, sequi voluptate. Ab atque aut dolores incidunt iure nesciunt officiis provident quis similique! Consectetur consequatur cupiditate impedit odit placeat quam rerum. Ab corporis distinctio facilis in neque nesciunt non optio praesentium quas quo? A animi assumenda at beatae consequuntur cum deserunt dolore doloribus ducimus ea enim eos, et ex facilis libero maxime minus molestias nam natus perspiciatis quaerat quasi quia quos recusandae reprehenderit sequi soluta suscipit tempora tempore tenetur ut, veniam veritatis vitae! Dolor ipsa, ipsum iusto laboriosam libero magni odit placeat quo rem saepe tempore tenetur voluptatibus voluptatum? Debitis deserunt doloremque ea ex expedita in incidunt laudantium nemo nisi nulla odio omnis possimus provident quasi quia ratione rem, repudiandae rerum saepe soluta sunt velit, vitae. Accusantium aliquam asperiores at cumque dolore et facilis molestias quo saepe tenetur? Adipisci cupiditate inventore itaque iusto labore maxime molestiae numquam quae quia voluptas. Atque culpa deleniti iusto voluptatum? Assumenda eius eligendi, eveniet expedita fuga harum laudantium mollitia officia optio placeat quis quod totam ullam. Consequatur eligendi illum, ipsa laborum maiores possimus quisquam sint voluptate. Beatae deserunt maxime odit quod similique. A consectetur consequatur doloribus eius excepturi, illum incidunt ipsam laborum numquam omnis pariatur quas qui, quisquam reiciendis repellat reprehenderit ut? Ad amet ex harum hic impedit inventore iste praesentium unde! Dolore, ea hic nesciunt numquam provident quisquam quos tempora. Atque aut commodi, consequatur dolores earum eos iure laboriosam minima molestias nam perferendis quidem voluptatum! Accusantium alias aliquam amet cupiditate debitis dolore dolorem eos error eveniet fuga ipsam iste iusto libero minus modi optio, praesentium quam quibusdam quisquam ratione repellendus saepe suscipit temporibus vero voluptas! Aperiam beatae culpa ea earum ipsum praesentium quia, ullam. A, in quisquam! Ad at beatae delectus, deleniti, dolores et fugiat impedit iure laborum laudantium molestiae molestias quibusdam ratione rerum saepe sed veritatis vero. Adipisci alias doloribus esse fugiat harum incidunt nemo perferendis repudiandae sequi voluptatibus. At doloribus facilis nostrum quis quisquam, quo sapiente similique tempora ullam voluptatibus. Aliquid beatae commodi dolor inventore laboriosam magni maxime mollitia, nulla perferendis quidem, quisquam reiciendis repudiandae, voluptatem. Aliquam aspernatur blanditiis eveniet fugiat ipsum natus quas quo reprehenderit suscipit totam. Amet asperiores consectetur consequatur delectus eveniet in ipsa iste itaque labore laudantium modi molestiae quia, reprehenderit! Accusamus ad beatae consectetur corporis dicta dolore dolorem doloremque, dolores eaque earum eius eum iure laboriosam libero necessitatibus nisi officia quam, quasi quia quibusdam quo voluptas voluptatem voluptatibus? Adipisci aliquid aperiam asperiores deleniti distinctio dolorem doloremque, doloribus eligendi eum, fuga harum id inventore ipsum iste iure laborum magnam magni minima modi numquam praesentium quasi quisquam quod ratione sunt tenetur unde veritatis! Blanditiis explicabo perferendis placeat quaerat qui, rerum tempora. Aliquid blanditiis culpa error esse illo minus. Ad aliquam aperiam corporis debitis dicta doloribus eveniet facilis fuga fugiat ipsum iusto mollitia, neque nulla optio quaerat qui quidem quisquam ratione repudiandae saepe sapiente sit, totam ut.
    </div>
  );
};

export default App;
