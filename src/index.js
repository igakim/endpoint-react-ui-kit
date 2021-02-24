import './assets/scss/index.scss';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export { default as Button } from './components/Button';
export { default as IconButton } from './components/IconButton';
export { default as Container } from './components/Container';
export { default as Text } from './components/Text';
export { default as TextInput } from './components/TextInput';
export { default as InputLabel } from './components/InputLabel';
export { default as Autocomplete } from './components/Autocomplete';
export { default as DateInput } from './components/DateInput';
export * from './components/icons';
export * from './hooks';

dayjs.extend(customParseFormat);
