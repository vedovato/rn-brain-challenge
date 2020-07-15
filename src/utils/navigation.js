import { Navigation } from 'react-native-navigation';
import prepareIcons from './icons';

export const startTabNavigation = async () => {
  const icons = await prepareIcons();

  const TABS = [
    { screen: 'brain.counters', label: 'Counters', icon: icons.flame },
    { screen: 'brain.settings', label: 'Settings', icon: icons.star },
  ];

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: TABS.map((item) => ({
          stack: {
            children: [{ component: { name: item.screen } }],
            options: {
              topBar: { title: { text: item.label } },
              bottomTab: { icon: item.icon, text: item.label },
            },
          },
        })),
      },
    },
  });
};

export const defaultStyling = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'blue',
      style: 'light',
    },

    layout: {
      componentBackgroundColor: '#ccc',
    },

    topBar: {
      background: { color: 'blue' },
      title: { color: 'white', alignment: 'center' },
      noBorder: true, // ios
      elevation: 0, // android
    },

    bottomTabs: {
      backgroundColor: 'green',
      hideShadow: true, // ios
      elevation: 0, // android
    },

    bottomTab: {
      iconColor: 'red',
      textColor: 'red',
      selectedIconColor: 'yellow',
      selectedTextColor: 'yellow',
    },

    navigationBar: {
      backgroundColor: 'purple',
    },
  });
};
