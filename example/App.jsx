import React from 'react';
import {
  Button,
  useThemeSwitcher,
  Text,
  Autocomplete,
} from '../src';
import Buttons from './Buttons';
import Layouts from './Layouts';
import Typographies from './Typographies';
import Inputs from './Inputs';
import Autocompletes from './Autocompletes';

import '../src/assets/scss/index.scss';
import 'fontsource-roboto';

const App = () => {
  const switchTheme = useThemeSwitcher();

  const switchThemeTo = (name) => () => {
    switchTheme(name);
  };

  return (
    <div style={{ paddingBottom: 200 }}>
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
      <Buttons />
      <Layouts />
      <Typographies />
      <Inputs />
      <Autocompletes />
    </div>
  );
};

export default App;
