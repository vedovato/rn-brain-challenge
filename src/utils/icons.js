import Icon from 'react-native-vector-icons/Ionicons';

export default async () => {
  const icons = await Promise.all([
    Icon.getImageSource('md-flame', 30),
    Icon.getImageSource('md-star', 30),
  ]);

  const [flame, star] = icons;
  return { flame, star };
};
