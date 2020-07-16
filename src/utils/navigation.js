import { Navigation } from 'react-native-navigation';
import prepareIcons from './icons';
import { colors } from './theme';

export const startTabNavigation = async () => {
  const icons = await prepareIcons();

  const TABS = [
    { screen: 'brain.counters', label: 'Counters', icon: icons.home },
    { screen: 'brain.settings', label: 'Settings', icon: icons.cog },
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

export const showToast = ({ type, delay }) => {
  const options = {
    layout: { componentBackgroundColor: 'transparent' },
    overlay: { interceptTouchOutside: false },
  };

  Navigation.showOverlay({
    component: {
      passProps: { type, delay },
      name: 'component.toast',
      options,
    },
  });
};

export const defaultStyling = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.greyish,
      style: 'light',
    },

    layout: {
      componentBackgroundColor: colors.light,
    },

    topBar: {
      background: { color: colors.greyish },
      title: { color: 'white', alignment: 'center' },
      noBorder: true, // ios
      elevation: 0, // android
    },

    bottomTabs: {
      backgroundColor: 'white',
      hideShadow: true, // ios
      elevation: 0, // android
    },

    bottomTab: {
      iconColor: colors.grey,
      textColor: colors.grey,
      selectedIconColor: colors.greyish,
      selectedTextColor: colors.greyish,
    },

    navigationBar: {
      backgroundColor: 'white',
    },
  });
};
