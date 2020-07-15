import { Navigation } from 'react-native-navigation';
import { startTabNavigation } from './src/utils/navigation';

import Counter from './src/screens/Counters';

Navigation.registerComponent('brain.counters', () => Counter);

Navigation.events().registerAppLaunchedListener(() => {
  startTabNavigation();
});
