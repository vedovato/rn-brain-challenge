import { Navigation } from 'react-native-navigation';
import { startTabNavigation } from './src/utils/navigation';
import App from './App';

Navigation.registerComponent('brain.counters', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  startTabNavigation();
});
