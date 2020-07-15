import { Navigation } from 'react-native-navigation';
import prepareIcons from './icons';

export const startTabNavigation = async () => {
  const icons = await prepareIcons();

  const TABS = [
    { screen: 'brain.counters', label: 'Counters', icon: icons.flame },
    { screen: 'brain.counters', label: 'Settings', icon: icons.star },
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
