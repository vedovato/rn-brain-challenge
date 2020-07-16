import Icon from 'react-native-vector-icons/Ionicons';

export default async () => {
  const icons = await Promise.all([
    Icon.getImageSource('md-home', 30),
    Icon.getImageSource('md-cog', 30),
  ]);

  const [home, cog] = icons;
  return { home, cog };
};
