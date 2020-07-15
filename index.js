import { Navigation } from 'react-native-navigation';
import { startTabNavigation, defaultStyling } from './src/utils/navigation';
import screens from './src/utils/screens';

screens();

Navigation.events().registerAppLaunchedListener(() => {
  startTabNavigation();
  defaultStyling();
});
