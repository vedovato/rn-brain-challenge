import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, FlatList } from 'react-native';

import { setSelected } from '../redux/slice';
import CounterItem from '../components/Counter';
import Empty from '../components/Empty';

const Counters = () => {
  const { selected, counters } = useSelector((state) => state?.counters);
  const dispatch = useDispatch();

  if (!counters.length) {
    return <Empty />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={counters}
        keyExtractor={(_, i) => `item_${i}`}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View>
            <CounterItem
              onPress={() => dispatch(setSelected(index))}
              active={selected === index}
              count={item.value}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Counters;
