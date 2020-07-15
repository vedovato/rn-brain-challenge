import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Counters from '../screens/Counters';
import Settings from '../screens/Settings';

const SCREENS = [
  { name: 'brain.counters', Component: Counters },
  { name: 'brain.settings', Component: Settings },
];

const screens = () => {
  SCREENS.map(({ name, Component }) =>
    Navigation.registerComponent(name, () => (props) => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )),
  );
};

export default screens;
