import React, { useMemo, useState } from 'react';
import {
  Button,
  useThemeSwitcher,
  Text,
  Navigation,
  User,
  Calendar,
  Lock,
  AlertCircle,
  EmiLogo,
  UncheckedRadio,
  CheckedRadio,
  Paper,
  Eye,
  EyeOff,
  Info,
  Error,
  Container,
  Warning, BottomActionBar, ProgressBar, Fingerprint, ChipReach, FPSuccess, ChipAbsolute, PopoverToggler, Empty,
} from '../src';
import Buttons from './Buttons';
import Layouts from './Layouts';
import Typographies from './Typographies';
import Inputs from './Inputs';
import Autocompletes from './Autocompletes';
import DateInputs from './DateInputs';
import StepsContainer from './Steps';
import Checkboxes from './Checkboxes';
import Radios from './Radios';
import Dialogs from './Dialogs';

import '../src/assets/scss/index.scss';
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/cyrillic-ext-400-italic.css';
import '@fontsource/roboto/cyrillic-ext-700.css';
import Paginations from './Paginations';
import Loader from '../src/components/Loader';
import Chip from '../src/components/Chip/Chip';
import ScrollSpyContainer from './ScrollSpy';
import SwitchContainer from './Switches';
import TextAreas from './TextAreas';
import FileUploadContainer from './FileUploadContainer';
import FileItemViews from './FileItemViews';
import Tables from './Tables';
import RFFDate from './RFFDate';
import TabsContainer from './TabsContainer';

const App = () => {
  const switchTheme = useThemeSwitcher();
  const [open, setOpen] = useState();

  const switchThemeTo = (name) => () => {
    switchTheme(name);
  };

  const helperActions = useMemo(() => [
    {
      key: 1, icon: User, onClick: (e) => console.log(e), label: 'Add user',
    },
    {
      key: 2, icon: Calendar, onClick: (e) => console.log(e), label: 'Remove user',
    },
    {
      key: 3, icon: Lock, onClick: (e) => console.log(e), label: 'Edit user',
    },
    {
      key: 4, icon: AlertCircle, onClick: (e) => console.log(e), label: 'Read user',
    },
  ], []);

  const sidebarItems = useMemo(() => [
    { key: 1, icon: User, onClick: (e) => console.log(e) },
    { key: 2, icon: Calendar, onClick: (e) => console.log(e) },
    { key: 3, icon: Lock, onClick: (e) => console.log(e) },
    { key: 4, icon: AlertCircle, onClick: (e) => console.log(e) },
  ], []);

  const mainActions = useMemo(() => [
    {
      moduleLabel: 'Пользователи',
      key: 1,
      navs: [
        {
          key: 1, icon: User, onClick: (e) => console.log(e), label: 'Add user',
        },
        {
          key: 2, icon: Calendar, onClick: (e) => console.log(e), label: 'Remove user',
        },
        {
          key: 3, icon: Lock, onClick: (e) => console.log(e), label: 'Edit user',
        },
        {
          key: 4, icon: AlertCircle, onClick: (e) => console.log(e), label: 'Read user',
        },
      ],
    },
    {
      moduleLabel: 'Пользователи 2',
      key: 2,
      navs: [
        {
          key: 1, icon: User, onClick: (e) => console.log(e), label: 'Add user',
        },
        {
          key: 2, icon: Calendar, onClick: (e) => console.log(e), label: 'Remove user',
        },
        {
          key: 3, icon: Lock, onClick: (e) => console.log(e), label: 'Edit user',
        },
        {
          key: 4, icon: AlertCircle, onClick: (e) => console.log(e), label: 'Read user',
        },
      ],
    },
  ], []);

  const [show, setshow] = useState(false);

  return (
    <>
      <Navigation
        Logo={EmiLogo}
        sidebarItems={sidebarItems}
        activeSidebarItem={3}
        mainActions={mainActions}
        mainActionActiveKey={3}
        helperActions={helperActions}
        helperActionsLabel="ДеЙСТВИЯ"
        isShowActionBar={show}
        onTogglerClick={() => setshow(!show)}
        renderAdditionalActions={() => (
          <Text component="h1" color="main" variant="h1" style={{ whiteSpace: 'wrap' }}>
            Additional Rendered Components
          </Text>
        )}
        renderSidebarExtra={() => (
          <div>test</div>
        )}
      >
        <div style={{ paddingBottom: 200 }}>
          <div style={{ width: 80, color: 'red' }}>
            <EmiLogo />
          </div>
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
            <CheckedRadio />
          </div>
          <Buttons />
          <Layouts />
          <Typographies />
          <Inputs />
          <Autocompletes />
          <DateInputs />
          <Checkboxes />
          <Radios />
          <StepsContainer />
          <Paginations />
          <div style={{ backgroundColor: 'grey', padding: 10 }}>
            <div style={{ width: 30 }}>
              <Warning color="red" />
            </div>
            <div style={{ width: 50 }}>
              <Error color="red" />
            </div>
            <div style={{ width: 100 }}>
              <Info color="red" />
            </div>
            <Paper>
              <Chip>test</Chip>
              <Chip>test</Chip>
              <Chip>test</Chip>
            </Paper>
          </div>
          {/* <Loader show text="text" /> */}
          <Button onClick={() => setOpen(!open)}>
            toggle
          </Button>
          <Dialogs />
          {
            open
              ? <ScrollSpyContainer />
              : null
          }

          <SwitchContainer />
          <TextAreas />
          <FileUploadContainer />
          <FileItemViews />
          <ProgressBar progress={99} />
          <Tables />
          <div style={{
            width: 200, background: 'black', height: 200, position: 'relative',
          }}>
            <ChipAbsolute
              top={0}
              right={0}
            >
              test
            </ChipAbsolute>
            <ChipAbsolute
              top="50%"
              right={0}
              color="danger"
            >
              test 2
            </ChipAbsolute>
            <ChipAbsolute
              top="50%"
              color="warning"
              left={0}
              radiusSide="right"
            >
              test 3
            </ChipAbsolute>
          </div>
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <ChipReach color="primary">PRIMary</ChipReach>
            <ChipReach color="secondary">secondary</ChipReach>
            <ChipReach color="danger">danger</ChipReach>
            <ChipReach color="warning">warning</ChipReach>
            <ChipReach color="success">success</ChipReach>
            <ChipReach color="info">info</ChipReach>
          </div>
          <RFFDate />
          <TabsContainer />
          <div style={{ width: 800 }}>
            <Empty />
          </div>
          <PopoverToggler
            buttonText="Popover"
            label="TEST TEST TEST TEST TEST"
          >
            <Container>
              <Container.Row spacing={3}>
                <Container.Item md={6}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos laboriosam officiis optio perspiciatis possimus quibusdam quos reprehenderit veritatis vero?</Container.Item>
                <Container.Item md={6}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos laboriosam officiis optio perspiciatis possimus quibusdam quos reprehenderit veritatis vero?</Container.Item>
              </Container.Row>
            </Container>
          </PopoverToggler>
          <BottomActionBar>
            <div>
              <Chip>test</Chip>
              <Chip>test</Chip>
              <Chip>test</Chip>
            </div>
            <div>
              <Chip>test</Chip>
              <Chip>test</Chip>
              <Chip>test</Chip>
            </div>
            <div>
              <Chip>test</Chip>
              <Chip>test</Chip>
              <Chip>test</Chip>
            </div>
          </BottomActionBar>
        </div>
      </Navigation>
    </>
  );
};

export default App;
